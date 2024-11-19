import { LuArrowDownCircle } from "react-icons/lu";
import SmartiaIMG from "@/assets/img/smartia.png"
import heroBg from '@/assets/img/background/heroBg.png'
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
     return (
          <section className="flex flex-col items-center justify-center h-screen"
               style={{
                    backgroundImage: `url(${heroBg.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
               }}>
             
               <div className="flex flex-col justify-center items-center l ">
                    <Image width={500} height={400} src={SmartiaIMG.src} alt="Logo Completa Smart.IA" />
                    <div className="flex flex-col justify-center items-center gap-2">
                         <Link
                              href="/tool"
                              className=" py-2 px-6 text-2xl bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg "
                         >
                              Acesar Ferramenta
                         </Link>
                         <Link
                              href="/ia-list"
                              className=" py-1 px-4 text-lg bg-gradient-to-t from-blue-500 to-cyan-400 rounded-lg "
                         >
                              Ver Lista de IAs
                         </Link>
                    </div>
               </div>

               <Link href="#functions" className="absolute bottom-4 flex flex-col items-center gap-2">
                    <LuArrowDownCircle className="animate-bounce text-white text-3xl" />
               </Link>
          </section>
     )
}