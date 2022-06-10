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
let toDoList = [{key:1, text:"hello"}];

function onClick(){
  console.log("hello");
  toDoList.push({key:(toDoList.length+1), text: text});
  console.log(toDoList);
  //call it here 
  toDoList.map(function (item){
    return <ListItem text = {item.text} key = {item.key}></ListItem>
  })
}

function handleChange(event){
  setText(event.target.value);
  console.log(text);
}

  return (
    <div className="App">
      <h1>My TO DO List</h1>
      <Input handleChange ={handleChange}></Input>
      <Button onClick ={onClick}></Button>
      <List>
        {toDoList.map(function (item){
          return <ListItem text = {item.text} key = {item.key}></ListItem>
        })}

      </List>
    </div>
  );
}

export default App;
