import { motion } from "framer-motion";
import Button from "../Button/Button";

export default function Service() {
  return (
    <div
      id="services"
      className="relative p-3 flex flex-col gap-10 overflow-hidden xl:flex-row xl:mt-[50px]"
    >
      <picture className="absolute top-0 right-0 z-10">
        <source
          media="(min-width: 1280px)"
          srcSet="/service/xl/service-bg.png"
        />
        <img src="/service/service-bg.png" alt="background lines" />
      </picture>
      <div className="relative min-h-[260px] md:min-h-[380px] lg:min-h-[450px] xl:min-h-[850px] xl:w-1/2">
        <div className="absolute top-[120px] left-1/2 -translate-x-1/2 bg-white rounded-full w-[138px] h-[141px] blur-[100px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]"></div>
        <motion.picture
          initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-0 left-0 z-30 md:w-[350px] md:left-8 lg:w-[450px] lg:left-[100px] xl:left-5 2xl:left-30"
        >
          <source media="(min-width: 1024px)" srcSet="/service/lg/1.png" />
          <source media="(min-width: 768px)" srcSet="/service/md/1.png" />
          <img src="/service/1.png" alt="macbook" />
        </motion.picture>
        <motion.picture
          initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-[100px] right-0 z-20 md:w-[350px] md:right-[70px] lg:w-[450px] xl:left-[170px] xl:top-[200px] 2xl:left-80"
        >
          <source media="(min-width: 1024px)" srcSet="/service/lg/2.png" />
          <source media="(min-width: 768px)" srcSet="/service/md/2.png" />
          <img src="/service/2.png" alt="macbook" />
        </motion.picture>
      </div>
      <div className="flex flex-col gap-[60px] lg:items-center xl:items-start xl:relative xl:z-40 lg:w-[724px] xl:w-[650px] 2xl:flex-1 xl:mt-10">
        <motion.h2
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-(--primary) text-[32px] text-center font-extrabold leading-[1.15] lg:text-left lg:text-[62px] xl:text-[38px] 2xl:text-[58px]"
        >
          Я створюю <br />
          веб-сайти, які надихають та{" "}
          <br className="hidden md:block xl:hidden" />
          <span className="text-(--secondary)">приносять результат</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-(--primary) text-[16px] font-medium text-center lg:text-left lg:text-[32px] xl:text-[26px] 2xl:text-[32px]"
        >
          Перетворюю ідеї на динамічні веб-проєкти з використанням{" "}
          <span className="text-(--secondary)">
            React, Next.js та Tailwind CSS
          </span>
          .Кожен проєкт — це баланс між естетикою та функціональністю: ваш сайт
          не лише чудово виглядатиме, а й буде продуманий до кожної деталі.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-[22px] mb-4 flex justify-center xl:absolute xl:bottom-10 xl:left-1/2 xl:-translate-x-1/2 z-50 2xl:bottom-5"
      >
        <Button>ЗАМОВИТИ ПРОЄКТ</Button>
      </motion.div>
    </div>
  );
}
