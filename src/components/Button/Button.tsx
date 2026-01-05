export default function Button({
  link,
  children,
}: {
  link?: string;
  children: React.ReactNode;
}) {
  if (link) {
    return (
      <a href={link} target="_blank" className="w-[295px] h-[86px] bg-(--bg-btn) flex justify-center items-center rounded-[20px] font-bold text-[22px] text-black xl:w-[225px] xl:h-20 xl:text-[18px] hover:shadow-2xl shadow-indigo-500 cursor-pointer">
        {children}
      </a>
    );
  }
  return (
    <button className="w-[295px] h-[86px] bg-(--bg-btn) flex justify-center items-center rounded-[20px] font-bold text-[22px] text-black xl:w-[225px] xl:h-20 xl:text-[18px] hover:shadow-2xl shadow-indigo-500 cursor-pointer">
      {children}
    </button>
  );
}
