import Router from "next/router";
import { MainLayout } from "../../Layouts/main.layout";
import Link from 'next/link';

export default function contacts({ users }) {

    return (

        <MainLayout title={'Contacts Page'}>
            {
                users.map(user => (
                    <ul key={user.id}>
                        <Link href={`/contacts/${user.id}`}><a>Contacts</a></Link>
                    </ul>
                ))
            }
            <h1>Contacts Page</h1>
            <button onClick={() => Router.push('/main')}>Go Back Home</button>
            <button onClick={() => Router.push('/posts')}>Go to Post Section</button>
            <button onClick={() => Router.push('/contacts/subcontact')}>Go to SubContacts</button>
        </MainLayout>
    )
}

contacts.getInitialProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    return { users }
}