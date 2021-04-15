import Header from "./components/header";
import Head from "next/head";
import "nextra-theme-blog/style.css";
import "../styles/main.css";

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Henry's log</title>
      </Head>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer
          style={{
            fontSize: "0.625rem",
            fontWeight: "200",
          }}
        >
          2021 © Henry.
        </footer>
      </div>
    </>
  );
}
