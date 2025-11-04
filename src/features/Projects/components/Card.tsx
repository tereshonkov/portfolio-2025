import Button from "../../../components/Button/Button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import SlideItem from "./SlideItem";

export default function Card({
  cardName,
  cardNameTwo,
  cardNameThree,
  children,
}: {
  cardName?: string;
  cardNameTwo?: string;
  cardNameThree?: string;
  children: React.ReactNode;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);
  return (
    <div className="relative z-40 flex flex-col gap-8 p-2.5 border border-(--bg-btn) rounded-[20px] max-w-[350px] md:max-w-[701px] xl:flex-row xl:max-w-[1194px]">
      <div className="relative overflow-hidden w-[332px] md:w-[670px] xl:w-[602px]" ref={emblaRef}>
        <div className="flex">
          <div className="flex-[0_0_332px] flex justify-center items-center md:flex-[0_0_670px] xl:flex-[0_0_602px]">
            <SlideItem cardName={cardName!} />
          </div>
          <div className="flex-[0_0_332px] flex justify-center items-center md:flex-[0_0_670px] xl:flex-[0_0_602px]">
            <SlideItem cardName={cardNameTwo!} />
          </div>
          <div className="flex-[0_0_332px] flex justify-center items-center md:flex-[0_0_670px] xl:flex-[0_0_602px]">
            <SlideItem cardName={cardNameThree!} />
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-0 flex justify-between w-full">
          <picture className="cursor-pointer" onClick={scrollPrev}>
            <img src="/projects/left.png" alt="arrow left" />
          </picture>
          <picture className="cursor-pointer" onClick={scrollNext}>
            <img src="/projects/right.png" alt="arrow right" />
          </picture>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="font-bold text-[26px]">Web-сайт для меблевої фірми</h3>
        {children}
        <div className="flex justify-center mt-4">
          <Button>ПЕРЕГЛЯНУТИ</Button>
        </div>
      </div>
    </div>
  );
}
