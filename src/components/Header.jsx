import { motion } from "framer-motion";
import logo from "../assets/logo-host.svg";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white shadow-sm z-50 relative flex justify-center"
    >
      <div className="w-full max-w-[1440px] flex items-center justify-between px-12 py-6">
        <div className="flex items-center">
          <img src={logo} alt="Host logo" className="h-8" />
        </div>

        <div className="flex items-center gap-10">
          <nav className="hidden lg:flex gap-8 text-[14px] font-medium text-[#534C49]">
            <a
              href="#o-que-fazemos"
              className="hover:text-[#CCA349] transition-colors"
            >
              O QUE FAZEMOS
            </a>
            <a
              href="#sobre-nos"
              className="hover:text-[#CCA349] transition-colors"
            >
              SOBRE NÓS
            </a>
            <a
              href="#seja-parceiro"
              className="hover:text-[#CCA349] transition-colors"
            >
              SEJA UM PARCEIRO
            </a>
            <a
              href="#indique"
              className="hover:text-[#CCA349] transition-colors"
            >
              INDIQUE E GANHE
            </a>
          </nav>

          {/* Sombra preta adicionada com shadow-lg e shadow-black/30 */}
          <button className="bg-[#CCA349] hover:brightness-110 text-white text-sm font-semibold px-8 py-2.5 rounded-full transition-all shadow-lg shadow-black/30">
            CONTATO
          </button>
        </div>
      </div>
    </motion.header>
  );
}