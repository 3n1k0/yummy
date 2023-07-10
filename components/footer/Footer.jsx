import styles from "./Footer.module.scss";


const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footerList}>
            <p>this is the footer</p>
            <p>it will have important footer information</p>
            </div>
        </div>
    );
};

export default Footer;
