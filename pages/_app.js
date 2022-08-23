import { MDXProvider } from "@mdx-js/react";
import Layout from "../components/layout";
import "../styles/main.css";
import "../public/fonts/style.css";

const components = {
    code: (props) => <pre {...props} />,
    pre: (props) => <div {...props} />,
};

export default function Nextra({ Component, pageProps }) {
    return (
        <MDXProvider components={components}>
            <Layout pageTitle="Henry's log" description="Personal Blog">
                <Component {...pageProps} />
            </Layout>
        </MDXProvider>
    );
}
