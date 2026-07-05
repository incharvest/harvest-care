# Claude Code Settings

## 作業開始時に必ず読むもの（引き継ぎ）

1. `docs/HANDOFF.md` — プロジェクト全体の引き継ぎ書（構成・仕様・注意点）
2. `MEMORY.md` — 過去セッションの学びの記録。**作業で得た知見は必ずここに追記する**
3. コードを触る前に `.claude/skills/harvest-care-dev` スキルを参照

## 作業の鉄則

- 完成報告の前に必ず自分で動作確認する（検証手順はスキル参照）
- このサイトは静的サイト（HTMLのみ）。サーバー導入はユーザーの合意なしに行わない
- コミットメッセージは「ファイル名: 日本語の要約」の形式

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
