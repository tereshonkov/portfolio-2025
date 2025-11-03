import { motion } from "framer-motion";
import Card from "./components/Card";

export default function Projects() {
  return (
    <section
      className="relative py-[57px] px-2 flex flex-col gap-8 items-center"
      id="projects"
    >
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 bg-white rounded-full w-[138px] h-[141px] blur-[100px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]"></div>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-bold text-[42px] text-center text-(--primary) md:text-[82px] xl:text-[100px]"
      >
        ПРОЄКТИ
      </motion.h2>
      <Card />
    </section>
  );
}
