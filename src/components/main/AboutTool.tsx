import Image from "next/image";
import IA from '../../assets/img/muie.png'
import Link from "next/link";
import aboutToolBg from '@/assets/img/aboutToolBg.png'

export default function AboutTool() {
     return (
          <section 
          className="flex h-[660px] gap-16  justify-center items-center"
          style={{
               backgroundImage: `url(${aboutToolBg.src})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
          }}>
               <div className="w-[40%] flex  gap-16 flex-col justify-center items-center">
                    <h1 className="text-5xl self-start">
                         Sobre a Ferramenta
                    </h1>
                    <p className="text-justify text-xl">

                         Nossa ferramenta reúne Leonard.ai, ChatGPT e, em breve, novas inteligências artificiais, todas desenvolvidas para oferecer criação de conteúdo personalizada, com aprendizado contínuo e resultados otimizados para diferentes plataformas digitais.
                    </p>
                    <Link
                         href="/ferramenta"
                         className=" py-2 px-6 text-3xl bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg hover:from-blue-600 hover:to-cyan-500 "
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
                    />

               </div>
          </section>
     )
}