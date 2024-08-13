import { useRef, useState } from "react"
import AddTodo from "./components/jsxFiles/AddTodo"
import AppName from "./components/jsxFiles/AppName"
import Component from "./components/jsxFiles/Component"
import TodoItemContainer from "./components/jsxFiles/TodoItemContainer"
import { TodoItemsContext } from "./store/todo-items-store"

function App() {
  const [todoItems, setTodoItems] = useState([])
  const refName = useRef(null);
  const refDate = useRef(null);

  const addNewItem = () => {
    const newItem = [...todoItems, {name: refName.current.value, dueDate: refDate.current.value}]
    setTodoItems(newItem)
    refName.current.value = "";
    refDate.current.value = "";
  };

  const deleteItem = (itemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItem)
  };

  return <>
  <TodoItemsContext.Provider value={{
    todoItems: todoItems,
    addNewItem: addNewItem,
    deleteItem: deleteItem 
  }}>
  <Component>
          <AppName />
          <AddTodo refName={refName} refDate={refDate}/>
          <TodoItemContainer></TodoItemContainer>
  </Component>
  </TodoItemsContext.Provider>
  </>
}

export default App
