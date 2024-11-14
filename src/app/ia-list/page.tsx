import ListBg from '@/assets/img/background/listBg.png'
import Header from '@/components/header'
import RowTable from '@/components/rowTable'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'




export default function ListIa() {
     return (
          <section
               className="flex flex-col items-center justify-center  h-screen"
               style={{
                    backgroundImage: `
                    radial-gradient(circle at 30% 30%, rgba(0, 90, 150, 0.7), transparent 60%),
                    radial-gradient(circle at 70% 70%, rgba(0, 180, 140, 0.7), transparent 60%),
                    radial-gradient(circle at 50% 100%, rgba(20, 30, 60, 1), rgba(20, 20, 30, 1)),
                    url(${ListBg.src})
                `,
               }}
          >
               <div className='w-full h-full flex flex-col items-center content-center fixed'>
                    <Header />
                    <Tabs defaultValue="text" className=" mt-24 container mx-auto space-y-2 ">
                         <TabsList className='ml-8'>
                              <TabsTrigger value="text">IAs de Texto</TabsTrigger>
                              <TabsTrigger value="video">IAs de Video</TabsTrigger>
                              <TabsTrigger value="imagem">IAs de Imagem</TabsTrigger>
                         </TabsList>
                         <ScrollArea className=" h-[80%] flex flex-col gap-3 ">
                              <TabsContent value="text" className='space-y1'>
                                   {
                                        IAsTexto.map((ia, index) => {
                                             return (
                                                  <RowTable
                                                       key={index + 1}
                                                       nome={ia.nome}
                                                       link={ia.link}
                                                       planos={ia.planos}
                                                       features={ia.uso}
                                                  />
                                             )
                                        })
                                   }
                              </TabsContent>
                              
                              <TabsContent value="video" className='space-y1'>
                                   {
                                        IAsVideo.map((ia, index) => {
                                             return (
                                                  <RowTable
                                                       key={index + 1}
                                                       nome={ia.nome}
                                                       link={ia.link}
                                                       planos={ia.planos}
                                                       features={ia.uso}
                                                  />
                                             )
                                        })
                                   }
                              </TabsContent>

                              <TabsContent value="imagem" className='space-y1'>
                                   {
                                        IAsImagem.map((ia, index) => {
                                             return (
                                                  <RowTable
                                                       key={index + 1}
                                                       nome={ia.nome}
                                                       link={ia.link}
                                                       planos={ia.planos}
                                                       features={ia.uso}
                                                  />
                                             )
                                        })
                                   }
                              </TabsContent>
                              
                         </ScrollArea>
                    </Tabs>
               </div>
          </section >
     )
}


const IAsTexto = [
     {
          nome: "ChatGPT",
          planos: ["Gratuito", "Plano pago"],
          uso: ["Textos", "Imagens"],
          link: "https://chatgpt.com/"
     },
     {
          nome: "Chatsonic",
          planos: ["Gratuito"],
          uso: ["Textos"],
          link: "https://writesonic.com/chat?ref=producthunt"
     },
     {
          nome: "Copy.ai",
          planos: ["Gratuito", "Plano pago"],
          uso: ["Textos"],
          link: "https://www.copy.ai/"
     },
     {
          nome: "Gemini",
          planos: ["Gratuito", "Plano pago"],
          uso: ["Textos"],
          link: "https://gemini.google.com/app"
     },
     {
          nome: "Koala.sh",
          planos: ["Gratuito", "Plano pago"],
          uso: ["Textos", "Artigos", "Links", "Imagens"],
          link: "https://koala.sh/"
     },
     {
          nome: "Paragraph AI",
          planos: ["Gratuito", "Versão paga"],
          uso: ["Textos"],
          link: "https://chromewebstore.google.com/detail/paragraphai-write-better/ieidddkeimflpkghaodhddcmlclcliaa?pli=1"
     },
     {
          nome: "Simplified",
          planos: ["Gratuito", "Versão paga"],
          uso: ["Textos"],
          link: "https://simplified.com/pt/ai-writer"
     },
     {
          nome: "Paragraph AI",
          planos: ["Gratuito", "Versão paga"],
          uso: ["Textos"],
          link: "https://chromewebstore.google.com/detail/paragraphai-write-better/ieidddkeimflpkghaodhddcmlclcliaa?pli=1"
     },
     {
          nome: "Simplified",
          planos: ["Gratuito", "Versão paga"],
          uso: ["Textos"],
          link: "https://simplified.com/pt/ai-writer"
     },

]

const IAsVideo = [

     {
          nome: "DeepAI",
          planos: ["Gratuito", "Plano pago"],
          uso: ["Textos", "Vídeos", "Fotos", "Áudios"],
          link: "https://deepai.org/"
     },
     {
          nome: "DeepAI",
          planos: ["Gratuito", "Plano pago"],
          uso: ["Textos", "Vídeos", "Fotos", "Áudios"],
          link: "https://deepai.org/"
     },
     {
          nome: "FlexClip",
          planos: ["Gratuito"],
          uso: ["Vídeos", "Imagens"],
          link: "https://www.flexclip.com/pt/"
     },
     {
          nome: "Wondershare Virbo",
          planos: ["Gratuito", "Plano pago"],
          uso: ["Vídeos"],
          link: "https://virbo.wondershare.com/"
     },
     {
          nome: "Synesthesia",
          planos: ["Gratuito", "Plano pago"],
          uso: ["Vídeos"],
          link: "https://www.synthesia.io/"
     },
     {
          nome: "Kapwing",
          planos: ["Gratuito", "Plano pago"],
          uso: ["Vídeos"],
          link: "https://www.kapwing.com/"
     },
     {
          nome: "DeepBrain AI",
          planos: ["Gratuito", "Versão paga"],
          uso: ["Vídeos"],
          link: "https://www.aistudios.com/pt"
     },
     {
          nome: "HeyGen AI",
          planos: ["Gratuito"],
          uso: ["Vídeos"],
          link: "https://app.heygen.com/login"
     },
]

const IAsImagem = [
     {
          "nome": "Mid Journey",
          "planos": ["Gratuito", "Plano pago"],
          "uso": ["Gerar imagens", "Fornecer templates"],
          "link": "https://www.midjourney.com/home"
     },
     {
          "nome": "Deep Dream Generator",
          "planos": ["Gratuito", "Plano pago"],
          "uso": ["Gerar imagens"],
          "link": "https://deepdreamgenerator.com/"
     },
     {
          "nome": "Craiyon",
          "planos": ["Gratuito", "Plano pago"],
          "uso": ["Gerar imagens"],
          "link": "https://www.craiyon.com/"
     },
     {
          "nome": "Microsoft Designer",
          "planos": ["Gratuito", "Plano pago"],
          "uso": ["Gerar imagens"],
          "link": "https://designer.microsoft.com/image-creator"
     },
     {
          "nome": "DeepAI",
          "planos": ["Gratuito", "Plano pago"],
          "uso": ["Gerar textos", "Vídeos", "Fotos", "Áudios"],
          "link": "https://deepai.org/"
     },
     {
          "nome": "Leonardo AI",
          "planos": ["Gratuito", "Plano pago"],
          "uso": ["Gerar imagens", "Adicionar movimentos"],
          "link": "https://app.leonardo.ai/"
     },
     {
          "nome": "FlexClip",
          "planos": ["Gratuito", "Plano pago"],
          "uso": ["Editar vídeos", "Editar imagens"],
          "link": "https://www.flexclip.com/pt/"
     },
     {
          "nome": "Koala.sh",
          "planos": ["Gratuito", "Plano pago"],
          "uso": ["Gerar textos", "Artigos", "Links", "Imagens"],
          "link": "https://koala.sh/"
     },
]
