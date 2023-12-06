# React Entra ID (旧 Azure AD)認証のサンプルプロジェクト

1. .env.sample をコピーして.env を作成し、作成したアプリケーション ID とプライマリドメインを上書き

```.env
VITE_CLIENT_ID = "アプリケーション（クライアント）IDの値"
VITE_AUTHORITY = "プライマリドメインの値"
```

2. ライブラリのインストールと開発サーバーの起動

```
npm install
npm run dev
```

# バージョン情報

node 20.10.0
