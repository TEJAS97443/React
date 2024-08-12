import { useRef, useState } from "react"
import AddTodo from "./components/jsxFiles/AddTodo"
import AppName from "./components/jsxFiles/AppName"
import Component from "./components/jsxFiles/Component"
import TodoItemContainer from "./components/jsxFiles/TodoItemContainer"

function App() {
  const [todoItems, setTodoItems] = useState([])
  const refName = useRef(null);
  const refDate = useRef(null);

  const onNewItemAddButton = () => {
    const newItem = [...todoItems, {name: refName.current.value, dueDate: refDate.current.value}]
    setTodoItems(newItem)
    refName.current.value = "";
    refDate.current.value = "";
  };

  const onDeleteButton = (itemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItem)
  };

  return <>
  <Component>
          <AppName />
          <AddTodo handleNewItem= {onNewItemAddButton} refName={refName} refDate={refDate}/>
          <TodoItemContainer todoItems={todoItems} onDeleteButton= {onDeleteButton}></TodoItemContainer>
  </Component>
  </>
}

export default App
