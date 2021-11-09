import Navigation from "./navigation";
import Head from 'next/head';

function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Necmi's Homepage</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navigation />
            <main>
                {children}
            </main>
            <footer>
                Designed by Necm
            </footer>
        </div>
    )
}
export default Layout;