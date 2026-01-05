export default function Container({ children }: { children: React.ReactNode }) {
  return <section className="xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto p-9 xl:p-12">{children}</section>;
}
