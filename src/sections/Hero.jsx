import { motion } from "framer-motion";
import WhatsAppButton from "../components/WhatsAppButton";
import bussolaImg from "../assets/relogio home.png";

export default function Hero() {
  return (
    <section className="w-full flex justify-center relative overflow-hidden min-h-[85vh] bg-gradient-to-br from-[#F4F4F4] to-[#E8E8E8]">
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-20 relative z-10">
        <div className="w-full md:w-2/5 flex flex-col gap-5 z-10 text-center md:text-left">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-[56px] font-bold text-[#003454] leading-[1.1]"
          >
            Tudo o que o seu negócio precisa, com eficiência e simplicidade!
          </motion.h1>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#534C49] text-base md:text-lg leading-relaxed"
          >
            A HØST é mais do que um fornecedor — somos o parceiro estratégico
            que te entende, direciona e conecta o seu negócio às melhores
            soluções em equipamentos, serviços e gestão.
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            <strong className="text-[#534C49] font-bold">
              Aqui você resolve tudo em um só lugar.
            </strong>
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-[#CCA349] hover:brightness-110 text-white font-semibold px-8 py-3 rounded-full transition-all w-fit shadow-lg shadow-black/20 mx-auto md:mx-0">
              Conheça o HUB HØST
            </button>
          </motion.div>
        </div>

        <div className="w-full md:w-3/5 relative min-h-[300px] md:min-h-[500px] flex justify-center md:justify-end mt-8 md:-mt-20">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={bussolaImg}
            alt="Bússola Dourada HØST"
            className="w-[400px] md:w-[700px] lg:w-[950px] max-w-none object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.2)] md:mr-[-150px] lg:mr-[-200px]"
          />
        </div>
      </div>

      <WhatsAppButton />
    </section>
  );
}