import Button from "../../../components/Button/Button";

export default function Card({ cardName, children }: { cardName?: string, children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8 p-2.5 border border-(--bg-btn) rounded-[20px]">
      <div className="relative w-[332px] h-[250px]">
        <picture>
          <img src={`/projects/${cardName}.png`} alt="photo web-site macbook" />
        </picture>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full">
          <picture className="cursor-pointer">
            <img src="/projects/left.png" alt="arrow left" />
          </picture>
          <picture className="cursor-pointer">
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
