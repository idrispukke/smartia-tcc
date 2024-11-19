import { ArrowUpRight, Camera, Save } from "lucide-react"
import { ActionButton } from "../actionButton"
import aboutFunctionsBg from '@/assets/img/background/aboutFunctionsBg.png'

const cards = [
     {
          icon: <ArrowUpRight className="w-6 h-6 text-gray-400" />,
          title: "Enviar",
          description: "Aprenda a enviar de forma mais rápida suas demandas.",
          trigger: "Envie Agora"
     },
     {
          icon: <Save className="w-6 h-6 text-gray-400" />,
          title: "Salvar",
          description: "Salve de forma rápida e ágil sem perder suas imagens",
          trigger: "Salvar Agora"
     },
     {
          icon: <Camera className="w-6 h-6 text-gray-400" />,
          title: "Imagens",
          description: "Procure suas imagens da melhor forma com a smart.ia",
          trigger: "Gerar imagens"
     }
]

export default function AboutFunctions() {
     return (
          <div 
          id="functions"
          className=" p-6 flex flex-col md:flex-row gap-4 justify-center items-center"
          style={{
               backgroundImage: `url(${aboutFunctionsBg.src})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
          }}>

               {
                    cards.map((card) => {
                         return (
                              <ActionButton
                                   key={card.title}
                                   icon={card.icon}
                                   title={card.title}
                                   description={card.description}
                                   trigger={card.trigger}
                              />
                         )
                    })
               }

          </div>
     )
}
