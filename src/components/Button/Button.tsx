export default function Button({
  link,
  children,
}: {
  link?: string;
  children: React.ReactNode;
}) {
  if (link) {
    return (
      <a href={link} target="_blank" className="max-w-[285px] py-3 px-6 bg-(--bg-btn) flex justify-center items-center rounded-[20px] text-(--primary) hover:shadow-2xl shadow-indigo-500 cursor-pointer font-semibold">
        {children}
      </a>
    );
  }
  return (
    <button className="max-w-[285px] py-3 px-6 bg-(--bg-btn) flex justify-center items-center rounded-[20px] text-black hover:shadow-2xl shadow-indigo-500 cursor-pointer font-semibold">
      {children}
    </button>
  );
}
