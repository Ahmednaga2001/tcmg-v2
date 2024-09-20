import styles from "./page.module.css"; // Import the CSS module

const Select = ({ options,label }) => {
  return (
    <div>
      <label className={styles.hiddenLabel} htmlFor={label}>
        {label}
      </label>
      <select className={styles.select} name="" id={label}>
        <option value={label} disabled selected>
          {label}
        </option>
        {options.map((option) => {
          return <option key={option} value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
