import Link from "next/link";
import Metadata from "./metadata";

export default function Portfolio({ portfolio }) {
  const {
    link,
    module: { meta },
  } = portfolio;

  return (
    <article>
      <Metadata meta={meta} />
      <Link href={`/portfolio${link}`}>
        <a>Read more &rarr;</a>
      </Link>
    </article>
  );
}
