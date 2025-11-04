import Button from "../../../components/Button/Button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Form() {
  const [result, setResult] = useState("");
  const [formKey, setFormKey] = useState(Date.now());

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "82a38974-c7f8-4a7c-b08a-99d102cd38ba");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
      setFormKey(Date.now());
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.form
      key={formKey}
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="relative z-20 flex flex-col gap-8 lg:max-w-[846px] mx-auto"
    >
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col gap-4 md:flex-1">
          <label className="text-(--secondary) text-[24px]" htmlFor="name">
            Імʼя
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="outline-none border border-(--secondary) rounded-[15px] w-full h-[58px] text-[22px] text-(--secondary) pl-2 focus:shadow-2xl focus:shadow-indigo-500"
            required
          />
        </div>
        <div className="flex flex-col gap-4 md:flex-1">
          <label className="text-(--secondary) text-[24px]" htmlFor="email">
            Пошта або Телефон
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="outline-none border border-(--secondary) rounded-[15px] w-full h-[58px] text-[22px] text-(--secondary) pl-2 focus:shadow-2xl focus:shadow-indigo-500"
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-(--secondary) text-[24px]" htmlFor="message">
          Повідомлення
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="outline-none border border-(--secondary) rounded-[15px] w-full text-[22px] text-(--secondary) pl-2 pt-2 focus:shadow-2xl focus:shadow-indigo-500"
          required
        />
      </div>
      <div className="flex justify-center">
        <Button>ЗАМОВИТИ ПРОЄКТ</Button>
      </div>
      <div className="flex justify-center">
        <p className="text-[22px] text-(--secondary) max-w-[846px] text-center">
          {result}
        </p>
      </div>
    </motion.form>
  );
}
