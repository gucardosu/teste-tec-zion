import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import fotoBackground from "../assets/person footer.svg"; 
import logoHost from "../assets/logo-host.svg";

export default function FinalSection() {
  return (
    <section className="w-full relative bg-[#0B0B0B] overflow-hidden">
      
      <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-end px-6 md:px-24">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${fotoBackground})` }}
        />

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-[500px] text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            PRONTO PARA <br /> TRANSFORMAR SUA <br /> OPERAÇÃO?
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-100">
            <span className="font-bold">Converse com um de nossos especialistas</span> e descubra como a HØST pode ajudar com soluções personalizadas para simplificar, otimizar e fazer o seu negócio crescer.
          </p>
          
          <motion.a 
            href="https://wa.me/5511911997731" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#CCA349] text-white font-medium py-3 px-8 rounded-full text-base shadow-lg inline-block cursor-pointer"
          >
            Quero conversar
          </motion.a>
        </motion.div>
      </div>

      {/* Footer reduzido */}
      <footer className="w-full bg-[#CCCAC3] rounded-t-[40px] md:rounded-t-[60px] -mt-16 relative z-20 pt-8 pb-4 px-6 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-6">
            
            <div className="md:col-span-3">
              <img src={logoHost} alt="HØST" className="w-32 object-contain" />
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <a href="#" className="text-[#003454] font-medium text-sm hover:text-[#CCA349] transition-colors">Início</a>
              <a href="#" className="text-[#003454] font-medium text-sm hover:text-[#CCA349] transition-colors">O que fazemos</a>
              <a href="#" className="text-[#003454] font-medium text-sm hover:text-[#CCA349] transition-colors">Sobre nós</a>
            </div>

            <div className="md:col-span-3 flex flex-col gap-2">
              <a href="#" className="text-[#003454] font-medium text-sm hover:text-[#CCA349] transition-colors">Seja um parceiro</a>
              <a href="#" className="text-[#003454] font-medium text-sm hover:text-[#CCA349] transition-colors">Indique e ganhe</a>
              <a href="#" className="text-[#003454] font-medium text-sm hover:text-[#CCA349] transition-colors">Contato</a>
            </div>

            <div className="md:col-span-4 flex flex-col gap-2 relative">
              <h4 className="text-[#003454] font-bold text-lg mb-1">Contato</h4>
              <a href="tel:+5511911997731" className="text-[#003454] text-sm hover:text-[#CCA349] transition-colors">+55 (11) 91199-7731</a>
              <a href="mailto:sales@hostsolucao.com.br" className="text-[#003454] text-sm hover:text-[#CCA349] transition-colors">sales@hostsolucao.com.br</a>
              
              <div className="flex gap-3 mt-4 md:absolute md:bottom-0 md:right-0">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#CCA349] text-[#003454] flex items-center justify-center hover:scale-110 transition-transform">
                  <FaInstagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#CCA349] text-[#003454] flex items-center justify-center hover:scale-110 transition-transform">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#003454]/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[#003454]/50 text-xs">Desenvolvido por</span>
              <span className="text-[#003454]/80 font-bold tracking-widest text-xs">ZION</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 text-[11px] text-[#003454]/50">
              <a href="#" className="hover:text-[#CCA349]">Política de privacidade</a>
              <span>Copyright © 2026 - Todos os direitos reservados.</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}