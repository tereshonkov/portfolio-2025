import Container from "../../components/Container/Container";
import { FaWordpress, FaReact, FaNode } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import Button from "../../components/Button/Button";

export default function Service() {
  return (
    <Container>
      <h2 className="text-4xl font-bold uppercase text-center mb-8 text-white tracking-wide">Технології</h2>
      <div className="flex justify-center items-center mt-8 gap-6 flex-wrap">
        <div
          className="max-w-[250px] h-[250px] w-full flex flex-col items-center gap-4 justify-center border rounded-xl shadow-lg p-6 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.30))] backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:ring-4 hover:ring-(--secondary)"
          style={{ borderColor: "var(--secondary)", borderWidth: 1 }}
        >
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/80 mb-2">
            <FaWordpress size={40} style={{ color: "#1a5e8a", filter: "drop-shadow(0 2px 6px rgba(33,117,155,0.25))" }} />
          </span>
          <h3 className="text-2xl font-bold text-white">WordPress</h3>
          <p className="text-center text-gray-200">Розробка сайтів на WordPress</p>
        </div>
        <div
          className="max-w-[250px] h-[250px] w-full flex flex-col items-center gap-4 justify-center border rounded-xl shadow-lg p-6 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.30))] backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:ring-4 hover:ring-(--secondary)"
          style={{ borderColor: "var(--secondary)", borderWidth: 1 }}
        >
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/80 mb-2">
            <FaReact size={40} style={{ color: "#3fa7c9", filter: "drop-shadow(0 2px 6px rgba(97,218,251,0.25))" }} />
          </span>
          <h3 className="text-2xl font-bold text-white">React</h3>
          <p className="text-center text-gray-200">Розробка додатків на React</p>
        </div>
        <div
          className="max-w-[250px] h-[250px] w-full flex flex-col items-center gap-4 justify-center border rounded-xl shadow-lg p-6 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.30))] backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:ring-4 hover:ring-(--secondary)"
          style={{ borderColor: "var(--secondary)", borderWidth: 1 }}
        >
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/80 mb-2">
            <SiNextdotjs size={40} style={{ color: "#222", filter: "drop-shadow(0 2px 6px rgba(255,255,255,0.18))" }} />
          </span>
          <h3 className="text-2xl font-bold text-white">Next.js</h3>
          <p className="text-center text-gray-200">Розробка додатків на Next.js</p>
        </div>
        <div
          className="max-w-[250px] h-[250px] w-full flex flex-col items-center gap-4 justify-center border rounded-xl shadow-lg p-6 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.30))] backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:ring-4 hover:ring-(--secondary)"
          style={{ borderColor: "var(--secondary)", borderWidth: 1 }}
        >
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/80 mb-2">
            <FaNode size={40} style={{ color: "#25692f", filter: "drop-shadow(0 2px 6px rgba(60,135,58,0.18))" }} />
          </span>
          <h3 className="text-2xl font-bold text-white">Node.js</h3>
          <p className="text-center text-gray-200">Розробка серверних додатків на Node.js</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-12 gap-6">
        <h3 className="font-semibold text-2xl">Не знаєш, що обрати?</h3>
        <Button>Отримати консультацію</Button>
      </div>
    </Container>
  );
}
