import { ButtonIconProps, icons } from './ButtonIcon.props';
import styles from './ButtonIcon.module.css';
import cn from 'classnames';



export const ButtonIcon = ({ apperance, icon, className, ...props }: ButtonIconProps): JSX.Element => {

    const IconComp = icons[icon];

    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: apperance == 'primary',
                [styles.whte]: apperance == 'white',
            })}
            {...props}
        >
            <IconComp />
        </button>
    );
};