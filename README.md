# 使い方
## Jekyllコマンドを使えるようにする

このホームページは静的サイトジェネレータのJekyllというソフトウェアで作っています．

[こちら](https://jekyllrb.com/)からインストールする．

## _config.ymlの編集
サイトの設定は`_config.yml`を編集して行う．
例えば，別サーバにサイトを置きたいとき，

```
baseurl: "/uww2018" # the subpath of your site, e.g. /blog
url: "http://cse.eedept.kobe-u.ac.jp" # the base hostname & protocol for your site, e.g. http://example.com
```

の行を対応するものに変える必要がある．
詳しくはJekyllの公式ホームページで．

## ビルド
プロジェクトルート（index.mdなどあるディレクトリ）で以下のコマンドをたたく．

```
$ jekyll build --trace
```

すると`_site`にホームページが出来上がるのでその中身をまるっとサーバーに上げて完成です．

## レイアウトを確認したいとき

プロジェクトルートで以下のコマンドをたたくとテストサーバが立ち上がる．

```
$ jekyll serve
```

`http://127.0.0.1:4000/uww2018/`にブラウザからアクセスするとレイアウトを確認できる．
