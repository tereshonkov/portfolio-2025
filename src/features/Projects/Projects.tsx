import { motion } from "framer-motion";
import Card from "./components/Card";
import Accardion from "./components/Accardion";
import AccardionItem from "./components/AccardionItem";

export default function Projects() {
  return (
    <section
      className="relative py-[57px] px-2 flex flex-col gap-8 items-center xl:gap-40"
      id="projects"
    >
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 bg-white rounded-full w-[138px] h-[141px] blur-[100px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] xl:blur-[200px] xl:w-[400px] xl:h-[400px]"></div>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-bold text-[42px] text-center text-(--primary) md:text-[82px] xl:text-[100px]"
      >
        ПРОЄКТИ
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Card
          cardName="card-1-1"
          cardNameTwo="card-1-2"
          cardNameThree="card-1-3"
        >
          <Accardion title="Функціонал UX">
            <AccardionItem text="Мультимовність сайту та адміністративна панель для перегляду статистики та модерування повідомлень" />
            <AccardionItem text="Повідомлення з сайту надходять в адмін-панель і Telegram" />
            <AccardionItem text="Аккордеони та слайдери з анімаціями для інтерактивного UX" />
          </Accardion>
          <Accardion title="Технології">
            <AccardionItem text="Next.js, Nest.js, i18next, TypeScript, CSS" />
          </Accardion>
          <Accardion title="Коментар замовника">
            <AccardionItem text="Дякую за роботу, сайт вийшов чудовий, все працює як треба!" />
          </Accardion>
        </Card>
      </motion.div>
      <motion.h4
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-(--secondary) text-[32px] font-bold text-center xl:text-[52px] max-w-[1100px] z-10"
      >
        Web сайт це інструмент, який допомагає вашому бренду рости, виділятися
        та викликати довіру.
      </motion.h4>

      <picture>
        <img
          src="/projects/projects-bg.png"
          alt="background"
          className="absolute top-[600px] left-0 w-full object-cover md:w-[500px] xl:top-[900px]"
        />
      </picture>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Card
          cardName="card-2-1"
          cardNameTwo="card-2-2"
          cardNameThree="card-2-3"
        >
          <Accardion title="Функціонал UX">
            <AccardionItem text="Аккордеони та слайдери з анімаціями для інтерактивного UX" />
          </Accardion>
          <Accardion title="Технології">
            <AccardionItem text="Next.js, Embla Carousel, TypeScript, Tailwind CSS" />
          </Accardion>
          <Accardion title="Коментар замовника">
            <AccardionItem text="Комунікація була швидкою, зрозумілою та конструктивною. Результатом задоволений — код чистий, адаптив працює, проєкт запущено без проблем. Рекомендую до співпраці як відповідального й технічно грамотного спеціаліста." />
          </Accardion>
        </Card>
      </motion.div>
    </section>
  );
}
