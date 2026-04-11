import "./button.styles.css";
export function Button(props) {
  return (
    <button {...props} className="button">
      {props.children}
    </button>
  );
}
