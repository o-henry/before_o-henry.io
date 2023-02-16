import React from "react";

function About() {
    return (
        <div style={{ margin: "4rem 4rem 0 4rem" }}>
            <div className="blog-post">
                <pre
                    className="language-typescript"
                    style={{ backgroundColor: "#282c35" }}
                >
                    <code className="language-typescript">
                        <h1
                            style={{
                                color: "white",
                            }}
                        >
                            Hi
                        </h1>
                        <span
                            style={{
                                color: "white",
                                fontFamily: "DM Mono",
                            }}
                        >
                            I'm Henry.
                        </span>
                        <br />
                        <br />
                        <br />
                        <Tag />
                        <br />
                        <Cmd>&gt; I can do these things ... </Cmd>
                        <br />
                        <span fontFamily="Anonymous Pro">
                            kotlin · typescript · java <br />
                            spring boot · node.js · sql <br />
                            react · css
                        </span>
                        <br />
                        <br />
                        <Tag />
                        <br />
                        <Cmd>&gt; A little bit of ... </Cmd>
                        <br />
                        <span>python</span>
                        <br />
                        <br />
                        <Tag />
                        <br />
                        <Cmd>&gt; git remote -v</Cmd>
                        <br />
                        <Prod link="https://github.com/o-henry">
                            https://github.com/o-henry
                        </Prod>
                        {/* <br />
                        <br />
                        <Tag /> */}
                        {/* <br /> */}
                        {/* <Cmd>&gt; cd projects && ls</Cmd>
                        <br />
                        <span>
                            Auction Ohouse Hunger Devsisters Papaya Place
                            Blinker Box Block
                        </span> */}
                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open auction/</Cmd>
                        <br />
                        <Prod link="https://youtu.be/tvFPEwrtKao">
                            auction (react·ts·nest·typeorm·emotion)
                        </Prod>
                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open ohouse/</Cmd>
                        <br />
                        <Prod link="https://youtu.be/L5u7KgX1P4o">
                            ohouse (react·ts·sass){" "}
                        </Prod>
                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open hunger/</Cmd>
                        <br />
                        <Prod link="https://play.google.com/store/apps/details?id=com.hunger.ohenry">
                            hunger (ts·typeorm·express·rn)
                        </Prod>
                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open devsisters/</Cmd>
                        <br />
                        <Prod link="https://youtu.be/vV-hFzdlYyU">
                            devsisters (ts·sass·graphql·react){" "}
                        </Prod>
                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open place/</Cmd>
                        <br />
                        <Prod link="https://youtu.be/LkqD32oWN20">
                            place (express·expo·mongo·react·puppeteer)
                        </Prod>
                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open blinker/</Cmd>
                        <br />
                        <Prod link="https://youtu.be/nv3lNBxKLmY">
                            blinker (react·aws·html·css)
                        </Prod>
                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open box/</Cmd>
                        <br />
                        <Prod link="https://www.npmjs.com/package/visual-box">
                            box (ts·react){" "}
                        </Prod>
                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open block/</Cmd>
                        <br />
                        <Prod link="https://chrome.google.com/webstore/detail/hidetwitch/ihefbdnchlbbmhbecinobdelbijcchka">
                            block (js)
                        </Prod>
                        <br />
                        <br />
                        <PTag />
                        <br />
                        <Cmd>&gt; open papaya/</Cmd>
                        <br />
                        <Prod link="https://youtu.be/s5gBXg1zrHY">
                            papaya (ts·react·mapbox·sass·graphql·aws)
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
                fontFamily: "Anonymous Pro",
                // fontFamily: "PT Mono",
                opacity: ".6",
                // fontFamily: "DM Mono",
            }}
        >
            ~/henry's/log
            <span
                style={{
                    color: "#6EF17D",
                    fontFamily: "Anonymous Pro",
                    // fontFamily: "PT Mono",
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
                fontFamily: "Anonymous Pro",
                // fontFamily: "PT Mono",
                opacity: ".55555",
                // fontFamily: "DM Mono",
            }}
        >
            {children}
        </span>
    );
}

function Prod({ children, link }) {
    return (
        <span>
            <a
                href={link}
                target="_blank"
                style={{
                    fontSize: "13.5px",
                    color: "#F5CF80",
                    fontFamily: "Anonymous Pro",
                    // fontFamily: "Dank Mono",
                    // fontFamily: "DM Mono",
                }}
            >
                {children}
            </a>
        </span>
    );
}

function PTag() {
    return (
        <span
            style={{
                color: "#7BBED2",
                fontFamily: "Anonymous Pro",
                // fontFamily: "PT Mono",
                opacity: ".55555",
                // fontFamily: "DM Mono",
            }}
        >
            ~/henry's/log/projects
            <span
                style={{
                    color: "#6EF17D",
                    fontFamily: "Anonymous Pro",
                    // fontFamily: "PT Mono",
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
