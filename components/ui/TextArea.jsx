import styles from "./page.module.css"
const TextArea = ({label , placeholder}) => {
  return (
    <div className={styles.inp}>
    <label htmlFor={label} className={styles.hiddenLabel}>{label}</label>
    <textarea className="textarea" id={label} placeholder={placeholder}></textarea>
  </div>
  )
}

export default TextArea
