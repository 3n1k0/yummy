import styles from "./Hero.module.scss";
import Image from "next/image";
import { Search } from "..";
import Divider from "../divider/Divider";

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <Image
        src="https://static.llllllllllll.com/eniko/yummy/yummy-hero_original.jpg"
        alt="hero imxage"
        fill
        className={styles.heroImage}
      />
      <Search />
    </div>
  );
};

export default Hero;
