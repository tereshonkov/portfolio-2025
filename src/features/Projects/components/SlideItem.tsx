export default function SlideItem({ cardName }: { cardName: string }) {
  return (
    <div className="relative rounded-[20px] overflow-hidden w-[332px] h-[250px] md:w-[670px] md:h-[553px] xl:w-[602px] xl:h-[789px] 2xl:w-[702px]">
      <picture>
        <source
          srcSet={`/projects/2xl/${cardName}.png`}
          media="(min-width: 1536px)"
        />
        <source
          srcSet={`/projects/xl/${cardName}.png`}
          media="(min-width: 1280px)"
        />
        <source
          srcSet={`/projects/md/${cardName}.png`}
          media="(min-width: 768px)"
        />
        <img src={`/projects/${cardName}.png`} alt="photo web-site" />
      </picture>
    </div>
  );
}
