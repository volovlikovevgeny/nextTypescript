import NextNprogress from 'nextjs-progressbar';
import '../styles/main.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNprogress
                color="red"
                startPosition={0.3}
                stopDelayMs={200}
                height="2"
            />
            <Component {...pageProps} />
        </>
    )

}

export default MyApp
