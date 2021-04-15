export default function Metadata({ meta, project, blog }) {
  return (
    <>
      <h1 className={project || blog ? "great-title" : null}>{meta.title}</h1>
      <div className="details">
        {project || blog ? null : <p>{meta.description}</p>}
        <span>{meta.date}</span>
        <span>{meta.readTime + " min read"}</span>
      </div>
      <style jsx>
        {`
          h1 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #9ca3af;
            font-family: "Poppins";
          }
          .great-title {
            font-size: 2rem;
          }
          .details span {
            color: #bdbdbd;
            margin-right: 1rem;
          }
          .details {
            margin-bottom: 1rem;
          }
        `}
      </style>
    </>
  );
}
