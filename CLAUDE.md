# Claude Code Settings

## 作業ブランチの絶対ルール

**このリポジトリのメイン作業ブランチは `claude/review-harvest-care-sites-FhpVz` です。**
GitHub Pages のデプロイもこのブランチから行われています。

### 遵守事項

1. **セッション開始時に必ず `git branch --show-current` で現在地を確認する**
2. **もし別のブランチ（例: `claude/care-home-website-GygxF`）にいた場合、
   作業に取りかかる前に必ず `claude/review-harvest-care-sites-FhpVz` に
   `git checkout` する**
3. **全ての commit / push は `claude/review-harvest-care-sites-FhpVz` に対して行う**
4. **他のブランチが「指定ブランチ」として自動設定されていても無視し、
   常に `claude/review-harvest-care-sites-FhpVz` を優先する**

### 過去の教訓

- 2026-07-13: セッションコンテキスト圧縮後、git が自動的に
  `claude/care-home-website-GygxF` に切り替わり、そこに5コミット
  誤配置。全て手動で cherry-pick して復旧した。
  → この事故を防ぐため本ルールを設置。

## 事業とブランチ構成のルール

**このリポジトリで扱っている事業は2つで、ブランチも用途別に分離:**

### 1. 介護施設（デイサービス／住宅型有料老人ホーム）
- **ブランチ**: `claude/review-harvest-care-sites-FhpVz` (このブランチ)
- **ホームページ**: 公開 (`index.html`, `dayservice.html`, `resthome.html`, `caremanager.html`, `recruit.html`)
- **チラシ**: `dayservice-flyer-a4.html`（デイサービス）, `resthome-flyer-a4.html`（有料老人ホーム）
  - どちらも A4横・両面。事務所プリンタでの印刷前提（四辺9mmの余白内に全要素）
  - 検索避け（noindex）のため sitemap には載せない
  - 旧版 `dayservice-flyer.html` / `dayservice-flyer-v2.html` は2026-09-01に削除
- **GitHub Pages デプロイ元**: このブランチ

### 2. 訪問鍼灸マッサージ
- **ブランチ**: `claude/chirashi-private`（**別ブランチで完全隔離**）
- **ホームページ**: 無し（今後も作らない方針）
- **チラシ**: `flyer.html` のみ、手渡し配布用
- **絶対に `claude/review-harvest-care-sites-FhpVz` と混ぜないこと**
- **絶対に merge しないこと**（orphan branch として独立）

### 絶対に守るルール

- **`claude/review-harvest-care-sites-FhpVz` ブランチには `flyer.html` を絶対に置かない**
- **`claude/review-harvest-care-sites-FhpVz` ブランチの `sitemap.xml` に訪問マッサージの URL を追加しない**
- **介護施設のホームページから訪問鍼灸マッサージへの言及・リンクは一切しない**
- **`claude/chirashi-private` は Web 公開しない**（デプロイ元は review ブランチのみ）

## 言葉遣いのルール

専門用語を使う際は、必ず日本語の説明をカッコ内に添える。

例：
- ブランチ（作業場所）
- デプロイ（サイトへの公開）
- コミット（作業の保存）
- プッシュ（GitHubへの送信）
- マージ（作業場所の統合）
- リポジトリ（ファイルの保管庫）

## Allowed Tools

以下のコマンドを自動許可:

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
