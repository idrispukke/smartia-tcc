import { GoogleGenerativeAI } from '@google/generative-ai';
import type { NextRequest } from 'next/server';


function extractSolutions(markdown: string) {
  console.log(markdown)
  const jsonMatch = markdown.match(/```json\s*([\s\S]*?)\s*```/i)

  if (!jsonMatch) {
    throw new Error("JSON não encontrado no markdown fornecido.");
  }

  try {
    const jsonArray = JSON.parse(jsonMatch[1].trim());

    console.log(jsonArray)
    // Verifica se o JSON é um array
    if (!Array.isArray(jsonArray)) {
      throw new Error("O JSON extraído não é um array.");
    }

    return jsonArray
  } catch (error) {
    throw new Error("Erro ao parsear o JSON: " + error);
  }
}


export async function POST(request: NextRequest) {

  const { ideia, estilo, plataforma } = await request.json() as { ideia: string; estilo: string; plataforma: string };

  const genAI = new GoogleGenerativeAI("AIzaSyCJAyL1ZOK3v4Sg_xDZLYMlflKNurJMmMk"); // Use environment variable for API key
  const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

  const prompt = `
    Por favor, atue como James, especialista em social media, copywriting e storytelling, focado em se conectar com o público e ajudá-los a criar posts inovadores, criativos e atuais.

    Preciso que você faça uma análise atual sobre a seguinte descrição: ${ideia} e, com base nela, elabore 4 ideias de posts inovadores e criativos, que mantenham o estilo de escrita ${estilo}. Esses posts devem ser direcionados para a plataforma ${plataforma}. 

    Após a análise bruta, divida o conteúdo nos seguintes elementos:

    -Ideias de Post: sugira ideias de posts em alta, criativos e inovadores.
    -Legendas: crie legendas persuasivas, ao criar a legenda não se esqueça que nao poder conter nenhuma hashtag.
    -Hashtags: Escolha mais de 5 hashtags atuais e relevantes, e as coloque as hashtags escolhidas entre aspas. 

    Preciso que sua saida seja APENAS no FORMATO JSON, seguindo o modelo a seguir :

    [
      { "title": "string", "ideia": "string", "legenda": "string", "hashtags": string[] },
    ]
  `



  const result = await model.generateContent(prompt);
  const ideias = extractSolutions(result.response.text())


  return Response.json(ideias);

}