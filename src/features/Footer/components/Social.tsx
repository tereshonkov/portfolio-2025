import { motion } from "framer-motion";

export default function Social() {
  return (
    <div className="flex items-center gap-8 relative z-20 justify-center md:justify-between lg:gap-[114px] lg:justify-center">
      <motion.a
        href="#"
        className="hover:shadow-2xl shadow-indigo-500 cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/footer/linkedin.png" alt="linkedin" />
      </motion.a>
      <motion.a
        href="#"
        className="hover:shadow-2xl shadow-indigo-500 cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <img src="/footer/tiktok.png" alt="tiktok" />
      </motion.a>
      <motion.a
        href="#"
        className="hover:shadow-2xl shadow-indigo-500 cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img src="/footer/github.png" alt="github" />
      </motion.a>
      <motion.a
        href="#"
        className="hover:shadow-2xl shadow-indigo-500 cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img src="/footer/telegram.png" alt="telegram" />
      </motion.a>
    </div>
  );
}
