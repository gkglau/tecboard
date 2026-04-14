import "./App.css";
import { Banner } from "./components/Banner";
import { EventCard } from "./components/EventCard";
import { EventForm } from "./components/EventForm";
import { Theme } from "./components/Theme";
import { useState } from "react";

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

  const [events, setEvent] = useState([
    {
      cover: "http://localhost:5173/public/01_cover.png",
      theme: themes[0],
      date: new Date(),
      title: "title 1",
    },
  ]);

  function addEvent(event) {
    setEvent([...events, event]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" />
      </header>
      <Banner />
      <EventForm themes={themes} onSubmit={addEvent} />
      <section className="container">
        {themes.map(function (item) {
          return (
            <section key={item.id}>
              <Theme theme={item} />
              <div className="events">
                {events.map(function (item, index) {
                  return <EventCard event={item} key={index} />;
                })}
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}

export default App;
