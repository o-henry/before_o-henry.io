import React from "react";

function About() {
    return (
        <div style={{ margin: "4rem 4rem 0 4rem" }}>
            <div className="blog-post">
                <pre className="language-typescript">
                    <code className="language-typescript">
                        <h1
                            style={{
                                color: "white",
                            }}
                        >
                            Hi
                        </h1>
                        <p
                            style={{
                                color: "white",
                                fontFamily: "Anonymous Pro",
                            }}
                        >
                            I'm Henry.
                            <br />
                            These days, I am interested in functional
                            programming.
                        </p>

                        <br />

                        <span style={{ color: "#6a9955" }}>
                            /*
                            <br /> *
                            <br /> 😎 I can do these things ...
                            <br /> 🚀 Typescript
                            <br /> 🚀 Node.js
                            <br /> 🚀 Sql
                            <br /> 🚀 React
                            <br /> 🚀 React-Native
                            <br /> 🚀 CSS
                            <br /> *
                            <br /> *
                            <br /> 😅 A little bit of ...
                            <br /> 🚀 Java · Spring Boot
                            <br /> 🚀 Kotlin
                            <br /> *
                            <br /> * */
                        </span>

                        <br />
                        <br />
                        <br />
                        <br />
                        <Tag />
                        <br />
                        <Cmd>&gt; git remote -v</Cmd>
                        <br />
                        <Prod>https://github.com/o-henry</Prod>
                        <br />
                        <br />
                    </code>
                </pre>
            </div>
        </div>
    );
}

function Tag() {
    return (
        <span
            style={{
                color: "#7BBED2",
                fontFamily: "Anonymous Pro",
            }}
        >
            ~/henry's/log
            <span
                style={{
                    color: "#6EF17D",
                    fontFamily: "Anonymous Pro",
                }}
            >
                {" "}
                @master &gt;
            </span>
        </span>
    );
}

function Cmd({ children }) {
    return (
        <span
            style={{
                color: "white",
                fontFamily: "Anonymous Pro",
            }}
        >
            {children}
        </span>
    );
}

function Prod({ children, link }) {
    return (
        <a
            href={link}
            target="_blank"
            style={{
                fontSize: "13.5px",
                color: "#F5CF80",
                fontFamily: "Anonymous Pro",
            }}
        >
            {children}
        </a>
    );
}

export default About;
