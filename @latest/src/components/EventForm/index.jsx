import "./event-form.styles.css";
import { FormField } from "../FormField";
import { FormTitle } from "../FormTitle";
import { Input } from "../Input";
import { Label } from "../Label";

export function EventForm() {
  return (
    <form className="form-event">
      <FormTitle>Preencha para criar um evento</FormTitle>
      <FormField>
        <Label htmlFor="none">Qual o nome do evento</Label>
        <Input type="text" id="none" placeholder="Summer dev hits" />
      </FormField>
    </form>
  );
}
