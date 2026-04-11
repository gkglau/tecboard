import "./button.styles.css";
export function Button(props) {
  return <button {...props}>{props.children}</button>;
}
