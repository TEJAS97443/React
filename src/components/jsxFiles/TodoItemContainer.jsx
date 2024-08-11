import TodoItem from "./TodoItem";


function TodoItemContainer({ todoItems, onDeleteButton }) {
  return <>
   {
    todoItems.map((item) => (
      <TodoItem todoDate={item.dueDate} todoName={item.name} onDeleteButton={onDeleteButton}></TodoItem>
    ))
   }
  </>
}

export default TodoItemContainer;