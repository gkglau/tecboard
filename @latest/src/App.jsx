import "./App.css";
import { Banner } from "./components/Banner";
import { EventCard } from "./components/EventCard";
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
  const events = [
    {
      cover:
        "https://i.pinimg.com/736x/f3/b1/77/f3b177f3e7978e29bdf1a9657ab5ad10.jpg",
      theme: themes[0],
      date: new Date(),
      title: "title",
    },
    {
      cover:
        "https://i.pinimg.com/736x/f3/b1/77/f3b177f3e7978e29bdf1a9657ab5ad10.jpg",
      theme: themes[0],
      date: new Date(),
      title: "title",
    },
  ];

  return (
    <main>
      <header>
        <img src="/logo.png" />
      </header>
      <Banner />
      <EventForm themes={themes} />
      {themes.map(function (item) {
        return (
          <section key={item.id}>
            <Theme theme={item} />
            <EventCard event={events[0]}></EventCard>
          </section>
        );
      })}
    </main>
  );
}

export default App;
