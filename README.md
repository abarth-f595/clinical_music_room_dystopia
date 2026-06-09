# 臨床音楽室・ディストピア

壊れた世界に、処方箋のような音楽を。

## 構成

- `index.html`：サイト本体
- `styles.css`：デザイン
- `script.js`：軽い動き
- `assets/favicon.svg`：タブ用アイコン
- `assets/ogp.svg`：SNS共有用の仮OGP画像

## ローカル確認

VS Codeなどでフォルダを開いて、`index.html` をブラウザで開く。

## GitHubへアップロード

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_NAME/clinical-music-room-dystopia.git
git push -u origin main
```

## Vercelで公開

1. Vercelにログイン
2. `Add New...` → `Project`
3. GitHubリポジトリを選択
4. Framework Presetは `Other`
5. Build Commandは空欄
6. Output Directoryは空欄または `.`
7. Deploy
