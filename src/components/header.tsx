import Image from "next/image";

import LandPageIMG from "@/assets/img/logo.png"
import Link from "next/link";
export default function Header() {
     return (
          <nav className="w-full bg-none absolute flex justify-between items-center p-4 z-10 ">
               <Link 
               href={"/"}
               >
                    <Image width={48} height={58} src={LandPageIMG.src} alt="Logo Smart.ia" />
               </Link>
               <div className="flex gap-8 text-lg">
                    <a href="#ferrameta" className="hover:underline">Sobre a Ferramenta</a>
                    <a href="#sobre" className="hover:underline">Sobre Nós</a>
                    <a href="#contato" className="hover:underline">Contatos</a>
               </div>
          </nav>

     )
}