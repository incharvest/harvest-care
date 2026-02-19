# Harvest Design System
## 有料老人ホーム ハーベスト デザインシステム

---

## 1. デザイン原則 (Design Principles)

Appleのデザイン哲学に基づき、以下の原則を遵守します。

### 1.1 シンプリシティ (Simplicity)
不必要な装飾を排除し、本質的な情報とインタラクションに焦点を当てます。

### 1.2 一貫性 (Consistency)
すべてのページ、コンポーネントで統一された視覚言語を使用します。

### 1.3 ディテールへのこだわり (Attention to Detail)
1pxの境界線、微細なシャドウ、精緻なタイポグラフィまで、細部にこだわります。

### 1.4 余白の戦略的活用 (Whitespace)
コンテンツに呼吸させる十分な余白を確保し、視覚的階層を明確にします。

### 1.5 自然なモーション (Natural Motion)
スムーズで心地よいアニメーションで、UIの状態変化を直感的に伝えます。

---

## 2. ブランドアイデンティティ (Brand Identity)

### 2.1 ブランドコンセプト
「穏やかな収穫の時」 - 人生の実りを穏やかに過ごす場所

### 2.2 ブランドパーソナリティ
- **信頼** (Trust) - 医療・介護の専門性
- **温かみ** (Warmth) - 家庭的な安心感
- **品格** (Elegance) - 上質なホスピタリティ
- **自然** (Nature) - 自然との調和

---

## 3. カラーシステム (Color System)

### 3.1 プライマリパレット

| 名称 | 値 | 用途 |
|------|-----|------|
| Forest Green | `#1a3328` | プライマリカラー、ヘッダー、フッター |
| Forest Green Light | `#264d3a` | セカンダリ、ホバー状態 |
| Harvest Gold | `#c9a868` | アクセント、CTA、重要な要素 |
| Harvest Gold Light | `#dfc48a` | アクセントホバー |
| Harvest Gold Dark | `#a88a4a` | アクセント強調 |

### 3.2 ニュートラルパレット

| 名称 | 値 | 用途 |
|------|-----|------|
| Cream | `#faf8f5` | 背景、カード背景 |
| Cream Dark | `#f0ebe3` | セクション背景 |
| White | `#ffffff` | 純白背景 |
| Border | `#e0ddd5` | ボーダー、区切り線 |

### 3.3 テキストカラー

| 名称 | 値 | 用途 |
|------|-----|------|
| Text Primary | `#333333` | 本文テキスト |
| Text Secondary | `#666666` | 補助テキスト |
| Text Light | `#999999` | プレースホルダー |
| Text On Dark | `#ffffff` | 暗い背景上のテキスト |
| Text On Dark Muted | `rgba(255,255,255,0.7)` | 暗い背景上の補助テキスト |

### 3.4 サービス別カラーテーマ

#### デイサービス (Day Service)
```css
--theme-primary: #1a3328;
--theme-secondary: #264d3a;
--theme-accent: #c9a868;
```

#### 住宅型有料老人ホーム (Rest Home)
```css
--theme-primary: #4a4035;
--theme-secondary: #6b5d4d;
--theme-accent: #b8956e;
```

---

## 4. タイポグラフィ (Typography)

### 4.1 フォントファミリー

| 用途 | フォント | ウェイト |
|------|----------|----------|
| 見出し | Shippori Mincho | 500-700 |
| 本文 | Noto Serif JP | 300-400 |
| フォールバック | serif | - |

### 4.2 フォントサイズスケール

```css
--font-size-hero:    clamp(2rem, 5vw, 3rem);      /* ヒーローセクション */
--font-size-h1:      clamp(1.5rem, 3vw, 2rem);    /* ページタイトル */
--font-size-h2:      clamp(1.25rem, 2.5vw, 1.8rem); /* セクション見出し */
--font-size-h3:      clamp(1rem, 2vw, 1.3rem);    /* サブ見出し */
--font-size-body:    clamp(0.875rem, 1.5vw, 1rem); /* 本文 */
--font-size-small:   clamp(0.75rem, 1.2vw, 0.85rem); /* 補助テキスト */
--font-size-caption: 0.7rem;                       /* キャプション */
```

### 4.3 行間・字間

```css
--line-height-tight:  1.3;   /* 見出し */
--line-height-normal: 1.8;   /* 本文 */
--line-height-loose:  2.0;   /* リラックス読解 */

--letter-spacing-tight:  0;        /* 通常テキスト */
--letter-spacing-normal: 0.05em;   /* 本文 */
--letter-spacing-wide:   0.1em;    /* 見出し */
--letter-spacing-wider:  0.2em;    /* ラベル・バッジ */
```

---

## 5. スペーシングシステム (Spacing)

### 5.1 基本単位
8pxグリッドシステムを採用

```css
--space-1:  0.25rem;  /* 4px */
--space-2:  0.5rem;   /* 8px */
--space-3:  0.75rem;  /* 12px */
--space-4:  1rem;     /* 16px */
--space-5:  1.5rem;   /* 24px */
--space-6:  2rem;     /* 32px */
--space-7:  2.5rem;   /* 40px */
--space-8:  3rem;     /* 48px */
--space-9:  4rem;     /* 64px */
--space-10: 5rem;     /* 80px */
--space-11: 6rem;     /* 96px */
--space-12: 8rem;     /* 128px */
```

### 5.2 セクションスペーシング

```css
--section-padding-y: clamp(4rem, 10vw, 8rem);
--section-padding-x: clamp(1rem, 5vw, 2rem);
```

### 5.3 コンテナ幅

```css
--container-sm:  640px;
--container-md:  768px;
--container-lg:  1024px;
--container-xl:  1200px;
--container-max: 1000px;  /* メインコンテンツ推奨幅 */
```

---

## 6. シャドウシステム (Shadows)

```css
--shadow-xs:      0 1px 2px rgba(26, 51, 40, 0.04);
--shadow-sm:      0 2px 8px rgba(26, 51, 40, 0.06);
--shadow-md:      0 4px 16px rgba(26, 51, 40, 0.08);
--shadow-lg:      0 8px 32px rgba(26, 51, 40, 0.10);
--shadow-xl:      0 16px 48px rgba(26, 51, 40, 0.12);
--shadow-elegant: 0 20px 60px rgba(26, 51, 40, 0.15);
```

---

## 7. ボーダー (Borders)

```css
--border-width-thin:   1px;
--border-width-medium: 2px;
--border-width-thick:  3px;

--border-radius-sm:  4px;
--border-radius-md:  8px;
--border-radius-lg:  12px;
--border-radius-xl:  16px;
--border-radius-full: 9999px;
```

---

## 8. トランジション (Transitions)

### 8.1 デュレーション

```css
--duration-fast:   150ms;
--duration-normal: 300ms;
--duration-slow:   500ms;
--duration-slower: 700ms;
```

### 8.2 イージング

```css
--ease-default:  cubic-bezier(0.4, 0, 0.2, 1);  /* Material Design標準 */
--ease-in:       cubic-bezier(0.4, 0, 1, 1);
--ease-out:      cubic-bezier(0, 0, 0.2, 1);
--ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce:   cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-smooth:   cubic-bezier(0.25, 0.1, 0.25, 1);
```

### 8.3 標準トランジション

```css
--transition-fast:   all 150ms var(--ease-default);
--transition-normal: all 300ms var(--ease-default);
--transition-slow:   all 500ms var(--ease-smooth);
```

---

## 9. レスポンシブブレークポイント (Breakpoints)

```css
--breakpoint-sm:  576px;   /* スマートフォン横向き */
--breakpoint-md:  768px;   /* タブレット縦向き */
--breakpoint-lg:  1024px;  /* タブレット横向き / 小型デスクトップ */
--breakpoint-xl:  1280px;  /* デスクトップ */
--breakpoint-2xl: 1536px;  /* 大型デスクトップ */
```

---

## 10. コンポーネント仕様

### 10.1 ボタン (Buttons)

#### プライマリボタン
```css
.btn-primary {
  background: var(--color-accent);
  color: var(--color-primary);
  padding: var(--space-3) var(--space-6);
  border: none;
  border-radius: var(--border-radius-sm);
  font-family: var(--font-heading);
  font-weight: 500;
  letter-spacing: var(--letter-spacing-wide);
  transition: var(--transition-normal);
}

.btn-primary:hover {
  background: var(--color-accent-light);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

#### セカンダリボタン（アウトライン）
```css
.btn-secondary {
  background: transparent;
  color: var(--color-accent);
  padding: var(--space-3) var(--space-6);
  border: 1px solid var(--color-accent);
  border-radius: var(--border-radius-sm);
}

.btn-secondary:hover {
  background: var(--color-accent);
  color: var(--color-primary);
}
```

### 10.2 カード (Cards)

```css
.card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
}

.card:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}
```

### 10.3 セクションヘッダー

```css
.section-header {
  text-align: center;
  margin-bottom: var(--space-9);
}

.section-label {
  font-size: var(--font-size-small);
  color: var(--color-accent);
  letter-spacing: var(--letter-spacing-wider);
  margin-bottom: var(--space-3);
}

.section-title {
  font-family: var(--font-heading);
  font-size: var(--font-size-h2);
  font-weight: 600;
  color: var(--color-primary);
  letter-spacing: var(--letter-spacing-wide);
}

.section-title::after {
  content: '';
  display: block;
  width: 40px;
  height: 2px;
  background: var(--color-accent);
  margin: var(--space-4) auto 0;
}
```

### 10.4 ナビゲーション

```css
.nav-link {
  color: inherit;
  text-decoration: none;
  font-size: var(--font-size-small);
  letter-spacing: var(--letter-spacing-normal);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width var(--duration-normal) var(--ease-default);
}

.nav-link:hover::after {
  width: 100%;
}
```

### 10.5 フォーム要素

```css
.form-input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-sm);
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  background: transparent;
  transition: var(--transition-fast);
}

.form-input:focus {
  outline: none;
  border-color: var(--color-accent);
}

.form-label {
  display: block;
  font-size: var(--font-size-small);
  letter-spacing: var(--letter-spacing-normal);
  margin-bottom: var(--space-2);
}
```

---

## 11. アイコノグラフィ (Iconography)

### 11.1 ロゴ
SVG形式、ゴールドアクセントカラー (#c9a868) の稲穂モチーフ

### 11.2 アイコンサイズ
```css
--icon-sm: 16px;
--icon-md: 24px;
--icon-lg: 32px;
--icon-xl: 48px;
```

### 11.3 アイコンスタイル
- 線の太さ: 1.5px
- 角: 丸みを帯びた端
- スタイル: シンプル、ミニマル

---

## 12. イメージガイドライン

### 12.1 写真スタイル
- 自然光を活かした温かみのある写真
- 被写体深度を活用した上品なボケ
- 明るく清潔感のある印象
- 人物は笑顔、自然な表情

### 12.2 オーバーレイ
```css
/* ヒーロー画像用 */
.hero-overlay {
  background: linear-gradient(
    to bottom,
    rgba(26, 51, 40, 0.6),
    rgba(26, 51, 40, 0.4)
  );
}

/* カード画像用 */
.card-overlay {
  background: linear-gradient(
    to top,
    rgba(26, 51, 40, 0.8),
    transparent
  );
}
```

### 12.3 アスペクト比
```css
--aspect-hero:   16 / 9;
--aspect-card:   4 / 3;
--aspect-square: 1 / 1;
--aspect-portrait: 3 / 4;
```

---

## 13. アクセシビリティ (Accessibility)

### 13.1 カラーコントラスト
- 本文テキスト: 最低 4.5:1
- 大きなテキスト: 最低 3:1
- UI要素: 最低 3:1

### 13.2 フォーカス状態
```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### 13.3 タッチターゲット
最小サイズ: 44px × 44px

---

## 14. ファイル構成

```
design-system/
├── DESIGN_SYSTEM.md          # このドキュメント
├── tokens/
│   └── tokens.css            # デザイントークン
├── base/
│   ├── reset.css             # CSSリセット
│   └── typography.css        # タイポグラフィ
├── components/
│   ├── buttons.css           # ボタン
│   ├── cards.css             # カード
│   ├── forms.css             # フォーム
│   ├── navigation.css        # ナビゲーション
│   └── sections.css          # セクション
├── layouts/
│   ├── grid.css              # グリッドシステム
│   └── containers.css        # コンテナ
├── utilities/
│   └── utilities.css         # ユーティリティクラス
└── harvest.css               # 統合スタイルシート
```

---

## 15. 使用方法

### HTMLでの読み込み

```html
<head>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500&family=Shippori+Mincho:wght@500;600;700&display=swap" rel="stylesheet">

  <!-- Harvest Design System -->
  <link rel="stylesheet" href="design-system/harvest.css">
</head>
```

---

*Last Updated: 2026-02-19*
*Version: 1.0.0*
