import { ArrowUpRight } from "lucide-react"

interface ActionButtonProps {
     icon: React.ReactNode
     title: string
     description: string
     trigger: string
}

export function ActionButton({ icon, title, description, trigger }: ActionButtonProps) {
     return (
          <div className=" hover:border h-[300px] bg-gray-800 p-6 rounded-lg shadow-lg text-center flex flex-col justify-center items-center gap-3">
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
