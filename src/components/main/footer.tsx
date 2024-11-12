import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"


export default function Footer() {
  return (
    <footer className="bg-[#0b0b0f] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Name */}
          <div className="flex flex-col items-start">
            <h2 className="text-4xl font-bold mb-4 font-cinzel">Smart.ia</h2>
            <p className="text-gray-400">
             Um sistema personalizado de IAs para a criação de conteudo digital.
            </p>
          </div>

          {/* Important Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Link Importantes</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                Sobre Nos
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contato
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Politica de Privacidade
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                Perfil do desenvolvedor
              </Link>
            </nav>
          </div>

          {/* Social Networks */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Siga nas Redes Socias</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Smart.ia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}