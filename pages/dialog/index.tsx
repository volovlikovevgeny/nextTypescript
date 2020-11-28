import { MainLayout } from '../../Layouts/main.layout';
import Router from 'next/router';
import Link from 'next/link'

export default function Dialog({ data }) {

    console.log(data);


    return (
        <MainLayout title={'Dialog'}>
            <h1>Dialog Page</h1>

            {
                data.map((user) => (
                    <ul key={user.id}>
                        <Link href={`/dialog/[id]`} as={`/dialog/${user.id}`}><a>Dialogs</a></Link>
                    </ul>
                ))
            }
            <button onClick={() => Router.push('/main')}>
                Go Back Home
            </button>
        </MainLayout>
    )
}

Dialog.getInitialProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/`)
    const data = await res.json()

    return {
        data
    }
}

