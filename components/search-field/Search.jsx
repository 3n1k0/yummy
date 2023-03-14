import { Button } from "..";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <form className={styles.search} action="/" method="post">
      <input
        aria-label="Enter your search term"
        placeholder="search"
        className={styles.input}
        type="text"
        id="search"
        name="search"
      />
      <Button type="submit" text="Search" />
    </form>
  );
};

export default Search;
