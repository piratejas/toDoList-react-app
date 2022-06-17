import "./App.css";
import { useState, React } from "react";
import Button from "./Button";
import Input from "./Input";
import List from "./List";
import ListItem from "./ListItem";
import logo from "../../components/images/soc-logo.png";

function App() {
  //need input
  //need button
  //need list
  //need item
  //need varaiable for setting text
  //need function to get text from input - stores in toDoList as object with unique key and text as text
  //need function to display text when clicked
  //input needs id to be used to get text
  //need array to store all the items to display

  //variable to get contents of input box
  const [text, setText] = useState("");
  //array of items
  let initialList = [];
  const [list, setList] = useState(initialList);

  //adds text to list when button is pressed
  function addToList() {
    const newList = list.concat({ key_id: list.length + 1, text: text });
    setList(newList);
    setText("");
  }

  //pulls text from input box
  function handleChange(event) {
    setText(event.target.value);
  }

  //delete item from list
  function deleteItem(key) {
    if (list.length === 1) {
      const emptyList = [];
      setList(emptyList);
    } else {
      const newList = [...list.slice(0, key - 1), ...list.slice(key)];
      setList(newList);
    }
  }
  //props for add items button
  const addButtonProps = {
    className: "button",
    onClick: addToList,
    text: "Add To List",
  };

  //props for input
  const inputProps = {
    className: "input",
    handleChange: handleChange,
    value: text,
  };

  return (
    <div className="App">
      <img alt="School of Code" src={logo} width="100" />
      <h1>My TO DO List</h1>
      <Input {...inputProps}></Input>
      <Button {...addButtonProps}></Button>
      <List>
        {
          //creates a list item for all items in the list
          list.map(function (item) {
            return (
              <ListItem className="listItem" text={item.text} key={item.key_id}>
                <Button
                  className="button"
                  onClick={() => {
                    deleteItem(item.key_id);
                  }}
                  text="Delete Item"
                ></Button>
              </ListItem>
            );
          })
        }
      </List>
    </div>
  );
}

export default App;
