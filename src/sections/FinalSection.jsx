import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import fotoBackground from "../assets/person footer.svg";
import logoHost from "../assets/logo-host.svg";

export default function FinalSection() {
  return (
    <section className="w-full relative bg-[#0B0B0B] overflow-hidden">
      <div className="relative w-full h-[500px] md:h-[700px] flex items-center px-6 md:px-24">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${fotoBackground})` }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-[500px] text-white text-center md:text-left mx-auto md:mx-0"
        >
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4 md:mb-6">
            PRONTO PARA <br className="hidden md:block" /> TRANSFORMAR SUA{" "}
            <br className="hidden md:block" /> OPERAÇÃO?
          </h2>
          <p className="text-sm md:text-lg leading-relaxed mb-6 md:mb-8 text-gray-100">
            <span className="font-bold">
              Converse com um de nossos especialistas
            </span>{" "}
            e descubra como a HØST pode ajudar seu negócio a crescer.
          </p>

          <motion.a
            href="https://wa.me/5511911997731"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#CCA349] text-white font-medium py-3 px-8 rounded-full text-sm md:text-base shadow-lg inline-block cursor-pointer"
          >
            Quero conversar
          </motion.a>
        </motion.div>
      </div>

      <footer className="w-full bg-[#CCCAC3] rounded-t-[30px] md:rounded-t-[60px] -mt-10 md:-mt-16 relative z-20 pt-10 pb-6 px-6 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-12 gap-8 mb-8 text-center md:text-left">
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <img
                src={logoHost}
                alt="HØST"
                className="w-28 md:w-32 object-contain"
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <a
                href="#"
                className="text-[#003454] font-medium text-sm hover:text-[#CCA349]"
              >
                Início
              </a>
              <a
                href="#"
                className="text-[#003454] font-medium text-sm hover:text-[#CCA349]"
              >
                O que fazemos
              </a>
              <a
                href="#"
                className="text-[#003454] font-medium text-sm hover:text-[#CCA349]"
              >
                Sobre nós
              </a>
            </div>

            <div className="md:col-span-3 flex flex-col gap-2">
              <a
                href="#"
                className="text-[#003454] font-medium text-sm hover:text-[#CCA349]"
              >
                Seja um parceiro
              </a>
              <a
                href="#"
                className="text-[#003454] font-medium text-sm hover:text-[#CCA349]"
              >
                Indique e ganhe
              </a>
              <a
                href="#"
                className="text-[#003454] font-medium text-sm hover:text-[#CCA349]"
              >
                Contato
              </a>
            </div>

            <div className="md:col-span-4 flex flex-col items-center md:items-start gap-2">
              <h4 className="text-[#003454] font-bold text-lg mb-1">Contato</h4>
              <a
                href="tel:+5511911997731"
                className="text-[#003454] text-sm hover:text-[#CCA349]"
              >
                +55 (11) 91199-7731
              </a>
              <a
                href="mailto:sales@hostsolucao.com.br"
                className="text-[#003454] text-sm hover:text-[#CCA349]"
              >
                sales@hostsolucao.com.br
              </a>

              <div className="flex gap-4 mt-4">
                <a
                  href="https://instagram.com"
                  className="w-10 h-10 rounded-full bg-[#CCA349] text-[#003454] flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="w-10 h-10 rounded-full bg-[#CCA349] text-[#003454] flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#003454]/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="text-[#003454]/50 text-xs">
                Desenvolvido por
              </span>
              <span className="text-[#003454]/80 font-bold text-xs">ZION</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 text-[10px] md:text-xs text-[#003454]/50">
              <a href="#" className="hover:text-[#CCA349]">
                Política de privacidade
              </a>
              <span>Copyright © 2026 - Todos os direitos reservados.</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
