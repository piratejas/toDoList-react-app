function Input(props) {
  return (
    <input
      type="text"
      value={props.value}
      onChange={props.handleChange}
      className={props.className}
    ></input>
  );
}

export default Input;
