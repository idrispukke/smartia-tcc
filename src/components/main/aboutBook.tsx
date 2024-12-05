import Image from "next/image";
import Link from "next/link";
import aboutToolBg from '@/assets/img/background/aboutToolBg.png'
import book from '@/assets/img/book.jpg'

export default function AboutBook() {
     return (
          <section
               className="flex h-[660px] md:gap-16 gap-5 flex-col  justify-center items-center"
               style={{
                    backgroundImage: `url(${aboutToolBg.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
               }}
          >

               <div>
                    <Image
                         src={book.src}
                         width={400}
                         height={400}
                         alt=""
                         className="w-24 md:full"
                    />

               </div>
               <div className="  w-[90%] md:w-[40%] flex md:gap-16 gap-10 flex-col justify-center items-center">
                    <h1 className=" text-balance text-center block text-3xl md:text-5xl md:self-start">
                         Baixe agora nosso Ebook gratuito!
                    </h1>
                    <p className=" hidden md:block text-justify text-center text-xl">
                         Nosso time disponibilizou um E-Book sobre como fazer prompts e melhorar suas respostas utilizando IAs.
                    </p>
                    <p className=" hidden md:block text-justify text-center text-xl">
                         E o melhor: totalmente gratuito!
                    </p>
                    <Link
                         href="/assets/book.pdf"
                         className="py-1 px-4  md:py-2 md:px-6 md:text-3xl text-xl bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg hover:from-blue-600 hover:to-cyan-500 "
                    >
                         Acessar E-Book Gratuito
                    </Link>
               </div>
          </section>
     )
}
