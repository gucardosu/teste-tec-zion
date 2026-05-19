import { motion } from "framer-motion";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Hero() {
  return (
    <section className="w-full flex justify-center relative overflow-hidden min-h-[85vh]">
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-between px-12 py-20 relative z-10">
        <div className="md:w-1/2 flex flex-col gap-6 z-10">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-[56px] font-bold text-[#003454] leading-[1.1] max-w-[550px]"
          >
            Tudo o que o seu negócio precisa, com eficiência e simplicidade!
          </motion.h1>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#534C49] text-lg max-w-[500px] leading-relaxed"
          >
            A HØST é mais do que um fornecedor — somos o parceiro estratégico
            que te entende, direciona e conecta o seu negócio às melhores
            soluções em equipamentos, serviços e gestão. <br />
            <br />
            <strong className="text-[#003454] font-bold">
              Aqui você resolve tudo em um só lugar.
            </strong>
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-[#CCA349] hover:brightness-110 text-white font-semibold px-8 py-3.5 rounded-full transition-all mt-4 w-fit shadow-lg shadow-[#CCA349]/30">
              Conheça o HUB HØST
            </button>
          </motion.div>
        </div>

        <div className="md:w-1/2 relative min-h-[400px] md:min-h-[600px] flex justify-end mt-12 md:mt-0">
          <motion.img
            initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: -20 }}
            transition={{ duration: 1, ease: "easeOut" }}
            src="/src/assets/relogio home.png"
            alt="Bússola Dourada HØST"
            className="max-w-none absolute w-[500px] md:w-[700px] lg:w-[950px] -right-12 md:-right-24 lg:-right-40 top-1/2 -translate-y-1/2 drop-shadow-[-15px_25px_30px_rgba(0,0,0,0.45)] object-contain"
          />
        </div>
      </div>

      <WhatsAppButton />
    </section>
  );
}
