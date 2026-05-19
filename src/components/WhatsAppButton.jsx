import { motion } from "framer-motion";
import zapIcon from "../assets/zap.svg";

export default function WhatsAppButton() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-50 flex justify-center pointer-events-none">
      <div className="w-full max-w-[1440px] h-32 relative">
        <motion.a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-10 right-12 flex items-center gap-4 group pointer-events-auto"
        >
          <div className="bg-[#CCA349]/90 backdrop-blur-sm text-white text-[15px] font-medium px-6 py-3 rounded-full shadow-lg transition-transform hover:-translate-x-1 whitespace-nowrap">
            Como podemos te ajudar?
          </div>

          <div className="bg-[#e4c478] w-16 h-16 rounded-full flex items-center justify-center shadow-xl shadow-[#CCA349]/40 hover:scale-110 transition-transform">
            <div className="bg-[#CCA349] w-11 h-11 rounded-full flex items-center justify-center shadow-inner relative">
              <img
                src={zapIcon}
                alt="WhatsApp"
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>
        </motion.a>
      </div>
    </div>
  );
}
