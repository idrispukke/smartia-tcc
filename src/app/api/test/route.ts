import { BadRequestError } from '@/error/bad-request';
import { GoogleGenerativeAI } from '@google/generative-ai';
import type { NextRequest } from 'next/server';

function extractSolutions(markdown: string) {
  console.log(markdown);
  const jsonMatch = markdown.match(/```json\s*([\s\S]*?)\s*```/i);

  if (!jsonMatch) {
    throw new Error('JSON não encontrado no markdown fornecido.');
  }

  try {
    const jsonArray = JSON.parse(jsonMatch[1].trim());

    console.log(jsonArray);
    // Verifica se o JSON é um array
    if (!Array.isArray(jsonArray)) {
      throw new Error('O JSON extraído não é um array.');
    }

    return jsonArray;
  } catch (error) {
    if (error instanceof BadRequestError) {
      console.log(error);
      throw new BadRequestError(error.message);
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const { ideia, estilo, plataforma } = (await request.json()) as {
      ideia: string;
      estilo: string;
      plataforma: string;
    };

    const genAI = new GoogleGenerativeAI(
      'AIzaSyBScCLyZ6YY5MD_DtN2oJnChJydGD9RIXU'
    ); // Use environment variable for API key
    const model = genAI.getGenerativeModel({ model: 'gemini-1.0-pro' });

    const prompt = `
      Por favor, atue como James, um especialista em social media, copywriting e storytelling, com experiência em criar conteúdo envolvente que se conecta de maneira autêntica com o público e gera impacto. Seu foco é criar posts inovadores, criativos e atuais, com um estilo de escrita que ressoe com a audiência.
  
  Instruções:
  
  Análise Inicial: Com base na descrição abaixo da ideia fornecida (${ideia}), faça uma análise e crie 4 ideias de posts criativos e inovadores. As ideias devem ser adaptadas para a plataforma indicada (${plataforma}) e devem seguir o estilo de escrita especificado (${estilo}).
  
  Estrutura de Conteúdo: Para cada ideia de post, divida o conteúdo nos seguintes elementos:
  
  Ideias de Post: Sugira 4 ideias de posts criativos e inovadores, alinhadas com tendências atuais e o formato mais adequado para a plataforma mencionada.
  
  Legendas: Crie legendas persuasivas e envolventes para cada post, mantendo o estilo de escrita mencionado e sem incluir hashtags nas legendas.
  
  Hashtags: Selecione mais de 5 hashtags relevantes e atuais que possam aumentar o alcance do post. Coloque as hashtags entre aspas e sem incluir outras palavras no campo de hashtags.
  
  Formato de Saída: A resposta deve ser exclusivamente em formato JSON, com a seguinte estrutura:
  
  [
    {
      "title": "Título do Post",
      "ideia": "Descrição da ideia do post",
      "legenda": "Legenda persuasiva do post (sem hashtags)",
      "hashtags": ["hashtag1", "hashtag2", "hashtag3", "hashtag4", "hashtag5"]
    },
    {
      "title": "Título do Post",
      "ideia": "Descrição da ideia do post",
      "legenda": "Legenda persuasiva do post (sem hashtags)",
      "hashtags": ["hashtag1", "hashtag2", "hashtag3", "hashtag4", "hashtag5"]
    },
    ...
  ]
  
  Exemplo de Saída:
  [
    {
      "title": "Transforme seu dia com pequenos hábitos",
      "ideia": "Apresentar hábitos diários que aumentam a produtividade e a felicidade, com base em dados atuais de psicologia positiva.",
      "legenda": "Transforme sua rotina com pequenos hábitos que podem fazer uma grande diferença. Comece hoje e veja os resultados amanhã!",
      "hashtags": ["produtividade", "hábitos positivos", "bemestar", "motivação", sucesso"]
    },
    {
      "title": "O futuro do trabalho remoto",
      "ideia": "Explorar as tendências emergentes do trabalho remoto, incluindo novas tecnologias e práticas para melhorar a colaboração virtual.",
      "legenda": "O trabalho remoto chegou para ficar. Quais são as novas ferramentas que você está utilizando para otimizar seu dia a dia?",
      "hashtags": ["trabalhoremoto", "futurodo trabalho", "tecnologia", "colaboração virtual", "trabalho digital"]
    },
    ...
  ]
    `;

    const result = await model.generateContent(prompt);
    const ideiaResponse = result.response.text()

    if (ideiaResponse.match(/```json\s*([\s\S]*?)\s*```/i)) {
      const ideias = extractSolutions(ideiaResponse)

      return Response.json(ideias);
    }
    const ideias = JSON.parse(ideiaResponse)

    return Response.json(ideias);
  } catch (error) {
    console.log(error)
  }
}
