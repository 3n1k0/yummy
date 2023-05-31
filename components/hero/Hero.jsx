import styles from "./Hero.module.scss";
import Image from "next/image";
import { Search } from "..";

const Hero = () => {
  return (
    <>
      <div className={styles.heroWrapper}>
        <Image
          src="/hero.jpg"
          alt="hero image"
          fill
          className={styles.heroImage}
        />
        <Search />
      </div>
    </>
  );
};

export default Hero;
