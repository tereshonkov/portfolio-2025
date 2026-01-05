export default function Container({ children }: { children: React.ReactNode }) {
  return <section className="max-w-[1200px] mx-auto">{children}</section>;
}
