
import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.contact}>
      <div className={styles.details}>
        <span className={styles.icon}>👤</span>
        <span>{name}</span>
      </div>
      <div className={styles.details}>
        <span className={styles.icon}>📞</span>
        <span>{number}</span>
      </div>
      <button className={styles.deleteButton} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact; 

