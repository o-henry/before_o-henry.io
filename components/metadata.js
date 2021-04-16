export default function Metadata({ meta, project, blog }) {
  return (
    <>
      <h1 className={project || blog ? "great-title" : null}>{meta.title}</h1>
      <div className="details">
        {project || blog ? null : <p>{meta.description}</p>}
        <span className={project || blog ? "hide" : "date"}>{meta.date}</span>
        <span className={project || blog ? "hide" : "date"}>
          {meta.readTime + " min read"}
        </span>
      </div>
      <style jsx>
        {`
          .hide {
            display: none;
          }
          h1 {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--color-header);
            font-family: "Poppins";
          }
          .great-title {
            font-size: 3.125rem;
            text-align: center;
            color: var(--color-header);
          }
          .details span {
            color: #bdbdbd;
            margin-right: 1rem;
          }
          .details {
            font-weight: 300;
            line-height: 25px;
            font-size: 16px;
            margin-bottom: 8px;
            font-family: "SF Pro Display", "애플 SD 산돌고딕 Neo",
              "Apple SD Gothic Neo", "나눔바른고딕", NanumBarunGothic,
              "나눔고딕", NanumGothic, "맑은 고딕", "Malgun Gothic",
              -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
              sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
              "Segoe UI Symbol";
          }
          .date {
            font-size: 15px;
          }
        `}
      </style>
    </>
  );
}
