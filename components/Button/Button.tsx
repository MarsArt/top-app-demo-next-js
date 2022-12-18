import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';



export const Button = ({ apperance, children, className, ...props }: ButtonProps): JSX.Element => {

    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: apperance == 'primary',
                [styles.ghost]: apperance == 'ghost',
            })}
            {...props}
        >
            {children}
        </button>
    );
};