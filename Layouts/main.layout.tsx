import Link from 'next/link';
import Head from 'next/head';

export function MainLayout({ children, title = 'NextApp' }) {
    return (
        <>
            <Head>
                <title>{title}| Next Course </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charSet="UTF-8" />
            </Head>
            <nav>
                <Link href='/main'><a>Main</a></Link>
                <Link href='/about'><a>About</a></Link>
                <Link href='/contacts'><a>Contact</a></Link>
                <Link href='/posts'><a>Posts</a></Link>
                <Link href='/dialog'><a>Dialog</a></Link>
                <Link href='/login'><a>Login</a></Link>
            </nav>

            <main>
                <>
                    {children}
                </>
            </main>

            <style jsx global >
                {
                    `
                    nav{
                        position:fixed;
                        height:70px;
                        top:0;
                        left:0;
                        right:0;
                        background:darkblue;  
                        display:flex;
                        justify-content:space-around;
                        align-items:center;                      
                    }

                    nav a{
                        color:white;
                        text-decoration:none;
                        font-size:22px;
                        transition:all .3s ease;
                    }

                    nav a:hover{
                        color:grey;
                    }

                    main{
                        margin-top:60px;
                        padding:1rem;
                    }
                    `
                }
            </style>
        </>
    )
}