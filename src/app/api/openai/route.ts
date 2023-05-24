import { openai } from "@/lib/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("request =>", request);

  const { prompt } = await request.json();

  try {
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: `Você é uma ferramenta de criação de ementas de acórdãos de Tribunais. Seu papel é ler o acórdão e criar uma ementa para ele. \n\nAcórdão: ${prompt}`,
    });

    console.log("DEU CERTO =>", completion);

    return NextResponse.json({ text: `${completion.data.choices[0].text}` });
  } catch (err) {
    console.log("ERRO =>", err);
  }
}
