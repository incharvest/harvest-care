# 訪問鍼灸マッサージ ハーベスト チラシ（非公開・手渡し配布専用）

このブランチは **訪問鍼灸マッサージのチラシ (`flyer.html`)** を管理するための
専用ブランチです。

## 重要ルール

- このブランチのファイルは **絶対に GitHub Pages にデプロイしない**
- 介護施設のホームページ (`claude/review-harvest-care-sites-FhpVz` ブランチ) と
  **絶対に混ぜない**
- `sitemap.xml` に追加しない
- 他のページからリンクしない
- Google Search Console にインデックス登録しない

## 使い方

チラシを印刷したい時:

1. このブランチをチェックアウト
   ```
   git checkout claude/chirashi-private
   ```
2. `flyer.html` をブラウザで開く（ダブルクリック等）
3. ブラウザから印刷 (Ctrl+P) → A4 サイズ

## 事業構成

株式会社ハーベストは以下2事業を運営:

1. **介護施設** (デイサービス／住宅型有料老人ホーム)
   - ホームページ: あり (`claude/review-harvest-care-sites-FhpVz` ブランチで管理)
   - チラシ: 制作中 (`dayservice-flyer.html`, `dayservice-flyer-v2.html` として同ブランチ内)

2. **訪問鍼灸マッサージ**
   - ホームページ: **無し** (今後も作らない方針)
   - チラシ: `flyer.html` のみ、**このブランチで管理・Web非公開**
