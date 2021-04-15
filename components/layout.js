import Head from "next/head";
import Header from "./header";

function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <main>
        <Header />
        <div className="content">{children}</div>
      </main>

      <footer
        style={{
          fontSize: "0.625rem",
          fontWeight: "200",
          marginTop: "19rem",
        }}
      >
        2021 © Henry.
      </footer>
    </>
  );
}
export default Layout;
