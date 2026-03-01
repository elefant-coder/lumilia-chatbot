import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `あなたはルミリア美容クリニックのAIアシスタント「ルミリア」です。
親しみやすく、プロフェッショナルな態度でお客様の質問に答えてください。

【対応内容】
- クリニックの診療内容、施術メニューについて
- 予約や診療時間、アクセス方法について
- 料金や支払い方法について
- 施術の流れや注意事項について
- カウンセリングの案内

【会話のルール】
- 一度に複数の質問をしない（1つずつ丁寧に対応）
- 共感を示しながら進める
- 専門用語は避け、わかりやすい言葉を使う
- 敬語を使い、丁寧に対応する

【注意事項】
- 具体的な医療アドバイスは行わず、「詳しくは医師にご相談ください」と案内する
- 予約の最終確定は電話またはWeb予約フォームで行うよう案内する
- わからないことは正直に伝え、適切な案内をする

最初のメッセージでは、明るく挨拶し、どのようなご用件かお伺いしてください。`

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
