import React from "react";
import Npm from "../assets/npm.svg";
import Twitch from "../assets/twitch.svg";

function About() {
  return (
    <>
      <h1>Hello</h1>

      <p
        style={{
          fontFamily: "NotoSansKR-Thin, MalgunGothic",
          fontSize: "11pt",
          lineHeight: "22pt",
          letterSpacing: ".8px",
        }}
      >
        안녕하세요 저는 프론트엔드 개발자 이찬행 입니다.
        <br />
        이것 저것 개발하며 지내고 있습니다.
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
    </>
  );
}

export default About;
