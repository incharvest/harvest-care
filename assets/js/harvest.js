/* ==========================================================================
   harvest.js — Lenis + GSAP リッチモーション
   ========================================================================== */
(function () {
  'use strict';

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!window.gsap || !window.ScrollTrigger) {
    console.warn('[harvest] GSAP / ScrollTrigger 未ロード');
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  /* 1. スクロールはブラウザ標準を使用（Lenisは無効化） */

  /* 2. 文字単位分割 */
  function splitChars(el) {
    const out = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((textNode) => {
      const frag = document.createDocumentFragment();
      const text = textNode.nodeValue;
      for (const ch of text) {
        if (ch === '\n' || ch === '\r') { frag.appendChild(document.createTextNode(ch)); continue; }
        const span = document.createElement('span');
        span.className = 'split-char';
        span.textContent = ch === ' ' ? ' ' : ch;
        frag.appendChild(span);
        out.push(span);
      }
      textNode.parentNode.replaceChild(frag, textNode);
    });
    return out;
  }

  /* 3. ヒーロー登場タイムライン */
  const heroTitle = document.querySelector('[data-split]');
  if (heroTitle) {
    const chars = splitChars(heroTitle);
    gsap.set(chars, { y: '1.2em', opacity: 0 });
    gsap.set(['.hero__kicker', '.hero__lead', '.hero__actions'], { opacity: 0, y: 16 });

    const tl = gsap.timeline({ delay: 0.15 });
    tl.to('.hero__kicker', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 0)
      .to(chars, { y: 0, opacity: 1, duration: 1.0, stagger: 0.025, ease: 'power3.out' }, 0.15)
      .to('.hero__lead', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 0.7)
      .to('.hero__actions', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 0.85)
      .from('.hero__visual', { opacity: 0, scale: 0.92, y: 30, duration: 1.4, ease: 'power3.out' }, 0.05)
      .from('.hero__seal', { opacity: 0, scale: 0.6, rotation: -20, duration: 1.0, ease: 'back.out(1.7)' }, 0.9)
      .from('.hero .doodle', { opacity: 0, scale: 0.7, duration: 0.9, stagger: 0.08, ease: 'back.out(1.4)' }, 0.4);
  }

  /* 4. スクロールで登場 */
  document.querySelectorAll('[data-rise]').forEach((el) => {
    gsap.from(el, {
      y: 60, opacity: 0, duration: 1.0, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
    });
  });

  /* 5. 浮遊ドゥードル */
  if (!REDUCED) {
    document.querySelectorAll('.doodle').forEach((m, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      const amp = 14 + Math.random() * 18;
      gsap.to(m, {
        y: amp * dir,
        duration: 3.5 + Math.random() * 2.5,
        repeat: -1, yoyo: true, ease: 'sine.inOut',
        delay: Math.random() * 1.5,
      });
      gsap.to(m, {
        rotation: '+=' + ((Math.random() - 0.5) * 16),
        duration: 5 + Math.random() * 3,
        repeat: -1, yoyo: true, ease: 'sine.inOut',
        delay: Math.random() * 2,
      });

      const speed = parseFloat(m.dataset.scroll) || 0.4;
      gsap.to(m, {
        y: `+=${260 * speed * dir}`,
        x: `+=${80 * speed}`,
        ease: 'none',
        scrollTrigger: {
          trigger: m.closest('section') || document.body,
          start: 'top bottom', end: 'bottom top', scrub: 1.2,
        },
      });
    });
  }

  /* 6. ヒーロー写真 Ken Burns + パララックス */
  if (!REDUCED) {
    const heroImg = document.querySelector('.hero__photo img');
    if (heroImg) {
      gsap.fromTo(heroImg, { scale: 1.08 }, {
        scale: 1.18, duration: 22, ease: 'none', repeat: -1, yoyo: true,
      });
    }
    gsap.to('.hero__visual', {
      yPercent: -8, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    });
  }

  /* 7. マグネティックボタン */
  if (!REDUCED && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('[data-magnetic]').forEach((btn) => {
      const strength = parseFloat(btn.dataset.magnetic) || 0.3;
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        gsap.to(btn, { x: x * strength, y: y * strength, duration: 0.4, ease: 'power2.out' });
      });
      btn.addEventListener('pointerleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
      });
    });
  }

  /* 8. カーソルフォロワー */
  if (!REDUCED && window.matchMedia('(pointer: fine)').matches && window.innerWidth > 900) {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-follow';
    document.body.appendChild(cursor);
    const inner = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { x: inner.x, y: inner.y };
    window.addEventListener('pointermove', (e) => { target.x = e.clientX; target.y = e.clientY; });
    function follow() {
      inner.x += (target.x - inner.x) * 0.15;
      inner.y += (target.y - inner.y) * 0.15;
      cursor.style.transform = `translate3d(${inner.x}px, ${inner.y}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(follow);
    }
    follow();
    document.querySelectorAll('a, button, [data-magnetic]').forEach((el) => {
      el.addEventListener('pointerenter', () => cursor.classList.add('is-hover'));
      el.addEventListener('pointerleave', () => cursor.classList.remove('is-hover'));
    });
  }

  /* 9. ヘッダー scrolled */
  const header = document.querySelector('body > header');
  if (header) {
    let ticking = false;
    const update = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 40);
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* 10-a. スクロール進捗バー（存在する場合のみ） */
  const sp = document.querySelector('.scroll-progress__bar');
  if (sp) {
    const updateSP = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0;
      sp.style.width = p + '%';
    };
    window.addEventListener('scroll', updateSP, { passive: true });
    updateSP();
  }

  /* 10-b. stat-bar（スクロールで幅アニメ） */
  document.querySelectorAll('.stat-bar').forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => el.classList.add('is-active'),
    });
  });

  /* 10. 数字カウントアップ（後続MS用に既設） */
  document.querySelectorAll('[data-count]').forEach((el) => {
    const target = parseFloat(el.dataset.count);
    const state = { n: 0 };
    gsap.to(state, {
      n: target, duration: 1.8, ease: 'power2.out',
      onUpdate() { el.textContent = Math.floor(state.n).toLocaleString(); },
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
    });
  });
})();
