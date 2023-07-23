import styles from './Up.module.css';
import UpIcon from './Up.svg';
import { useScrollY } from '../../hooks/useScrollY';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

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
        })
    };

    return (
        <motion.button
            className={styles.up}
            onClick={scrollToTop}
            animate={constrols}
            initial={{opacity:0}}
        >
    <UpIcon />
        </motion.button >
    );
};