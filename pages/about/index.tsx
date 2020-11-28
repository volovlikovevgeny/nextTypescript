import Router from 'next/router';
import { MainLayout } from '../../Layouts/main.layout';

export default function aboutSection() {
    const linkClickHandler = () => {
        Router.push('/main')
    }

    return (
        <MainLayout title={'About Page'}>
            <h1>About Page</h1>
            <button onClick={linkClickHandler}>Go Back To Home</button>
            <button onClick={() => Router.push('/contacts')}>Go To Posts</button>
            <button onClick={() => Router.push('about/subabout')}>Go To SubAbout</button>
        </MainLayout>
    )
}