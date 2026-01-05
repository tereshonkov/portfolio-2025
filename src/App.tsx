import "./App.css";
import Header from "./features/Header/Header";
import Hero from "./features/Hero/Hero";
// import Service from "./features/Service/Service";
import Service from "./features/Service2/Service";
import Projects from "./features/Projects/Projects";
import About from "./features/About/About";
import Footer from "./features/Footer/Footer";
import Contacts from "./features/Contacts/Contacts";
import { useState } from "react";
import Spiner from "./components/Spiner/Spiner";

function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="bg-(--bg-primary) text-(--primary) min-h-screen max-w-screen overflow-hidden">
      {!loaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-(--bg-primary) z-50">
          <Spiner />
        </div>
      )}
      <Header />
      <main>
        <Hero onLoad={() => setLoaded(true)} />
        <Service />
        <Projects />
        <About />
        <Contacts />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
