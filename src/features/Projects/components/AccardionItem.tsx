export default function AccardionItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <img src="/projects/dot.png" alt="dote" />
      <span className="text-(--primary) text-[14px] font-light xl:max-w-[439px] 2xl:max-w-[601px]">{text}</span>
    </div>
  );
}
