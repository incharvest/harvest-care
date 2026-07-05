# MEMORY.md — セッションをまたぐ学びの記録

> 作業中に得た「次回も役立つ知識」をここに追記していく。
> 書き方: 日付 + 短い箇条書き。古くなった情報は消してよい。

## 2026-07-05（Fable 5）

- このリポジトリは静的サイト。ビルド不要、HTML直編集でOK。詳細は `docs/HANDOFF.md`。
- ユーザーは非エンジニア。専門用語にはカッコで日本語説明を必ず添える（CLAUDE.mdの必須ルール）。
- 「お任せで」と言われたら質問攻めにせず、実用性優先で作り切ってから報告するのが好まれる。
- 報告メモアプリ `houkoku-memo.html` を新規作成。データ仕様・共有形式（HCMEMO1:）は
  `docs/HANDOFF.md` §3 に記載。変更時は後方互換を守ること。
- 検証環境: `/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell` を
  playwright-core の executablePath に指定すればヘッドレステスト可能。
  `file://` で開いても localStorage・クリップボード以外は概ね動く。
- コミットメッセージの流儀: `ファイル名: 日本語の要約`（既存ログ参照）。
