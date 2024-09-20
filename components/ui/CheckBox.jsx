import styles from "./page.module.css";

const CheckBox = ({ label }) => {
  return (
    <div className={styles.checkBox}>
      <label htmlFor={label}>
        {label}
      </label>
      <input type="checkbox" id={label} />
    </div>
  );
};

export default CheckBox;
