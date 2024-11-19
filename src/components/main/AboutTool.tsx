import Image from "next/image";
import IA from '../../assets/img/muie.png'
import Link from "next/link";
import aboutToolBg from '@/assets/img/background/aboutToolBg.png'

export default function AboutTool() {
     return (
          <section 
          className="flex md:h-[660px] pl-16 pt-5 md:pt-0 gap-16  justify-center items-center"
          style={{
               backgroundImage: `url(${aboutToolBg.src})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
          }}>
               <div className="self-center md:w-[40%]  flex   gap-16 flex-col justify-center items-center">
                    <h1 className="text-5xl self-start">
                         Sobre a Ferramenta
                    </h1>
                    <p className="text-justify md:text-xl ">

                         Nossa ferramenta reúne Leonard.ai, ChatGPT e, em breve, novas inteligências artificiais, todas desenvolvidas para oferecer criação de conteúdo personalizada, com aprendizado contínuo e resultados otimizados para diferentes plataformas digitais.
                    </p>
                    <Link
                         href="/ferramenta"
                         className="py-1 md:py-2 px-4 md:px-6 md:text-3xl text-xl bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg hover:from-blue-600 hover:to-cyan-500 "
                    >
                         Acessar Ferramentas
                    </Link>
               </div>
               <div>
                    <Image
                         src={IA.src}
                         width={400}
                         height={400}
                         alt=""
                         className="md:block hidden"
                    />

               </div>
          </section>
     )
}