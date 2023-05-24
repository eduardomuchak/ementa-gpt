import { openai } from "@/lib/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { prompt } = await request.json();

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Você é uma ferramenta de criação de ementas de acórdãos de Tribunais. Seu papel é ler o acórdão e criar uma ementa para ele.",
        },
        { role: "user", content: prompt },
      ],
    });
    return NextResponse.json({
      result: completion.data.choices[0].message?.content,
    });
  } catch (err) {
    console.log("ERRO =>", err);
  }
}
