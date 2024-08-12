import styles from '../cssFiles/AddTodoInputs.module.css'

function AddTodo({handleNewItem, refName, refDate}) {
  const handleOnButtonClicked = () => {
    handleNewItem()
  }

  return <div class="row">
                  <div class="col-4"><input type="text" ref={refName} placeholder="Enter Todo here" className={`${styles['cool-input-box']}`}/></div>
                  <div class="col-4"><input type="date" ref={refDate} className={`${styles['cool-input-box']}`}/></div>
                  <div class="col-2"><button type="button" class={`btn btn-success ${styles['custom-button']}`} onClick={handleOnButtonClicked}>Add</button></div>
          </div>
}

export default AddTodo