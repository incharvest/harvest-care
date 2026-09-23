# Claude Code Settings

## 作業開始前の必須確認（最優先ルール）

新しい依頼を受けたら、着手する前に必ず以下を実行し、
現状を要約してユーザーに報告してから作業を開始する。

1. `git branch --show-current` で現在ブランチを確認
2. `git fetch origin --prune` で最新のリモート状態を取得
3. `git log --oneline -10` で最新10コミットを確認
4. 依頼対象ファイル（例: recruit.html なら recruit.html）を
   Read で最新内容を確認
5. 関連する CLAUDE.md の記述を再確認
6. 上記を「現状: ○○」「最新の作業: △△（別セッション）」
   「これから手を入れる箇所: □□」の形でユーザーに簡潔に報告
7. ユーザーの了承を得てから編集開始

**理由:** このリポジトリは複数の Claude セッションから並行して
作業されている。別セッションでの成果を認識せずに矛盾する変更を
加えると、上書き事故や情報の不整合が発生する。git 上には
すべてのセッションの成果が集約されているので、必ず確認する。

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

### 2. 訪問鍼灸マッサージ（HAKU）
- **ブランチ**: `保管/HAKUチラシ一式`（**別ブランチで完全隔離**）
- **ホームページ**: 無し（今後も作らない方針）
- **チラシ**: `haku-flyer-a4-*.html`（A4縦・A4横、体験版あり／なしの計4種）
  - 手渡し配布用、Web非公開
- **絶対に `claude/review-harvest-care-sites-FhpVz` と混ぜないこと**
- **絶対に merge しないこと**（別系統ブランチとして独立管理）
- 2026-09: 旧 `claude/chirashi-private`（README + flyer.html の暫定分離ブランチ）は
  役目を終えて削除済み。訪問マッサージのチラシは全てこの HAKU ブランチで管理。

### 絶対に守るルール

- **`claude/review-harvest-care-sites-FhpVz` ブランチには `flyer.html` や
  `haku-flyer-*.html` を絶対に置かない**
- **`claude/review-harvest-care-sites-FhpVz` ブランチの `sitemap.xml` に
  訪問マッサージの URL を追加しない**
- **介護施設のホームページから訪問鍼灸マッサージ（HAKU）への言及・リンクは一切しない**
- **`保管/HAKUチラシ一式` は Web 公開しない**（デプロイ元は review ブランチのみ）

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
