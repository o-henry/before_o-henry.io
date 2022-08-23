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

            <div
                style={{
                    border: "1px solid whitesmoke",
                    backgroundColor: "whitesmoke",
                    padding: "2rem",
                    borderRadius: "5px",
                }}
            >
                <a
                    href="https://www.npmjs.com/package/visual-box"
                    style={{
                        fontFamily: "Poppins",
                        display: "flex",
                        color: "black",
                    }}
                    target="_blank"
                >
                    <Npm
                        style={{
                            fontSize: "20px",
                            position: "relative",
                            right: "10px",
                            // color: "var(--color-primary)",
                        }}
                    />
                    visual-box
                </a>
            </div>

            <div style={{ margin: "0.625rem" }}></div>

            <div
                style={{
                    border: "1px solid whitesmoke",
                    backgroundColor: "whitesmoke",
                    padding: "2rem",
                    borderRadius: "5px",
                }}
            >
                <a
                    href="https://chrome.google.com/webstore/detail/hidetwitch/ihefbdnchlbbmhbecinobdelbijcchka"
                    style={{
                        fontFamily: "Poppins",
                        display: "flex",
                        color: "black",
                    }}
                    target="_blank"
                >
                    <Twitch
                        style={{
                            fontSize: "20px",
                            position: "relative",
                            right: "10px",
                            // color: "var(--color-primary)",
                        }}
                    />
                    Hide Twitch Chat
                </a>
            </div>
        </div>
    );
}

export default About;
