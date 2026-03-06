import type { Metadata } from 'next'
import './globals.css'
import ChatWidget from './components/ChatWidget'

export const metadata: Metadata = {
  title: '五反田駅前ルミリア矯正歯科オーラルビューティー',
  description: '五反田駅前で大人・子ども矯正やマウスピース矯正に対応。安心の専門治療で美しい歯並びを実現。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
