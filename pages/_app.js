import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { store } from "../lib/store";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <Head>
        <title>Agenda Consulting Asia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ag_favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <header>
          <Navbar />
        </header>
        <main className="pt-[95px] overflow-hidden minHeight">
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() =>
              global.window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </main>
        <Footer />
      </Provider>
    </div>
  );
}

export default MyApp;
