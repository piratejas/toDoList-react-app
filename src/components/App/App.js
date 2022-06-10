import './App.css';
import {useState, React} from "react";
import Button from "./Button";
import Input from "./Input";
import List from "./List";
import ListItem from "./ListItem";

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
let initialList= [];
const [list, setList] = useState(initialList);

//adds text to list when button is pressed 
function addToList(){
  const newList = list.concat({key:(list.length+1), text: text});
  setList(newList);
  console.log(newList);
  console.log(initialList);
}

//pulls text from input box 
function handleChange(event){
  setText(event.target.value);
}

//delete item from list
function deleteItem(key) {
  if (list.length === 1){
  const emptyList = [];
  setList(emptyList);
  } else {
  const newList = [...list.slice(0, key-1), ...list.slice(key)];
    setList(newList)
}
}

const addButtonProps = {
  className: "button",
  onClick: addToList,
  text: "Add To List"
}

  return (
    <div className="App">
      <h1>My TO DO List</h1>
      <Input handleChange ={handleChange}></Input>
      <Button {...addButtonProps}></Button>
      <List>
        {//creates a lis item for all items in the list 
        list.map(function (item){
        return <ListItem text = {item.text} key = {item.key}><Button className= "button" onClick= {() => {deleteItem(item.key)}} text= "Delete Item"></Button></ListItem>
        })}
      </List>
    </div>
  );
}

export default App;
