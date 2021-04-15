import Layout from "../components/layout";
import "nextra-theme-blog/style.css";
import "../styles/main.css";

export default function Nextra({ Component, pageProps }) {
  return (
    <Layout pageTitle="Henry's log" description="Personal Blog">
      <Component {...pageProps} />
    </Layout>
  );
}
