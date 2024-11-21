import Image from "next/image";

import LandPageIMG from "@/assets/img/logo.png"
import Link from "next/link";
import {  Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
export default function Header() {
     return (
          <nav className="w-full bg-none absolute flex justify-between items-center p-4 z-10 ">
               <Link
                    href={"/"}
               >
                    <Image width={48} height={58} src={LandPageIMG.src} alt="Logo Smart.ia" />
               </Link>
               <div className=" text-lg  hidden md:flex  gap-6 ">
                    <a href="#ferrameta" className="hover:underline">Sobre a Ferramenta</a>
                    <a href="#sobre" className="hover:underline">Sobre Nós</a>
                    <a href="#contato" className="hover:underline">Contatos</a>
               </div>
               <div className="md:hidden">
                    <Sheet>
                         <SheetTrigger>
                              <Menu />
                         </SheetTrigger>
                         <SheetContent className='bg-primary border-none w-[55%] text-white'>
                              <div className="flex flex-col h-full ">
                                   <SheetHeader className="flex justify-between items-center mb-4">
                                        <SheetTitle className="text-2xl font-bold text-white">Menu</SheetTitle>
                                   </SheetHeader>
                                   <nav className="flex flex-col  space-y-2">
                                        {Links.map((link, index) => (
                                             <Link
                                                  key={index + 1}
                                                  href={link.href}
                                                  className="px-2 py-2 rounded-md text-xl font-medium text-white hover:bg-primary-foreground hover:text-primary transition-colors"
                                             >
                                                  {link.title}
                                             </Link>
                                        ))}
                                   </nav>
                              </div>
                         </SheetContent>
                    </Sheet>

               </div>
          </nav>
     )
}


const Links = [
     {
          href: '#ferrameta',
          title: 'Ferramenta'
     },
     {
          href: '#sobre',
          title: 'Sobre Nós'
     },
     {
          href: '#contato',
          title: 'Contato'
     }
]
