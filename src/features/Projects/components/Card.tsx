import Button from "../../../components/Button/Button";
import SliderCard from "./SliderCard";

export default function Card({
  title = "Web-сайт для меблевої фірми",
  cardName,
  cardNameTwo,
  cardNameThree,
  link,
  children,
}: {
  title?: string;
  cardName?: string;
  cardNameTwo?: string;
  cardNameThree?: string;
  link: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-40 flex flex-col gap-8 p-2.5 border border-(--bg-btn) rounded-[20px] max-w-[350px] md:max-w-[701px] xl:flex-row xl:max-w-[1194px] 2xl:max-w-[1436px]">
      <SliderCard
        cardName={cardName}
        cardNameTwo={cardNameTwo}
        cardNameThree={cardNameThree}
      />
      <div className="flex flex-col gap-5">
        <h3 className="font-bold text-[26px]">{title}</h3>
        {children}
        <div className="flex justify-center mt-4">
          <Button link={link}>ПЕРЕГЛЯНУТИ</Button>
        </div>
      </div>
    </div>
  );
}
