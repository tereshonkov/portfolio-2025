import Container from "../../components/Container/Container";
import { FaWordpress, FaReact, FaNode } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Service() {
  return (
    <Container>
      <div className="flex justify-center xl:justify-between items-center mt-8 gap-3 flex-wrap">
        <div className="max-w-[250px] h-[250px] w-full flex flex-col items-center gap-3 justify-center border border-(--secondary) p-4 rounded-lg hover:scale-105 transition-transform bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.3))] backdrop-blur-md">
          <FaWordpress size={50} />
          <h3 className="text-2xl font-bold">WordPress</h3>
          <p className="text-center">Розробка сайтів на WordPress</p>
        </div>
        <div className="max-w-[250px] h-[250px] w-full flex flex-col items-center gap-3 justify-center border border-(--secondary) p-4 rounded-lg hover:scale-105 transition-transform bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.3))] backdrop-blur-md">
          <FaReact size={50} />
          <h3 className="text-2xl font-bold">React</h3>
          <p className="text-center">Розробка додатків на React</p>
        </div>
        <div className="max-w-[250px] h-[250px] w-full flex flex-col items-center gap-3 justify-center border border-(--secondary) p-4 rounded-lg hover:scale-105 transition-transform bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.3))] backdrop-blur-md">
          <SiNextdotjs size={50} />
          <h3 className="text-2xl font-bold">Next.js</h3>
          <p className="text-center">Розробка додатків на Next.js</p>
        </div>
        <div className="max-w-[250px] h-[250px] w-full flex flex-col items-center gap-3 justify-center border border-(--secondary) p-4 rounded-lg hover:scale-105 transition-transform bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.3))] backdrop-blur-md">
          <FaNode size={50} />
          <h3 className="text-2xl font-bold">Node.js</h3>
          <p className="text-center">Розробка серверних додатків на Node.js</p>
        </div>
      </div>
    </Container>
  );
}
