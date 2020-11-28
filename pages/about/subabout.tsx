import { MainLayout } from '../../Layouts/main.layout';
import classes from '../../styles/about.module.css'
import Link from 'next/link';

export default function subabout() {
    return (
        <MainLayout>
            <h1 className={classes.header__inner}>SubAbout Page</h1>
            <Link href='/about'><button>Go to About section</button></Link>
            <Link href='/main'><button>Go to Home section</button></Link>
        </MainLayout>
    )
}