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
                                fontFamily: "DM Mono",
                            }}
                        >
                            I'm Henry.
                            <br />
                            These days, I am interested in functional
                            programming.
                        </p>

                        <br />

                        <span
                            style={{ color: "#6a9955", fontFamily: "DM Mono" }}
                        >
                            /*
                            <br /> *
                            <br /> 😎 I can do these things ...
                            <br /> 🚀 Typescript
                            <br /> 🚀 Node.js
                            <br /> 🚀 SQL
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
                        <Prod link="https://github.com/o-henry">
                            https://github.com/o-henry
                        </Prod>
                        <br />
                        <br />
                        <Tag />
                        <br />
                        <Cmd>&gt; cd projects && ls</Cmd>
                        <br />
                        <span>
                            Auction Ohouse Hunger Devsisters Papaya Place
                            Blinker Box Block
                        </span>
                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open Auction/</Cmd>
                        <br />
                        <Prod link="https://youtu.be/tvFPEwrtKao">
                            Auction (React·TS·NestJS·TypeORM·Emotion)
                        </Prod>

                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open Ohouse/</Cmd>
                        <br />
                        <Prod link="https://youtu.be/L5u7KgX1P4o">
                            Ohouse (React·TS·Sass){" "}
                        </Prod>

                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open Hunger/</Cmd>
                        <br />
                        <Prod link="https://play.google.com/store/apps/details?id=com.hunger.ohenry">
                            Hunger (TS·TypeORM·Express·RN)
                        </Prod>

                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open Devsisters/</Cmd>
                        <br />
                        <Prod link="https://youtu.be/vV-hFzdlYyU">
                            Devsisters (TS·Sass·GraphQL·React){" "}
                        </Prod>

                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open Place/</Cmd>
                        <br />
                        <Prod link="https://youtu.be/LkqD32oWN20">
                            Place (Express·EXPO·MongoDB·React·Puppeteer)
                        </Prod>

                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open Blinker/</Cmd>
                        <br />
                        <Prod link="https://youtu.be/nv3lNBxKLmY">
                            Blinker (React·AWS·Html·Css)
                        </Prod>

                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open Box/</Cmd>
                        <br />
                        <Prod link="https://www.npmjs.com/package/visual-box">
                            Box (TS·React){" "}
                        </Prod>

                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open Box/</Cmd>
                        <br />
                        <Prod link="https://chrome.google.com/webstore/detail/hidetwitch/ihefbdnchlbbmhbecinobdelbijcchka">
                            Block (JS)
                        </Prod>

                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open Papaya/</Cmd>
                        <br />
                        <Prod link="https://youtu.be/s5gBXg1zrHY">
                            Papaya (TS·React·Mapbox·Sass·GraphQL·AWS)
                        </Prod>
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
                // fontFamily: "Anonymous Pro",
                fontFamily: "PT Mono",
                // fontFamily: "DM Mono",
            }}
        >
            ~/henry's/log
            <span
                style={{
                    color: "#6EF17D",
                    // fontFamily: "Anonymous Pro",
                    fontFamily: "PT Mono",
                    // fontFamily: "DM Mono",
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
                // fontFamily: "Anonymous Pro",
                fontFamily: "PT Mono",
                // fontFamily: "DM Mono",
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
                // fontFamily: "Anonymous Pro",
                fontFamily: "PT Mono",
                // fontFamily: "DM Mono",
            }}
        >
            {children}
        </a>
    );
}

function PTag() {
    return (
        <span
            style={{
                color: "#7BBED2",
                // fontFamily: "Anonymous Pro",
                fontFamily: "PT Mono",
                // fontFamily: "DM Mono",
            }}
        >
            ~/henry's/log/projects
            <span
                style={{
                    color: "#6EF17D",
                    // fontFamily: "Anonymous Pro",
                    fontFamily: "PT Mono",
                    // fontFamily: "DM Mono",
                }}
            >
                {" "}
                @master &gt;
            </span>
        </span>
    );
}

export default About;
