import React from 'react';
import { Htag } from '../components';

import styles from '../styles/Home.module.css';

export default function Home(): JSX.Element {
    return (
        <div>
            Hello with fonts
            <Htag tag='h1'>Текст</Htag>
        </div>
    );
}
