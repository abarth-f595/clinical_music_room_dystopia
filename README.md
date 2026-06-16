# 臨床音楽室・ディストピア

トップページにロゴ画像を配置した静的サイト版。

## 変更点

- `assets/clinical-music-room-dystopia-logo.png` を追加
- トップページのヒーロー画像としてロゴを表示
- OGP画像をロゴ画像に変更
- Works の各バーをInstagramリールへのリンクに変更
- Works に《虚ろな扉》三部作セクションを追加
- 背景音源 `Pulse Before Diagnosis` を追加し、ON/OFFスイッチで30%音量再生できるように変更

## Instagram Reels

- 《虚ろな扉》第一章：黒羽の夜: https://www.instagram.com/reel/DZc12SgtD1L/
- 《虚ろな扉》第二章：灰に差す月: https://www.instagram.com/reel/DZjM4mINVc8/
- 《虚ろな扉》第三章：暁を裂く羽: https://www.instagram.com/reel/DZjNOcVNZqn/
- ワラキアの悪夢: https://www.instagram.com/reel/DZc2FKGt0iE/
- 祈れぬ羽根の処方箋: https://www.instagram.com/reel/DZc2bKttVta/

## GitHubへアップロード

```bash
git init
git add .
git commit -m "Add hero logo"
git branch -M main
git remote add origin https://github.com/YOUR_NAME/clinical-music-room-dystopia.git
git push -u origin main
```

すでにGitHubへ上げている場合は以下だけでOK。

```bash
git add .
git commit -m "Add hero logo"
git push
```

## Vercel

GitHub連携済みなら、`git push` した時点で自動更新される。


## 修正履歴

- ヒーローコピーの不自然な改行を修正
- リード文を2行固定表示に変更
- 日本語が「研究 / 室。」のように途中で割れにくいCSSへ調整
