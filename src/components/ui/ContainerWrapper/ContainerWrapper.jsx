import styles from './ContainerWrapper.module.scss';

export const ContainerWrapper = ({children}) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}