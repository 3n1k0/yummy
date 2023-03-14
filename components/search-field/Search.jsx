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
      <button className={styles.submit} type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
