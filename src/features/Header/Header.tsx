import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="hidden xl:flex border border-gray-300 w-[797px] h-[59px] rounded-2xl justify-center items-center backdrop-blur-2xl fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#26487A]/40">
        <nav>
          <ul className="flex gap-6">
            <li><a href="#home" className="text-white hover:text-(--secondary) text-[20px] font-bold">Головна</a></li>
            <li><a href="#services" className="text-white hover:text-(--secondary) text-[20px] font-bold">Послуги</a></li>
            <li><a href="#projects" className="text-white hover:text-(--secondary) text-[20px] font-bold">Проєкти</a></li>
            <li><a href="#about" className="text-white hover:text-(--secondary) text-[20px] font-bold">Про мене</a></li>
            <li><a href="#contacts" className="text-white hover:text-(--secondary) text-[20px] font-bold">Контакти</a></li>
          </ul>
        </nav>
    </motion.header>
  )
}
