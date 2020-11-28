import { MainLayout } from '../Layouts/main.layout';
import Router from 'next/router';
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
    const clickBackHandler = () => {
        Router.push('/main')
    }

    return (
        <MainLayout>
            <span className={classes.error}>404</span><h1>Page Don`t Exist</h1>
            <button onClick={clickBackHandler}>Back To Home Page</button>
        </MainLayout>
    )
}