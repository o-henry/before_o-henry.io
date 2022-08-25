import React from "react";
import Npm from "../assets/npm.svg";
import Twitch from "../assets/twitch.svg";

function About() {
    return (
        <div style={{ margin: "4rem 4rem 0 4rem" }}>
            <h1>Hi</h1>

            <p
                style={{
                    fontFamily: "NotoSansKR-Thin, MalgunGothic",
                    fontSize: "11pt",
                    lineHeight: "22pt",
                    letterSpacing: ".8px",
                }}
            >
                안녕하세요 저는 개발자{" "}
                <a href="https://www.github.com/o-henry" target="_blank">
                    이찬행
                </a>{" "}
                입니다.
                <br />
            </p>

            <div style={{ margin: "3rem" }}></div>

            <Box>
                <a
                    href="https://www.npmjs.com/package/visual-box"
                    style={{
                        fontFamily: "Poppins",
                        display: "flex",
                        color: "black",
                    }}
                    target="_blank"
                >
                    BOX
                </a>
            </Box>

            <Box>
                <a
                    href="https://chrome.google.com/webstore/detail/hidetwitch/ihefbdnchlbbmhbecinobdelbijcchka"
                    style={{
                        fontFamily: "Poppins",
                        display: "flex",
                        color: "black",
                    }}
                    target="_blank"
                >
                    HIDE TWITCH CHAT
                </a>
            </Box>
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
