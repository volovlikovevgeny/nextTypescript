import { useState, useEffect } from 'react';
import { MainLayout } from "../../Layouts/main.layout";


export default function subpost({ data: serverPost }) {
    const [data, setData] = useState(serverPost)

    useEffect(() => {
        async function load() {
            const res = await fetch('http://localhost:4200/subposts')
            const data = await res.json()

            setData(data)
        }

        if (!serverPost) {
            load()
        }
    }, [])


    if (!data) {
        return (
            <MainLayout>
                <p>Loading...</p>
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <h1>{data.title}</h1>
            <p>{data.text}</p>
        </MainLayout>
    )
}

subpost.getInitialProps = async ({ req }) => {

    if (!req) {
        return { data: null }
    }

    const res = await fetch('http://localhost:4200/subposts')
    const data = await res.json()

    return {
        data
    }
}