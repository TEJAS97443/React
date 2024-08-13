import { useContext } from 'react';
import styles from '../cssFiles/TodoItem.module.css'
import { TodoItemsContext } from '../../store/todo-items-store';
function TodoItem({todoName, todoDate}) {
  const { deleteItem } = useContext(TodoItemsContext)

  return (
    <div class="container">
      <div class={`row ${styles.customrow}`}>
        <div class="col-4">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger" onClick={() => deleteItem(todoName)}>
            delete
          </button>
        </div>
      </div>
    </div>

  );
}

export default TodoItem;