import "./App.css";
import Header from "./features/Header/Header";
import Hero from "./features/Hero/Hero";
import Service from "./features/Service/Service";
import Projects from "./features/Projects/Projects";
import About from "./features/About/About";
import Footer from "./features/Footer/Footer";

function App() {
  return (
    <div className="bg-(--bg-primary) text-(--primary) min-h-screen max-w-screen overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Service />
        <Projects />
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
