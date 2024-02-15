import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { store } from "../lib/store";
import { Provider } from "react-redux";
import { useEffect, useState } from 'react';
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <Provider store={store}>
        <header>
          <Navbar />
        </header>
        <main className="pt-[95px] overflow-hidden minHeight">
        {isClient && ( 
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
         )} 
        </main>
        <Footer />
      </Provider>
    </div>
  );
}

export default MyApp;
