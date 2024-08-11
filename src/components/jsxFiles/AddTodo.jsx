import { useState } from "react"
import styles from '../cssFiles/AddTodoInputs.module.css'
function AddTodo({handleNewItem}) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState()

  const handleNameChange = (event) => {
    setTodoName(event.target.value)
  }

  const handleDateChange = (event) => {
    setDueDate(event.target.value)
  }

  const handleOnButtonClicked = (event) => {
    handleNewItem(todoName, dueDate)
    setTodoName("")
    setDueDate("")
  }

  return <div class="row">
                  <div class="col-4"><input type="text" value={todoName} placeholder="Enter Todo here" className={`${styles['cool-input-box']}`} onChange={handleNameChange}/></div>
                  <div class="col-4"><input type="date" value={dueDate} className={`${styles['cool-input-box']}`} onChange={handleDateChange}/></div>
                  <div class="col-2"><button type="button" class={`btn btn-success ${styles['custom-button']}`} onClick={handleOnButtonClicked}>Add</button></div>
          </div>
}

export default AddTodo