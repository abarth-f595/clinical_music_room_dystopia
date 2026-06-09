# 臨床音楽室・ディストピア

トップページにロゴ画像を配置した静的サイト版。

## 変更点

- `assets/clinical-music-room-dystopia-logo.png` を追加
- トップページのヒーロー画像としてロゴを表示
- OGP画像をロゴ画像に変更

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
