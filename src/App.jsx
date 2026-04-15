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
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAG57MrhEcxHmzpnrtAOUgjOyiQRY-uRDOlw&s",
      theme: themes[0],
      date: new Date(),
      title: "Frontend Skills",
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
        {themes.map(function (theme) {
          if (
            !events.some(function (event) {
              return event.theme.id == theme.id;
            })
          ) {
            return null;
          }
          return (
            <section key={theme.id}>
              <Theme theme={theme} />
              <div className="events">
                {events
                  .filter(function (event) {
                    return event.theme.id == theme.id;
                  })
                  .map(function (event, index) {
                    return <EventCard event={event} key={index} />;
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
