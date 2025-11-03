import "./App.css";
import Header from "./features/Header/Header";
import Hero from "./features/Hero/Hero";
import Service from "./features/Service/Service";

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
