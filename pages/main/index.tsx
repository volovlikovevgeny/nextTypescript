import Link from 'next/link';
import { MainLayout } from '../../Layouts/main.layout';

export default function mainpage() {
    return (
        <MainLayout title={'HomePage'} >
            <h1>MainPage</h1>
            <p><Link href='/about'><a>About</a></Link></p>
            <p><Link href='/contacts'><a>Contacts</a></Link></p>
            <p><Link href='/posts'><a>Posts</a></Link></p>
            <p><Link href='/dialog'><a>dialog</a></Link></p>
            <p><Link href='/login'><a>Login</a></Link></p>
            <p>Hello Jenya Go hard Play hard</p>
        </MainLayout>
    )
}