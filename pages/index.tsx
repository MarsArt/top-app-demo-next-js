import React from 'react';
import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
    return (
        <div>
            Hello with fonts
            <Htag tag='h1'>Текст</Htag>
            <Button apperance='primary' arrow='right'>Кнопка</Button>
            <Button apperance='ghost' arrow='down'>Кнопка</Button>
        </div>
    );
}
