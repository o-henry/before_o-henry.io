import Project from "../components/project";
import { getAllProject } from "../lib/getall.post";

function Index() {
    const projects = getAllProject();

    return (
        <div style={{ marginTop: "4rem", marginBottom: "8rem" }}>
            <header
                style={{
                    fontFamily: "Rajdhani",
                    fontWeight: "600",
                    margin: "0 4rem 0 4rem",
                }}
            >
                SOME THINGS I'VE BUILT
            </header>

            <section>
                {projects.map((project) => (
                    <Project key={project.link} project={project} />
                ))}
            </section>
        </div>
    );
}

export default Index;
