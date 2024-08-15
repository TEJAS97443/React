import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../../store/todo-items-store";


function TodoItemContainer() {
  const { todoItems } = useContext(TodoItemsContext)
  return <>
   {
    todoItems.map((item) => (
      <TodoItem todoDate={item.dueDate} todoName={item.name} todoPriority={item.priority}></TodoItem>
    ))
   }
  </>
}

export default TodoItemContainer;