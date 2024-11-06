import { GoogleGenerativeAI } from '@google/generative-ai';
import type { NextRequest } from 'next/server';
import MarkdownIt from 'markdown-it';

type ExtractedData = {
  title: string;
  ideia: string;
  legenda: string;
  hashtags: string[];
}[];

function extractSolutions(markdownText: string): ExtractedData {
  const md = new MarkdownIt();
  const ast = md.parse(markdownText, {});

  const codeBlock = ast.find(node => node.type === 'fence' && node.info.trim() === 'json');

  if (!codeBlock) {
    throw new Error('Bloco JSON não encontrado');
  }

  try {
    // Parse do conteúdo do bloco JSON
    const parsedContent = JSON.parse(codeBlock.content);

    // Verifica se o JSON está no formato esperado
    if (!Array.isArray(parsedContent)) {
      throw new Error('Estrutura JSON inesperada');
    }

    // Retorna o objeto formatado conforme o tipo esperado
    return parsedContent.map((item: { title: string; ideia: string; legenda: string; hashtags: string[] }) => ({
      title: item.title,
      ideia: item.ideia,
      legenda: item.legenda,
      hashtags: item.hashtags
        .filter(Boolean)
        .map(tag => tag.replace(/[^a-zA-Z0-9_#]/g, '').toLowerCase())
        .filter(tag => tag.startsWith('#')),
    }));
  } catch (error: any) {
    throw new Error('Erro ao parsear JSON: ' + error.message);
  }
}


export async function POST(request: NextRequest) {
  try {
    const { ideia, estilo, plataforma } = await request.json() as { ideia: string; estilo: string; plataforma: string };

    const genAI = new GoogleGenerativeAI("AIzaSyCJAyL1ZOK3v4Sg_xDZLYMlflKNurJMmMk"); // Use environment variable for API key
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

    const prompt = `
    Por favor, atue como James, especialista em social media, copywriting e storytelling, focado em se conectar com o público e ajudá-los a criar posts inovadores, criativos e atuais.

    Preciso que você faça uma análise atual sobre a seguinte descrição: ${ideia} e, com base nela, elabore 3-4 ideias de posts inovadores e criativos, que mantenham o estilo de escrita ${estilo}. Esses posts devem ser direcionados para a plataforma ${plataforma}. 

    Após a análise bruta, divida o conteúdo nos seguintes elementos:

    -Ideias de Post: sugira ideias de posts em alta, criativos e inovadores.
    -Legendas: crie legendas persuasivas sem mencionar nenhum tipo de hashtags.
    -Hashtags: selecione de 10 a 11 hashtags atuais e relevantes.

    Sua resposta deve ser apenas no formato JSON e seguir a estrutura a seguir:

    [
      { "title": "string", "ideia": "string", "legenda": "string", "hashtags": ["string", "string"] },
      { "title": "string", "ideia": "string", "legenda": "string", "hashtags": ["string", "string"] }
    ]
  `

    const result = await model.generateContent(prompt);
    const ideias = extractSolutions(result.response.text())

    return Response.json(ideias);
  } catch (error: any) {
    console.error('Erro ao gerar conteúdo:', error.message);
    return new Response('Erro ao gerar conteúdo', { status: 500 });
  }
}