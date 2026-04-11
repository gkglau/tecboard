import "./event-form.styles.css";
import { FormField } from "../FormField";
import { FormTitle } from "../FormTitle";
import { Input } from "../Input";
import { Label } from "../Label";

export function EventForm() {
  return (
    <form className="form-event">
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
      </div>
    </form>
  );
}
