import style from './SectionHeading.module.scss';

export const SectionHeading = ({subTitle, title, description}) => {
    return (
        <div className={style.sectionHeading}>
            <h4 className={style.subTitle}>{subTitle}</h4>
            <h2 className={style.title}>{title}</h2>
            <p className={style.description}>{description}</p>
        </div>
    );
}