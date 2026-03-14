# Claude Code Settings

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
