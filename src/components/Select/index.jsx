import "./select.styles.css";
export function Select({ items, ...rest }) {
  return (
    <select {...rest} className="select" defaultValue="">
      <option value="" disabled>
        Selecione uma opção
      </option>
      {items.map(function (item) {
        return (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
}
