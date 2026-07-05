---
name: harvest-care-dev
description: ハーベストケア（介護施設）のサイトや職員用ツールを修正・追加するときの開発ガイド。ページ構成、ブランドカラー、報告メモアプリのデータ仕様、検証手順、コミットの流儀。このリポジトリのHTML/CSS/JSを触る作業を始める前に必ず使うこと。
---

# ハーベストケア開発ガイド

## 最初にやること

1. `docs/HANDOFF.md` を読む（プロジェクト全体像・仕様・注意点のすべてがある）
2. `MEMORY.md` を読む（過去セッションの学び）
3. デザインに関わる変更なら `design-system/DESIGN_SYSTEM.md` も確認

## 鉄則

- **静的サイトのまま保つ。** サーバー・データベース・外部サービスの導入は、ユーザーに
  利点と個人情報リスクを説明して合意を得てから。
- **ブランドカラーを守る**: 茶 `#5a4d42` / ベージュ `#b8a07a` / 緑 `#6b8f7b` /
  生成り背景 `#f7f4f0` / 罫線 `#e8e0d8` / 警告赤 `#c0564f`
- **スマホ最優先。** 利用者・職員はほぼスマホで見る。フォントは16px以上
  （iPhoneの自動ズームを防ぐ）、ボタンは44px以上のタップ領域。
- **報告メモアプリ（houkoku-memo.html）を触るとき**は、`docs/HANDOFF.md` §3 の
  データ仕様を先に読む。localStorageのキー名・`HCMEMO1:` 共有形式・IDによる
  マージ規則は互換性の要。既存データが読めなくなる変更は禁止。

## 検証（報告前に必ず）

```bash
# 1. JS文法チェック（HTMLからscript部分を抜き出して確認）
python3 -c "
import re; html=open('対象.html',encoding='utf-8').read()
open('/tmp/x.js','w',encoding='utf-8').write(re.search(r'<script>(.*)</script>',html,re.S).group(1))"
node --check /tmp/x.js
```

2. ヘッドレスChromium（画面なしブラウザ）で実際に操作して確認する。
   `playwright-core` をインストールし、executablePath に
   `/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell` を指定。
   スマホ想定なら viewport を 390x844 に。ページを `file://` で開いてフォーム入力
   →ボタン押下→表示確認まで行う。`pageerror` イベントを監視して実行時エラーを拾う。

## コミットとユーザー報告

- コミットメッセージ: `ファイル名: 日本語の要約`（例 `recruit.html: 応募フォーム追加`）
- 指定された作業ブランチで開発。なければ新規ブランチ。mainへ直接プッシュしない。
- ユーザーは非エンジニア。報告は「何ができるようになったか」→「使い方」の順で、
  専門用語にはカッコで日本語説明を添える。
- 作業で得た知見は `MEMORY.md` に日付つきで追記してからコミットに含める。
