import "./select.styles.css";
export function Select(props) {
  return <select {...props}>{props.children}</select>;
}
