import { motion } from "framer-motion";

export default function Content() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-[42px] max-w-[345px] md:max-w-[668px] xl:max-w-[560px] 2xl:max-w-[803px]"
    >
      <h2 className="text-[22px] font-bold text-(--primary) md:text-[42px] 2xl:text-[32px]">
        Мене звати Дмитро,я Frontend розробник,який{" "}
        <span className="text-(--secondary)">створює вебсайти</span>,що{" "}
        <span className="text-(--secondary)">приносять реальні результати</span>
        .
      </h2>

      <div className="flex flex-col gap-4 text-[16px] text-(--primary) md:text-[18px] 2xl:text-[20px]">
        <p>
          Моя мета не просто писати код,а допомагати вашому бізнесу виглядати
          професійно,залучати клієнтів і викликати довіру.
        </p>
        <p>
          Я створюю адаптивні, швидкі та емоційно привабливі інтерфейси за
          допомогою{" "}
          <span className="text-(--secondary)">Wordpress, React, Next.js</span>{" "}
          де важлива кожна деталь.
        </p>
        <p>
          Мій підхід простий: я занурююсь у кожен проєкт, думаю як користувачі
          створюю рішення, які дійсно працюють.
        </p>
      </div>
    </motion.div>
  );
}
