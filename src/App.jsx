import { useEffect, useRef, useState } from "react"
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
    const postData = {
      name: refName.current.value,
      dueDate: refDate.current.value
    }
    refName.current.value = "";
    refDate.current.value = "";

    fetch('http://localhost:3000/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  useEffect(() => {
    fetch('http://localhost:3000/api/items')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data)
      setTodoItems(data)
    })
  }, []);

  const deleteItem = (itemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItem)
    const encodedName = encodeURIComponent(itemName);
    const url = `http://localhost:3000/api/items?name=${encodedName}`;
    fetch(url, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        console.log('Item deleted successfully');
        setTodoItems(prevItems => prevItems.filter(item => item.name !== name));
      } else {
        console.error('Failed to delete item');
      }
    })
    .catch(error => console.error('Error:', error));
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
