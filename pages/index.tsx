import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Button, Htag, P, Rating, Tag, Input, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu, firstCategory }: HomeProps): JSX.Element {

    const [raing, setRating] = useState<number>(4);


    return (
        <>            Hello with fonts
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
            <Rating rating={raing} isEditable setRating={setRating} />
            <Input placeholder='some text' />
            <Textarea placeholder='some text' />
        </>

    );
}



export default withLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });


    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}