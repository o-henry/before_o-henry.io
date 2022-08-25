import Metadata from "./metadata";

function Post({ children, meta }) {
    return (
        <div>
            <Metadata meta={meta} project blog />
            <article>{children}</article>
        </div>
    );
}

export default Post;
