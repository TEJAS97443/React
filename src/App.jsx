import { useState } from "react"
import AddTodo from "./components/jsxFiles/AddTodo"
import AppName from "./components/jsxFiles/AppName"
import Component from "./components/jsxFiles/Component"
import TodoItemContainer from "./components/jsxFiles/TodoItemContainer"

function App() {
  const [todoItems, setTodoItems] = useState([])

  const onNewItemAddButton = (itemName, itemDueDate) => {
    const newItem = [...todoItems, {name: itemName, dueDate: itemDueDate}]
    setTodoItems(newItem)
    console.log(`new item added: ${newItem}`);
  };

  const onDeleteButton = (itemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItem)
  };

  return <>
  <Component>
          <AppName />
          <AddTodo handleNewItem= {onNewItemAddButton}/>
          <TodoItemContainer todoItems={todoItems} onDeleteButton= {onDeleteButton}></TodoItemContainer>
  </Component>
  </>
}

export default App
