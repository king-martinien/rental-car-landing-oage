import styles from './FooterLink.module.scss';

export const FooterLink = ({link, children}) => {
    return (
        <li className={styles.footerLinkItem}><a className={styles.footerLink} href={link}>{children}</a></li>
    )
};