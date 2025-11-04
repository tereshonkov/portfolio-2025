import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative py-3 px-1.5 xl:p-[21px] w-full max-h-screen"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="w-full h-full rounded-lg object-cover 2xl:max-h-[850px]"
      >
        <source src="https://storage.googleapis.com/t-mebel/hero%20(1).webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
        <motion.h1
          className="font-bold text-(--primary) text-[32px] tracking-[0.28em] md:text-[78px] lg:self-start lg:ml-4 xl:text-[100px] 2xl:ml-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          FRONTEND
        </motion.h1>
        <motion.h2
          className="font-bold text-(--secondary) text-[32px] tracking-[0.28em] md:text-[78px] lg:self-end lg:mr-4 xl:text-[100px] 2xl:mr-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          РОЗРОБНИК
        </motion.h2>
        <motion.p
          className="font-bold text-(--primary) text-[14px] tracking-[0.28em] w-full text-center md:text-[28px] md:mt-6 lg:mt-10 lg:self-center lg:text-[42px] 2xl:mt-[100px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Створюю сучасні рішення для ВАС
        </motion.p>
      </div>
    </section>
  );
}
