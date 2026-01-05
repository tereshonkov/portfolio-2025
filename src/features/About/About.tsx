import Content from "./components/Content";
import Image from "./components/Image";
import Container from "../../components/Container/Container";

export default function About() {
  return (
    <Container>
      <div id="about" className="py-8 px-3 flex flex-col items-center gap-9 xl:flex-row xl:py-[70px] xl:px-[50px] xl:justify-center">
          <Image />
          <Content />
      </div>
    </Container>
  );
}
