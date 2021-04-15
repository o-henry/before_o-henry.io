import Metadata from "./metadata";
export default function PortfolioPost({ children, meta }) {
  return (
    <>
      <Metadata meta={meta} post />
      <article>{children}</article>
    </>
  );
}
