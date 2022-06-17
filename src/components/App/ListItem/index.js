import "./ListItem.css";

function ListItem(props) {
  return (
    <li className={props.className} key={props.key_id}>
      {props.text}
      {props.children}
    </li>
  );
}

export default ListItem;
