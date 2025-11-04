import Button from "../../../components/Button/Button";
import { motion } from "framer-motion";

export default function Form() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      action=""
      className="relative z-20 flex flex-col gap-8 lg:max-w-846px mx-auto"
    >
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col gap-4 md:flex-1">
          <label className="text-(--secondary) text-[24px]" htmlFor="name">
            Імʼя
          </label>
          <input
            type="text"
            id="name"
            className="outline-none border border-(--secondary) rounded-[15px] w-full h-[58px] text-[22px] text-(--secondary) pl-2 focus:shadow-2xl focus:shadow-indigo-500"
          />
        </div>
        <div className="flex flex-col gap-4 md:flex-1">
          <label className="text-(--secondary) text-[24px]" htmlFor="email">
            Пошта або Телефон
          </label>
          <input
            type="text"
            id="email"
            className="outline-none border border-(--secondary) rounded-[15px] w-full h-[58px] text-[22px] text-(--secondary) pl-2 focus:shadow-2xl focus:shadow-indigo-500"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-(--secondary) text-[24px]" htmlFor="message">
          Повідомлення
        </label>
        <textarea
          id="message"
          rows={4}
          className="outline-none border border-(--secondary) rounded-[15px] w-full text-[22px] text-(--secondary) pl-2 pt-2 focus:shadow-2xl focus:shadow-indigo-500"
        />
      </div>
      <div className="flex justify-center">
        <Button>ЗАМОВИТИ ПРОЄКТ</Button>
      </div>
    </motion.form>
  );
}
