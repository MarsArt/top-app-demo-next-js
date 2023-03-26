import { TextArea } from './TextArea.props';
import styles from './TextArea.module.css';
import cn from 'classnames';

export const Textarea = ({ className, ...props }: TextArea): JSX.Element => {

    return (
        <textarea className={cn(className, styles.input)}  {...props} />
    );
};