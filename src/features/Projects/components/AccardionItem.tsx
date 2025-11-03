export default function AccardionItem({ text }: { text: string }) {
  return (
    <>
      <img src="/projects/dot.png" alt="dote" />
      <span className="text-(--primary) text-[14px] font-light">{text}</span>
    </>
  );
}
