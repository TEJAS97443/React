import styles from '../cssFiles/TodoItem.module.css'
function TodoItem({todoName, todoDate, onDeleteButton}) {

  return (
    <div class="container">
      <div class={`row ${styles.customrow}`}>
        <div class="col-4">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger" onClick={onDeleteButton({todoName}, {todoDate})}>
            delete
          </button>
        </div>
      </div>
    </div>

  );
}

export default TodoItem;