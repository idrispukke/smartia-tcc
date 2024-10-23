
import { ArrowUpRight, Camera, Save } from "lucide-react"

interface ActionButtonProps {
     icon: React.ReactNode
     title: string
     description: string
     trigger: string
}

function ActionButton({ icon, title, description, trigger }: ActionButtonProps) {
     return (
          <div className="hover:animate-pulse hover:border h-[300px] bg-gray-800 p-6 rounded-lg shadow-lg text-center flex flex-col justify-center items-center gap-3">
               <div className="bg-gray-700 rounded-full p-4 mb-4">
                    {icon}
               </div>
               <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
               <div className="flex flex-col justify-center items-center gap-2">
                    <p className="text-gray-400 w-[90%] text-lg mb-2 h-12">
                         {description}
                    </p>
                    <button className="text-teal-400  flex items-center justify-center">
                         {trigger}
                         <ArrowUpRight className="w-4 h-4 ml-1" />
                    </button>
               </div>
          </div>
     )
}

export default function AboutTool() {
     return (
          <div className="p-6 flex flex-col md:flex-row gap-4 justify-center items-stretch">

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