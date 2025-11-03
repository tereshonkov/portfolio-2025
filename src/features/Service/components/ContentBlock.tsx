import { motion } from "framer-motion";

export default function ContentBlock() {
  return (
    <div className="flex flex-col gap-[60px] lg:items-center xl:items-start xl:relative xl:z-40 xl:w-[650px] 2xl:flex-1 xl:mt-10">
      <motion.h2
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-(--primary) text-[32px] text-center font-extrabold leading-[1.15] xl:text-left lg:text-[62px] xl:text-[38px] 2xl:text-[58px]"
      >
        Я створюю <br />
        веб-сайти, які надихають та <br className="hidden md:block xl:hidden" />
        <span className="text-(--secondary)">приносять результат</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-(--primary) text-[16px] font-medium text-center xl:text-left lg:text-[32px] xl:text-[26px] 2xl:text-[32px]"
      >
        Перетворюю ідеї на динамічні веб-проєкти з використанням{" "}
        <span className="text-(--secondary)">
          React, Next.js та Tailwind CSS
        </span>
        .Кожен проєкт — це баланс між естетикою та функціональністю: ваш сайт не
        лише чудово виглядатиме, а й буде продуманий до кожної деталі.
      </motion.p>
    </div>
  );
}
