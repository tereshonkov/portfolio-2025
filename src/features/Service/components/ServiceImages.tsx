import { motion } from "framer-motion";

export default function ServiceImages() {
  return (
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
  )
}
