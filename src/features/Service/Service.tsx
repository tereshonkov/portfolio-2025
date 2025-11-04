import { motion } from "framer-motion";
import ServiceImages from "./components/ServiceImages";
import ContentBlock from "./components/ContentBlock";

export default function Service() {
  return (
    <section
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
      <ServiceImages />
      <ContentBlock />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-[22px] mb-4 flex justify-center xl:absolute xl:bottom-10 xl:left-1/2 xl:-translate-x-1/2 z-50 2xl:bottom-5"
      >
        <a
          href="#contacts"
          className="w-[295px] h-[86px] bg-(--bg-btn) flex justify-center items-center rounded-[20px] font-bold text-[22px] text-black xl:w-[425px] xl:h-[124px] xl:text-[32px] hover:shadow-2xl shadow-indigo-500 cursor-pointer"
        >
          ЗАМОВИТИ ПРОЄКТ
        </a>
      </motion.div>
    </section>
  );
}
