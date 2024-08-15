import { useContext } from 'react';
import styles from '../cssFiles/TodoItem.module.css'
import { TodoItemsContext } from '../../store/todo-items-store';
function TodoItem({todoName, todoDate, todoPriority}) {
  const { deleteItem } = useContext(TodoItemsContext)

  return (
    <div class="container">
      <div class={`row ${styles.customrow}`}>
        <div class="col-3">{todoName}</div>
        <div class="col-3">{todoDate}</div>
        <div class="col-3">{todoPriority}</div>
        <div class="col-3">
          <button type="button" class="btn btn-danger" onClick={() => deleteItem(todoName)}>
            delete
          </button>
        </div>
      </div>
    </div>

  );
}

export default TodoItem;