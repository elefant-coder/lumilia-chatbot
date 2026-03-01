# Lumilia Chatbot

ルミリア美容クリニック向けのAIチャットボット

## 機能

- 24時間対応のAIアシスタント
- クリニックに関する質問への自動応答
- スマートフォン対応のUI

## セットアップ

### 環境変数

`.env.local` ファイルを作成し、以下を設定：

```env
OPENAI_API_KEY=sk-your-api-key
```

### 開発

```bash
npm install
npm run dev
```

### デプロイ

Vercelにデプロイする場合、環境変数 `OPENAI_API_KEY` を設定してください。

## HPへの埋め込み

iframeで埋め込む場合：

```html
<iframe 
  src="https://your-vercel-url.vercel.app" 
  style="position: fixed; bottom: 20px; right: 20px; width: 400px; height: 600px; border: none; border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.15);"
></iframe>
```

## 技術スタック

- Next.js 16
- TypeScript
- Tailwind CSS
- OpenAI GPT-4o-mini
