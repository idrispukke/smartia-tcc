import Image from "next/image";
import Link from "next/link";
import aboutToolBg from '@/assets/img/background/aboutToolBg.png'
import book from '@/assets/img/book.jpg'

export default function AboutBook() {
     return (
          <section
               className="flex h-[660px] md:gap-16  justify-center items-center"
               style={{
                    backgroundImage: `url(${aboutToolBg.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
               }}
          >

               <div>
                    <Image
                         src={book.src}
                         width={300}
                         height={300}
                         alt=""
                         className="hidden"
                    />

               </div>
               <div className="md:w-[40%] w-[90%] flex  gap-16 flex-col justify-center items-center">
                    <h1 className="text-3xl md:text-5xl self-start">
                         Baixe agora nosso Ebook gratuito!
                    </h1>
                    <p className="text-justify text-xl">
                         Nosso time disponibilizou para você um Ebook sobre como fazer prompts e melhorar suas respostas utilizando IAs e o melhor totalmente gratuito. Acesse aqui
                    </p>
                    <Link
                         href="/assets/book.pdf"
                         className="py-1 px-4  md:py-2 md:px-6 md:text-3xl text-xl bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg hover:from-blue-600 hover:to-cyan-500 "
                    >
                         Acessar e-book Gratuito
                    </Link>
               </div>
          </section>
     )
}