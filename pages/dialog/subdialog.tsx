import { Router } from 'next/router';
import { MainLayout } from '../../Layouts/main.layout';

export default function subDialog() {
    const clickHandler = () => {
        Router.push('/main')
    }


    return (
        <MainLayout>
            <h1>subDialog Page</h1>
            <button onClick={() => clickHandler}>Home </button>
        </MainLayout>
    )
}
