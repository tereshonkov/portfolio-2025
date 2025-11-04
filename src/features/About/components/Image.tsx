import { motion } from "framer-motion";

export default function Image() {
  return (
    <motion.picture
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}>
      <source srcSet="/about/2xl/me.png" media="(min-width: 1536px)" />
      <source srcSet="/about/xl/me.png" media="(min-width: 1280px)" />
      {/* <source srcSet="/about/lg/me.png" media="(min-width: 1024px)" /> */}
      <source srcSet="/about/md/me.png" media="(min-width: 768px)" />
      <img src="/about/me.png" alt="Dmytro" />
    </motion.picture>
  );
}
