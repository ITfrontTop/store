import { IoMdSearch } from 'react-icons/io';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.search}>
      <IoMdSearch color="#040404" size="20px" />
    </div>
  );
};

export default Search;
