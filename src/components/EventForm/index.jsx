import "./event-form.styles.css";
import { FormField } from "../FormField";
import { FormTitle } from "../FormTitle";
import { Input } from "../Input";
import { Label } from "../Label";
import { Select } from "../Select";
import { Button } from "../Button";

export function EventForm({ themes, onSubmit }) {
  function handleSubmit(formData) {
    const event = {
      cover: "http://localhost:5173/public/01_cover.png",
      theme: themes.find(function (item) {
        return item.id == formData.get("theme");
      }),
      date: new Date(formData.get("eventDate")),
      title: formData.get("eventName"),
    };
    onSubmit(event);
  }
  return (
    <form className="form-event" action={handleSubmit}>
      <FormTitle>Preencha para criar um evento</FormTitle>
      <div className="form-fields">
        <FormField>
          <Label htmlFor="eventName">Qual o nome do evento</Label>
          <Input
            type="text"
            id="eventName"
            placeholder="Summer dev hits"
            name="eventName"
          />
        </FormField>
        <FormField>
          <Label htmlFor="eventDate">Data do evento</Label>
          <Input type="date" id="eventDate" />
        </FormField>
        <FormField>
          <Label htmlFor="theme">Tema do evento</Label>
          <Select id="theme" name="theme" items={themes}></Select>
        </FormField>
        <div className="actions">
          <Button>Criar Evento</Button>
        </div>
      </div>
    </form>
  );
}
