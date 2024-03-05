import style from './CustomButton.module.scss';

export const CustomButton = ({outlined = false, children}) => {
    return (
        <button className={`${style.customButton} ${outlined ? style.outlined : ''}`}>{children}</button>
    )
}