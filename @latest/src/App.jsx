import "./App.css";
import { Banner } from "./components/Banner";
import { EventForm } from "./components/EventForm";
import { Theme } from "./components/Theme";
function App() {
  const themes = [
    {
      id: 1,
      name: "frontend",
    },
    {
      id: 2,
      name: "backend",
    },
    {
      id: 3,
      name: "devops",
    },
    {
      id: 4,
      name: "inteligencia artificial",
    },
    {
      id: 5,
      name: "data science",
    },
    {
      id: 6,
      name: "cloud",
    },
  ];
  return (
    <main>
      <header>
        <img src="/logo.png" />
      </header>
      <Banner />
      <EventForm />
      <section>
        <Theme theme={themes[0]}></Theme>
      </section>
      <section>
        <Theme theme={themes[1]}></Theme>
      </section>
      <section>
        <Theme theme={themes[2]}></Theme>
      </section>
      <section>
        <Theme theme={themes[3]}></Theme>
      </section>
      <section>
        <Theme theme={themes[4]}></Theme>
      </section>
      <section>
        <Theme theme={themes[5]}></Theme>
      </section>
    </main>
  );
}

export default App;
