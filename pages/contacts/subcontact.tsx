import { MainLayout } from '../../Layouts/main.layout';
import Link from 'next/link';

export default function subcontacts() {
    return (
        <MainLayout title={'SubContact Page'}>
            <h1>Subcontact Page</h1>
            <Link href='/contacts'><button>Go Prev</button></Link>
            <Link href='/main'><button>Go Home</button></Link>
        </MainLayout>
    )
}
