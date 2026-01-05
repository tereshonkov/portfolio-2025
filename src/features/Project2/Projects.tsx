import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";

export default function Projects() {
  const projects = [
    {
      img: "/1.png",
      title: "WordPress Website",
      desc: "Сайт на WordPress для бізнесу",
      link: "https://semenchenko-vladyslav.com",
    },
    {
      img: "/2.png",
      title: "Next.js Website",
      desc: "Сучасний сайт на Next.js",
      link: "https://www.t-mebel.com.ua/",
    },
    {
      img: "/3.png",
      title: "Landing Page",
      desc: "Лендінг на Next.js",
      link: "https://bogdan-poject.vercel.app/",
    },
  ];

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-center gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative flex flex-col rounded-3xl overflow-hidden shadow-xl bg-linear-to-br from-(--bg-primary) to-(--bg-secondary) border border-(--primary) transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
            style={{ minHeight: 380 }}
          >
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <Button link={project.link}>
                  Переглянути проект
                </Button>
              </div>
            </div>
            <div className="flex flex-col flex-1 p-6 justify-between items-center text-center">
              <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-2 text-base min-h-12 flex items-center justify-center">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
