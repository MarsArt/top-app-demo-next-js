import React from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';

export default function Home(): JSX.Element {
    return (
        <div>
            Hello with fonts
            <Htag tag='h1'>Текст</Htag>
            <Button apperance='primary' arrow='right'>Кнопка</Button>
            <Button apperance='ghost' arrow='down'>Кнопка</Button>
            <P size='l'>Большой</P>
            <P>Средний</P>
            <P size='s'>Маленький</P>
            <Tag size='s'>GHOST</Tag>
            <Tag size='m' color='red'>Red</Tag>
            <Tag size='s' color='green'>GREEN</Tag>
            <Tag color='primary'>PRIMARY</Tag>
            <Rating rating={4} />
        </div>
    );
}
