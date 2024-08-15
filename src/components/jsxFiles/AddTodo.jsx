import { useContext } from 'react'
import styles from '../cssFiles/AddTodoInputs.module.css'
import { TodoItemsContext } from '../../store/todo-items-store'

function AddTodo({refName, refDate, refPriority}) {
  const contextObj = useContext(TodoItemsContext);
  const addNewItem = contextObj.addNewItem;

  return <div class="row">
                  <div class="col-3"><input type="text" ref={refName} placeholder="Enter Todo here" className={`${styles['cool-input-box']}`}/></div>
                  <div class="col-3"><input type="date" ref={refDate} className={`${styles['cool-input-box']}`}/></div>
                  <div className="col-3">
                    <select ref={refPriority} className={`${styles['cool-input-box']}`}>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <div class="col-3"><button type="button" class={`btn btn-success ${styles['custom-button']}`} onClick={addNewItem}>Add</button></div>
          </div>
}

export default AddTodo