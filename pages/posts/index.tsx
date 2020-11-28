import { useState, useEffect } from 'react';
import Router from "next/router";
import { MainLayout } from "../../Layouts/main.layout";
import Link from 'next/link';
import { MyPost } from '../../interfaces/post'
import { NextPageContext } from 'next';

interface PostPageProps {
    posts: MyPost[]
}

export default function Posts({ posts: serverPost }: PostPageProps) {
    const [posts, setPost] = useState(serverPost)

    useEffect(() => {
        async function load() {
            const res = await fetch(`http://localhost:4200/posts/`)
            const data = await res.json()

            setPost(data)
        }

        if (!serverPost) {
            load()
        }
    }, [])

    if (!posts) {
        return (
            <MainLayout>
                <p>Loading...</p>
            </MainLayout>
        )
    }


    const postLinkHandler = () => {
        Router.push('/main')
    }

    return (
        <MainLayout>
            <h1>Posts Section</h1>

            {
                posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/posts/[id]`} as={`/posts/${post.id}`}><a>{post.title}</a></Link>
                    </li>
                ))
            }

            <button onClick={postLinkHandler}>Go back to home</button>
            <button onClick={() => Router.push('/dialog')}>Go to Dialog Section</button>
            <button onClick={() => Router.push('/posts/subpost')}>Go to subPost</button>
        </MainLayout >
    )
}

Posts.getInitialProps = async ({ req, query }: NextPageContext) => {

    if (!req) {
        return { posts: null }
    }

    const res = await fetch(`http://localhost:4200/posts`)
    const posts: MyPost[] = await res.json()

    return {
        posts
    }
}