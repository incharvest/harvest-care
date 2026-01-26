# CLAUDE.md - AI Assistant Guidelines for Harvest Website

## Project Overview

This is a **static HTML website for Harvest (ハーベスト)**, an elder care and wellness service company based in Kagoshima, Japan. The website serves three main business units:

- **Day Service (デイサービス)** - Day care with massage and rehabilitation
- **Rest Home (住宅型有料老人ホーム)** - Residential care facility
- **Visiting Acupuncture/Massage (訪問鍼灸マッサージ)** - Home-visit therapeutic services

## Technology Stack

| Category | Technology |
|----------|-----------|
| HTML | HTML5 with semantic markup |
| CSS | Pure CSS3 (Variables, Grid, Flexbox) |
| JavaScript | Vanilla JS (no frameworks) |
| Fonts | Google Fonts (Noto Serif JP, Shippori Mincho) |
| Images | Unsplash API for placeholders |
| Forms | FormSubmit.co (external service) |
| Maps | Google Maps embedded iframe |

**Important**: This project has **no build tools, no package.json, no dependencies**. Files are served directly as static HTML.

## File Structure

```
/
├── index.html          # Main landing page - service selection
├── dayservice.html     # Day service details (~2,100 lines)
├── resthome.html       # Rest home details (~1,570 lines)
├── shinkyu.html        # Visiting acupuncture/massage (~1,390 lines)
├── flyer.html          # Printable A4 flyer (~420 lines)
└── CLAUDE.md           # This file
```

## Design System

### CSS Variables (defined in each file's `<style>` block)

```css
:root {
    /* Colors */
    --color-primary: #1a3328;        /* Dark forest green */
    --color-secondary: #264d3a;      /* Darker green */
    --color-accent: #c9a868;         /* Gold/tan */
    --color-accent-light: #dfc48a;   /* Light gold */
    --color-accent-dark: #a88a4a;    /* Dark gold */
    --color-cream: #faf8f5;          /* Off-white */
    --color-cream-dark: #f0ebe3;     /* Beige */
    --color-text: #333333;           /* Dark gray */
    --color-text-light: #666666;     /* Medium gray */
    --color-white: #ffffff;
    --color-border: #e0ddd5;

    /* Typography */
    --font-display: 'Shippori Mincho', serif;  /* Headlines */
    --font-body: 'Noto Serif JP', serif;       /* Body text */

    /* Effects */
    --shadow-soft: 0 4px 30px rgba(26, 51, 40, 0.08);
    --shadow-medium: 0 8px 40px rgba(26, 51, 40, 0.12);
    --shadow-elegant: 0 20px 60px rgba(26, 51, 40, 0.1);
    --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Responsive Breakpoints

- **Mobile**: max-width 768px (single column, hidden navigation)
- **Tablet**: 769px - 1024px (2-column layouts)
- **Desktop**: 1025px+ (3-column grids, full navigation)

## Code Conventions

### CSS Naming (BEM-inspired)

```css
/* Block */
.service-card { }
.feature-card { }
.pricing-table { }

/* Element */
.service-card-title { }
.pricing-card-header { }
.facility-value { }

/* State/Modifier via pseudo-classes */
.service-card:hover { }
```

### HTML Structure Pattern

All pages follow this consistent structure:

```html
<header>
    <!-- Fixed navigation with logo -->
</header>

<section class="hero">
    <div class="hero-content">
        <!-- Hero messaging -->
    </div>
</section>

<section class="[section-name]">
    <div class="section-inner">
        <div class="section-header">
            <span class="section-en">ENGLISH LABEL</span>
            <h2 class="section-title">日本語タイトル</h2>
            <div class="section-line"></div>
        </div>
        <!-- Section content -->
    </div>
</section>

<footer>
    <!-- Contact info and copyright -->
</footer>
```

### Typography Guidelines

- **Serif fonts only** - No sans-serif (traditional/formal Japanese aesthetic)
- **Letter-spacing**: 0.05em to 0.3em for Japanese text elegance
- **Line-height**: 2 for body text (generous spacing)
- **Font weights**: 400 (body), 500-600 (headings)

### Color Usage

- **Dark green** (`--color-primary`) - Headers, footers, primary sections
- **Gold** (`--color-accent`) - Accents, hover states, highlights, CTAs
- **Cream** (`--color-cream`) - Backgrounds, content areas
- **White** - Cards, contrast sections

## Development Workflow

### No Build Process Required

This is a pure static site:

1. Edit HTML files directly
2. Open in browser to test
3. Deploy by copying files to server

### Adding a New Page

1. Copy an existing page (e.g., `shinkyu.html`) as template
2. Update the `<title>` and meta tags
3. Modify the hero section content
4. Update/add content sections as needed
5. Ensure navigation links are updated across all pages

### Modifying Styles

- CSS is embedded in each file's `<style>` block
- CSS variables are duplicated across files for consistency
- When updating design tokens, update all files

## Special Features

### Password-Protected Gallery (dayservice.html)

Located in the gallery section with hardcoded user accounts:
- Admin account with dashboard view
- Multiple user accounts with different photo sets
- Uses `sessionStorage` for login state

### Contact Forms

All forms use FormSubmit.co:
- Endpoint: `https://formsubmit.co/ltd.harvest.resthome@gmail.com`
- Fields: name, phone, email, inquiry-type, message
- CSRF protection disabled for static forms

### Print Stylesheet (flyer.html)

Optimized for A4 printing with:
- `@media print` queries
- Color preservation: `-webkit-print-color-adjust: exact`
- Fixed dimensions for consistent output

## Language & Content

- **All content is in Japanese**
- Comments in code are in Japanese (ヘッダー, メインコンテンツ, etc.)
- Business context: Elder care services in Kagoshima, Japan
- Formal/respectful tone appropriate for healthcare services

## Important Notes for AI Assistants

### Do

- Maintain the elegant, traditional Japanese aesthetic
- Keep CSS variables consistent across all files
- Use semantic HTML5 elements
- Follow the established section structure pattern
- Preserve Japanese language content and formatting
- Test responsive behavior at all breakpoints

### Don't

- Add build tools or package managers
- Introduce JavaScript frameworks
- Use sans-serif fonts
- Break the mobile-first responsive approach
- Remove the decorative elements (◆, dividers, etc.)
- Change the FormSubmit.co form handling

### When Adding Content

1. Match existing typography and spacing
2. Use the established card/grid patterns
3. Include both English labels and Japanese titles for sections
4. Ensure images have appropriate aspect ratios
5. Add hover states consistent with existing elements

### External Services

| Service | Purpose | Notes |
|---------|---------|-------|
| Google Fonts | Typography | Noto Serif JP, Shippori Mincho |
| Unsplash | Placeholder images | Replace with actual photos |
| FormSubmit.co | Form handling | No backend needed |
| Google Maps | Location embeds | Grayscale filtered |

## Git Workflow

- Simple linear history
- Descriptive commit messages in English
- No complex branching strategy required
- Direct commits to working branch
