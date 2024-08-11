import styles from '../cssFiles/Component.module.css'

function Component(props) {
  return <div className={styles.container}>{props.children}</div>
}

export default Component;