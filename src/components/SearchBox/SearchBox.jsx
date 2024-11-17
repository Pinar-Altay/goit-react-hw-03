
import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.searchBox}>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          className={styles.input}
        />
      </label>
    </div>
  );
};

SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default SearchBox; 
