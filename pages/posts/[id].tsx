import { useState, useEffect } from 'react';
import { MainLayout } from '../../Layouts/main.layout';
import { useRouter } from 'next/router'
import { NextPageContext } from 'next';
import { MyPost } from '../../interfaces/post'


interface PostPageProps {
    post: MyPost
}

export default function post({ post: serverPost }: PostPageProps) {
    const [post, setPost] = useState(serverPost)

    const router = useRouter()

    useEffect(() => {
        async function load() {
            const res = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const data = await res.json()

            setPost(data)
        }

        if (!serverPost) {
            load()
        }
    }, [])

    if (!post) {
        return (
            <MainLayout>
                <p>Loading...</p>
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <h1>
                Post:{post.id}
            </h1>
            <h2>Title:{post.title}</h2>
            <p>Text: {post.body}</p>
            <button onClick={() => router.push('/posts')}>Go back</button>
        </MainLayout>
    )
}

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

post.getInitialProps = async ({ query, req }: PostNextPageContext) => {

    if (!req) {
        return { post: null }
    }

    const res = await fetch(`http://localhost:4200/posts/${query.id}`)
    const post: MyPost = await res.json()

    return { post }
}


// export async function getServerSideProps({ query, req }) {
//     // if (!req) {
//     //     return { post: null }
//     // }

//     const res = await fetch(`http://localhost:4200/posts/${query.id}`)
//     const post = await res.json()

//     return { props: { post } }
// }
