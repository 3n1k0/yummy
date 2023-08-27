import { Button } from "..";
import Divider from "../divider/Divider";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <form className={styles.search} action="/" method="post">
      <input
        autoComplete="off"
        aria-label="Enter your search term"
        placeholder="search"
        className={styles.input}
        type="text"
        id="search"
        name="search"
      />
      <Divider />
      <Button type="submit" text="Search" />
    </form>
  );
};

export default Search;
