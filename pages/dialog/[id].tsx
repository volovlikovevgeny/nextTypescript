import Link from 'next/link';
import { MainLayout } from "../../Layouts/main.layout";

export default function IdDialogPage({ data }) {
    console.log(data);
    return (
        <MainLayout>
            {
                <div>
                    <h1>Username:{data.username}</h1>
                    <p>Phone: {data.phone}</p>
                    <p>Email: {data.email}</p>
                </div>
            }

            <Link href='/dialog'><button>Go back</button></Link>
        </MainLayout>
    )
}

IdDialogPage.getInitialProps = async (ctx) => {
    console.log(ctx.query.id);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${ctx.query.id}`)
    const data = await res.json()

    return {
        data
    }
}