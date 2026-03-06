export default function HomePage() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      background: '#f5f5f5',
      fontFamily: '"Noto Sans JP", sans-serif'
    }}>
      {/* Top Bar */}
      <div style={{ 
        background: '#7C7460', 
        color: 'white', 
        padding: '8px 16px',
        fontSize: '12px',
        textAlign: 'center'
      }}>
        診療時間　午前10:00〜13:30　午後15:00〜20:00　｜　休診日　不定休
      </div>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f8f6f3 0%, #e8e4de 100%)',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: '500',
          color: '#333',
          marginBottom: '16px',
          fontFamily: '"Noto Serif JP", serif'
        }}>
          五反田駅前ルミリア矯正歯科<br />オーラルビューティー
        </h1>
        <p style={{ color: '#666', marginBottom: '24px', lineHeight: '1.8' }}>
          誰の目から見ても<br />
          綺麗な歯並びを実現する
        </p>
        <a 
          href="https://up-reserve.com/1007/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#7C7460',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '500'
          }}
        >
          無料カウンセリング予約
        </a>
      </section>

      {/* Treatment Section */}
      <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '40px',
          fontSize: '24px',
          color: '#333'
        }}>
          診療内容
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          {[
            { title: '大人の矯正歯科', sub: 'ワイヤー矯正', url: 'https://gotanda-kyousei-shika.clinic/medical-treatment/orthodontics/' },
            { title: 'マウスピース矯正', sub: 'インビザライン', url: 'https://gotanda-kyousei-shika.clinic/medical-treatment/mouthpiece/' },
            { title: '子どもの矯正歯科', sub: '小児矯正', url: 'https://gotanda-kyousei-shika.clinic/medical-treatment/children-orthodontic/' },
            { title: 'ホワイトニング', sub: 'クリーニング', url: 'https://gotanda-kyousei-shika.clinic/medical-treatment/whitening/' },
          ].map((item, i) => (
            <a 
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: 'white',
                padding: '24px',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'transform 0.2s',
                textAlign: 'center'
              }}
            >
              <h3 style={{ color: '#333', marginBottom: '8px', fontSize: '16px' }}>{item.title}</h3>
              <p style={{ color: '#888', fontSize: '12px' }}>{item.sub}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Access Section */}
      <section style={{ 
        background: 'white', 
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', color: '#333' }}>アクセス</h2>
        <p style={{ color: '#666', marginBottom: '8px' }}>〒141-0022 東京都品川区東五反田5-27-5 5セントラルビル4F</p>
        <p style={{ color: '#666', marginBottom: '8px' }}>JR五反田駅東口より徒歩1分</p>
        <p style={{ color: '#7C7460', fontWeight: '500', fontSize: '20px' }}>TEL: 03-6450-2811</p>
      </section>

      {/* Footer */}
      <footer style={{ 
        background: '#333', 
        color: 'white', 
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <p style={{ marginBottom: '16px' }}>五反田駅前ルミリア矯正歯科オーラルビューティー</p>
        <p style={{ fontSize: '12px', color: '#888' }}>© 2024 All rights reserved.</p>
      </footer>

      {/* Fixed Bottom Bar */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'white',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
        display: 'flex',
        zIndex: 100
      }}>
        <a 
          href="tel:03-6450-2811"
          style={{
            flex: 1,
            padding: '12px',
            textAlign: 'center',
            textDecoration: 'none',
            color: '#333',
            borderRight: '1px solid #eee',
            fontSize: '12px'
          }}
        >
          📞 電話をかける
        </a>
        <a 
          href="https://up-reserve.com/1007/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            padding: '12px',
            textAlign: 'center',
            textDecoration: 'none',
            background: '#c8e600',
            color: '#333',
            fontWeight: '500',
            fontSize: '12px'
          }}
        >
          📅 24時間WEB予約
        </a>
        <a 
          href="https://lin.ee/DZR0JgY"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            padding: '12px',
            textAlign: 'center',
            textDecoration: 'none',
            background: '#06c755',
            color: 'white',
            fontWeight: '500',
            fontSize: '12px'
          }}
        >
          LINE予約
        </a>
      </div>
    </main>
  )
}
