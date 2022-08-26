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
                            <br /> 😅 A little bit of
                            <br /> 🚀 Java · Spring Boot
                            <br /> 🚀 Kotlin
                            <br /> *
                            <br /> * */
                        </span>

                        <br />
                        <br />
                        <br />
                        <br />
                        <span
                            style={{
                                color: "#7A92F5",
                                fontFamily: "Anonymous Pro",
                            }}
                        >
                            ~/henry's/log
                            <span
                                style={{
                                    color: "#F5CF80",
                                    fontFamily: "Anonymous Pro",
                                }}
                            >
                                {" "}
                                @master &gt;
                            </span>
                        </span>
                        <br />
                        <span
                            style={{
                                color: "white",
                                fontFamily: "Anonymous Pro",
                            }}
                        >
                            &gt; git{" "}
                        </span>

                        <br />

                        <a
                            href="https://github.com/o-henry"
                            target="_blank"
                            style={{
                                fontSize: "13.5px",
                                color: "#7A92F5",
                                fontFamily: "Anonymous Pro",
                            }}
                        >
                            welcome to my github
                        </a>
                        <br />
                        <br />
                    </code>
                </pre>
            </div>
        </div>
    );
}

const Box = ({ children }) => {
    return (
        <div
            style={{
                border: "1px solid whitesmoke",
                backgroundColor: "whitesmoke",
                padding: "2rem",
                borderRadius: "5px",
                margin: "0.625rem 0 0.625rem 0",
            }}
        >
            {children}
        </div>
    );
};

export default About;
