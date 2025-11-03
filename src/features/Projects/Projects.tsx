import { motion } from "framer-motion";
import Card from "./components/Card";
import Accardion from "./components/Accardion";
import AccardionItem from "./components/AccardionItem";

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
      <Card cardName="card-1-1">
        <Accardion title="Функціонал UX">
          <AccardionItem text="Аккордеони та слайдери з анімаціями для інтерактивного UX" />
        </Accardion>
        <Accardion title="Технології">
          <AccardionItem text="Аккордеони та слайдери з анімаціями для інтерактивного UX" />
        </Accardion>
        <Accardion title="Коментар замовника">
          <AccardionItem text="Аккордеони та слайдери з анімаціями для інтерактивного UX" />
        </Accardion>
      </Card>
      <h4 className="text-(--secondary) text-[32px] font-bold text-center">
        Web сайт це інструмент, який допомагає вашому бренду рости, виділятися
        та викликати довіру.
      </h4>

      <picture>
        <img
          src="/projects/projects-bg.png"
          alt="background"
          className="absolute top-[600px] left-0 w-full object-cover"
        />
      </picture>
      <Card cardName="card-2-1" />
    </section>
  );
}
