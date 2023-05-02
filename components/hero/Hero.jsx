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
        <h1 className={styles.heading}>Yummy</h1>
        <Search />
      </div>
    </>
  );
};

export default Hero;
