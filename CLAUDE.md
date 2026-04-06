# Claude Code 設定ガイド

## プロジェクト概要

高齢者介護サービス（デイサービス・住宅型有料老人ホーム）の**静的マーケティングサイト**。
ビルドツールなし・純粋なHTML/CSSで構成されており、GitHub Pagesで公開されている。

---

## ディレクトリ構成

```
/
├── index.html              # トップページ
├── dayservice.html         # デイサービス紹介ページ（最大ファイル）
├── resthome.html           # 住宅型有料老人ホームページ
├── caremanager.html        # ケアマネージャー求人ページ
├── recruit.html            # スタッフ求人ページ
├── flyer.html              # チラシ用ページ
├── thanks.html             # お問い合わせ完了ページ
├── design-system/          # デザインシステム（CSS一式）
│   ├── harvest.css         # メインスタイルシート（全ファイルをインポート）
│   ├── DESIGN_SYSTEM.md    # デザイン仕様書
│   ├── tokens/
│   │   └── tokens.css      # デザイントークン（色・スペース・タイポグラフィ変数）
│   ├── base/
│   │   ├── reset.css       # CSSリセット
│   │   └── typography.css  # フォント定義
│   ├── components/
│   │   ├── buttons.css     # ボタンコンポーネント
│   │   ├── cards.css       # カードコンポーネント
│   │   ├── forms.css       # フォーム要素
│   │   ├── navigation.css  # ナビゲーション
│   │   └── sections.css    # セクションレイアウト
│   ├── layouts/
│   │   ├── containers.css  # コンテナ幅制御
│   │   └── grid.css        # CSSグリッドシステム
│   ├── pages/
│   │   └── resthome.css    # 老人ホームページ専用スタイル
│   └── utilities/
│       └── utilities.css   # ユーティリティクラス集
├── images/
│   └── bath/               # 浴室設備の写真（4枚）
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages 自動デプロイ（CI/CD）
└── CLAUDE.md               # このファイル
```

---

## 技術スタック

| 項目 | 内容 |
|------|------|
| マークアップ | HTML5（`lang="ja"`） |
| スタイリング | CSS3（カスタムプロパティ・Grid・Flexbox） |
| フォント | Zen Old Mincho / Shippori Mincho（見出し）、Noto Sans/Serif JP（本文） |
| ビルドツール | **なし**（純粋な静的ファイル） |
| ホスティング | GitHub Pages |
| CI/CD | GitHub Actions |

---

## デザインシステム

### カラーシステム（tokens.css で定義）

- **プライマリ（primary）**: フォレストグリーン系
- **アクセント（accent）**: ハーベストゴールド系
- **老人ホームテーマ**: ブラウン・ウォームゴールド系（resthome.css で上書き）

### タイポグラフィ

- 流体タイポグラフィ（`clamp()` を使用してレスポンシブ対応）
- 見出し：Zen Old Mincho / Shippori Mincho（serif）
- 本文：Noto Sans JP / Noto Serif JP

### スペーシング

- 8px グリッドシステムをベースに設計

### レスポンシブブレークポイント

| ブレークポイント | 幅 |
|---------|-----|
| sm | 576px |
| md | 768px |
| lg | 1024px |

---

## 開発ワークフロー

### ページ追加・編集

1. 既存のHTMLファイルを参照してコピー
2. `<link>` で `design-system/harvest.css` をインポート済みか確認
3. ページ固有のスタイルが必要な場合は `design-system/pages/` 以下に追加

### スタイル変更

- **色・フォント・スペーシングの変更** → `design-system/tokens/tokens.css` を編集
- **コンポーネントの変更** → 対応する `design-system/components/*.css` を編集
- **特定ページだけの変更** → `design-system/pages/` に専用CSSを作成・インポート

### デプロイ（サイトへの公開）

- `main` または `claude/*` ブランチ（作業場所）へプッシュ（GitHubへの送信）すると自動でGitHub Pagesにデプロイされる
- ビルド不要・数秒で公開完了

---

## 言葉遣いのルール

専門用語を使う際は、必ず日本語の説明をカッコ内に添える。

例：
- ブランチ（作業場所）
- デプロイ（サイトへの公開）
- コミット（作業の保存）
- プッシュ（GitHubへの送信）
- マージ（作業場所の統合）
- リポジトリ（ファイルの保管庫）

---

## コーディング規約

### HTML

- `lang="ja"` を `<html>` タグに必ず設定
- セマンティックなタグを使用（`<section>`, `<article>`, `<nav>` 等）
- 画像には `alt` 属性を日本語で記述

### CSS

- 新しい色・サイズ・スペーシングの値は必ず `tokens.css` のカスタムプロパティとして定義してから使用
- クラス名は英語の kebab-case（例：`.section-title`, `.btn-primary`）
- ページ固有スタイルはグローバルに影響しないよう、ページ専用CSSファイルに記述

### コミット（作業の保存）メッセージ

- 日本語で変更内容を具体的に記述
- 例：`ケアマネページにトイレ設備カードを追加`

---

## 注意事項

- **テストなし**: 自動テストは存在しない。変更後はブラウザで目視確認する
- **ビルドなし**: `npm install` や `yarn` は不要。ファイルを直接編集してプッシュするだけ
- **画像**: `/images/bath/` に施設写真あり。大きいファイル（合計15MB）のため追加時は容量に注意
- **日本語サイト**: すべての表示テキストは日本語で記述する

---

## 許可済みコマンド（自動承認）

```
Bash(git add:*)
Bash(git commit:*)
Bash(git push:*)
Bash(git status:*)
Bash(git diff:*)
Bash(git log:*)
Bash(git branch:*)
Bash(git checkout:*)
Bash(git fetch:*)
Bash(git pull:*)
```
