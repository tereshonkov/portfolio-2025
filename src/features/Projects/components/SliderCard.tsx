import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import SlideItem from "./SlideItem";

export default function SliderCard({
  cardName,
  cardNameTwo,
  cardNameThree,
}: {
  cardName?: string;
  cardNameTwo?: string;
  cardNameThree?: string;
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
    <div
      className="relative overflow-hidden w-[332px] md:w-[670px] xl:w-[602px] 2xl:w-[702px]"
      ref={emblaRef}
    >
      <div className="flex">
        <div className="flex-[0_0_332px] flex justify-center items-center md:flex-[0_0_670px] xl:flex-[0_0_602px] 2xl:flex-[0_0_702px]">
          <SlideItem cardName={cardName!} />
        </div>
        <div className="flex-[0_0_332px] flex justify-center items-center md:flex-[0_0_670px] xl:flex-[0_0_602px] 2xl:flex-[0_0_702px]">
          <SlideItem cardName={cardNameTwo!} />
        </div>
        <div className="flex-[0_0_332px] flex justify-center items-center md:flex-[0_0_670px] xl:flex-[0_0_602px] 2xl:flex-[0_0_702px]">
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
  );
}
