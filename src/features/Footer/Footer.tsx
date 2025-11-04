import Form from "./components/Form";
import Social from "./components/Social";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div id="contacts" className="relative flex flex-col gap-[92px] py-[50px] px-3 md:px-[25px]">
      <motion.h2
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-(--primary) text-[32px] font-extrabold text-center md:text-[48px]"
      >
        Створімо щось справді сучасне разом
      </motion.h2>
      <Social />
      <picture className="absolute top-1/2 right-0 -translate-y-1/2 ">
        <source srcSet="/footer/md/bg.png" media="(min-width: 768px)" />
        <img src="/footer/bg.png" alt="background image" />
      </picture>
      <Form />
      <p className="text-[16px] font-light text-center">
        © 2025 Dmytro Tereshonkov — coded & designed by me.
      </p>
    </div>
  );
}
