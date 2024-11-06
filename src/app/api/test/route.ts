import { GoogleGenerativeAI } from '@google/generative-ai';
import type { NextRequest } from 'next/server';
import MarkdownIt from 'markdown-it';

type ExtractedData = {
  hashtags: string[];
  ideias: { title: string; ideia: string; legenda: string }[];
};

function extractSolutions(markdownText: string): ExtractedData {
  const md = new MarkdownIt();
  const ast = md.parse(markdownText, {});

  // Procurar por um bloco de código JSON (geralmente representado pelo tipo 'fence')
  const codeBlock = ast.find(node => node.type === 'fence' && node.info.trim() === 'json');

  if (!codeBlock) {
    throw new Error('Bloco JSON não encontrado');
  }

  try {
    // Parse do conteúdo do bloco JSON
    const parsedContent = JSON.parse(codeBlock.content);

    // Verifica se o JSON tem os campos esperados
    if (!parsedContent.hashtags || !parsedContent.ideias) {
      throw new Error('Estrutura JSON inesperada');
    }

    // Retorna o objeto com as hashtags e as ideias
    return {
      hashtags: parsedContent.hashtags,
      ideias: parsedContent.ideias.map((item: { title: string; ideia: string; legenda: string }) => ({
        title: item.title,
        ideia: item.ideia,
        legenda: item.legenda,
      })),
    };
  } catch (error) {
    throw new Error('Erro ao parsear JSON: ' + error);
  }
}



export async function POST(request: NextRequest) {
  try {
    const { ideia, tipo, plataforma } = await request.json() as { ideia: string; tipo: string; plataforma: string };
  
    const genAI = new GoogleGenerativeAI("AIzaSyD6jnRztM7ET-fDbjFV8mEBgKG66KeRuLg"); // Use environment variable for API key
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Quero que vc seja o JAMES, um especialista em social media, copywriting e storytelling. E agora você está lidando com um público de idade avançada. Recebendo a seguinte descrição: ${ideia}, gere para mim 3 ideias de post seguindo o estilo ${tipo} para a rede social ${plataforma}, e também 7-8 hashtags que estejam ligadas aos posts em geral  ao sugerir não esquecer do #. não coloque nenhuma hashtags na legenda. Sua resposta deve ser apenas no formato JSON e seguir a estrutura a seguir: { hashtags: [string, string], ideias: [{ title: string, ideia: string, legenda: string }, { title: string, ideia: string, legenda: string }] }`

    const result = await model.generateContent(prompt);

    // Extract the response text
    const ideias = extractSolutions(result.response.text())

    return Response.json(ideias);
  } catch (error) {
    console.error('Erro ao gerar conteúdo:', error);
    return new Response('Erro ao gerar conteúdo', { status: 500 });
  }
}