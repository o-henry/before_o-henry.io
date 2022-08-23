import Link from "next/link";
import Metadata from "./metadata";

function Project({ project }) {
    const {
        link,
        module: { meta },
    } = project;

    return (
        <article>
            <Metadata meta={meta} />
            <Link href={`/project${link}`}>
                <a className="read-button">
                    <span
                        style={{
                            fontFamily: "Recoleta-bold",
                        }}
                    >
                        Read more
                    </span>
                </a>
            </Link>
        </article>
    );
}

export default Project;
