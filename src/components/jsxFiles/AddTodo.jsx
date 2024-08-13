import { useContext } from 'react'
import styles from '../cssFiles/AddTodoInputs.module.css'
import { TodoItemsContext } from '../../store/todo-items-store'

function AddTodo({refName, refDate}) {
  const contextObj = useContext(TodoItemsContext);
  const addNewItem = contextObj.addNewItem;

  return <div class="row">
                  <div class="col-4"><input type="text" ref={refName} placeholder="Enter Todo here" className={`${styles['cool-input-box']}`}/></div>
                  <div class="col-4"><input type="date" ref={refDate} className={`${styles['cool-input-box']}`}/></div>
                  <div class="col-2"><button type="button" class={`btn btn-success ${styles['custom-button']}`} onClick={addNewItem}>Add</button></div>
          </div>
}

export default AddTodo