import {ContainerWrapper} from "../../ui/ContainerWrapper/ContainerWrapper.jsx";
import {Logo} from "../../ui/Logo/Logo.jsx";
import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
            <ContainerWrapper>
                <div className={styles.headerContainer}>
                    <Logo/>
                    <nav className={styles.nav}>
                        <ul className={styles.navMenu}>
                            <li className={styles.navMenuItem}><a href="#">About</a></li>
                            <li className={styles.navMenuItem}><a href="#">Car</a></li>
                            <li className={styles.navMenuItem}><a href="#">Become Partner</a></li>
                            <li className={styles.navMenuItem}><a href="#">Terms & Conditions</a></li>
                            <li className={styles.navMenuItem}><a href="#">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </ContainerWrapper>
        </header>
    );
}