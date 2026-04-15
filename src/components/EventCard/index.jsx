import "./event-card.styles.css";
export function EventCard({ event }) {
  return (
    <div className="event-card">
      <img src={event.cover} alt={event.title} />
      <div className="body">
        <p className="tag">{event.theme.name}</p>
        <p>{event.date.toLocaleDateString("pt-BR")}</p>
        <h4 className="title">{event.title}</h4>
      </div>
    </div>
  );
}
