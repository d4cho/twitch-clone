import Layout from '../components/layouts/Layout';
import { AppContextProvider } from '../context/AppContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <AppContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AppContextProvider>
    );
}

export default MyApp;
