import styles from './Up.module.css';
import { useScrollY } from '../../hooks/useScrollY';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

export const Up = (): JSX.Element => {

    const constrols = useAnimation();

    const y = useScrollY();

    useEffect(() => {
        constrols.start({ opacity: y / document.body.scrollHeight });
    }, [y, constrols]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.div
            className={styles.up}
            animate={constrols}
            initial={{ opacity: 0 }}
        >
            <ButtonIcon apperance='primary' icon='up' onClick={scrollToTop} />
        </motion.div >
    );
};