import { useEffect, useState } from 'react';
import { MainLayout } from "../../Layouts/main.layout";
import { useRouter } from 'next/router';


export default function idContact({ users: serverUser }) {
    const [users, setUser] = useState(serverUser)

    const router = useRouter()

    useEffect(() => {
        async function load() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${router.query.id}`)
            const users = await res.json()

            setUser(users)
        }

        if (!serverUser) {
            load()
        }
    }, [])


    if (!users) {
        return (
            <MainLayout>
                <p>Loading...</p>
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <h1> Contact:{users.id}</h1>
            <h2>Name: {users.name}</h2>
            <h2>Username:{users.username}</h2>
            <h2>Email: {users.email}</h2>
            <hr />
            <button onClick={() => router.push('/contacts')}>Go back</button>
        </MainLayout>
    )
}


idContact.getInitialProps = async ({ query, req }) => {
    if (!req) {
        return {
            users: null
        }
    }

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${query.id}`)
    const users = await res.json()
    return { users }
}