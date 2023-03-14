import styles from "./Hero.module.scss";
import Image from "next/image";
import { Search } from "..";

const Hero = () => {
  return (
    <>
      <div className={styles.heroWrapper}>
        <h1 className={styles.heading}>Yummy Recipes</h1>
        <Image src="/hero.jpg" fill />
        <Search />
      </div>
    </>
  );
};

export default Hero;
