import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";

function App() {
  return (
    <div className="bg-(--bg-primary) text-(--primary) min-h-screen max-w-screen overflow-hidden">
      <Header />
      <Hero />
      <Service />
    </div>
  );
}

export default App;
