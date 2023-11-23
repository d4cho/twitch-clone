import Layout from "../components/layouts/Layout";
import { AppContextProvider } from "../context/AppContext";
import "../styles/globals.css";
import BioStorybookWidget from "bio-storybook-widget";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <BioStorybookWidget projectSource={"twitch"} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp;
