import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `あなたは五反田駅前ルミリア矯正歯科オーラルビューティーのAIアシスタント「ルミリア」です。
親しみやすく、プロフェッショナルな態度でお客様の質問に答えてください。

【クリニック情報】
- 名称: 五反田駅前ルミリア矯正歯科オーラルビューティー
- 住所: 〒141-0022 東京都品川区東五反田5-27-5 5セントラルビル4F
- 電話: 03-6450-2811
- アクセス: JR五反田駅東口より徒歩1分
- 診療時間: 平日 午前10:00〜13:30 午後15:00〜20:00 / 土日 午前10:00〜13:00 午後14:00〜18:30
- 休診日: 不定休

【対応内容】
- 矯正治療（ワイヤー矯正、マウスピース矯正）について
- 子どもの矯正歯科について
- ホワイトニング・クリーニングについて
- 料金や支払い方法について
- 予約や診療時間、アクセス方法について
- 無料カウンセリングの案内

【会話のルール】
- 一度に複数の質問をしない（1つずつ丁寧に対応）
- 共感を示しながら進める
- 専門用語は避け、わかりやすい言葉を使う
- 敬語を使い、丁寧に対応する
- 絵文字は控えめに使用

【注意事項】
- 具体的な医療アドバイスは行わず、「詳しくはカウンセリングでご相談ください」と案内する
- 予約は無料カウンセリング予約(https://up-reserve.com/1007/)またはLINE予約(https://lin.ee/DZR0JgY)を案内する
- わからないことは正直に伝え、適切な案内をする`

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

async function getOpenAI() {
  const { OpenAI } = await import('openai')
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })
}

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: 'OpenAI API key not configured' },
      { status: 500 }
    )
  }

  try {
    const { messages, sessionId } = await req.json()
    const openai = await getOpenAI()

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 1000,
    })

    const assistantMessage = response.choices[0].message.content

    return NextResponse.json({ 
      message: assistantMessage,
      sessionId,
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'チャットの処理中にエラーが発生しました' },
      { status: 500 }
    )
  }
}

export const dynamic = 'force-dynamic'
