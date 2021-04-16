import Link from "next/link";
import { useEffect, useState } from "react";
import Moon from "../assets/moon.svg";
import Sun from "../assets/sun.svg";

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(undefined);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );

    setDarkTheme(initialColorValue === "dark");
  }, []);

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ flex: 9 }}>
          <Link href="/">
            <a>
              <h1 style={{ fontSize: "1.125rem" }}>Henry</h1>
            </a>
          </Link>
        </div>

        <div style={{ flexShrink: "0", width: "15px" }}></div>

        <Link href="/blog">
          <a>
            <h2 style={{ fontSize: "0.825rem" }}>Blog</h2>
          </a>
        </Link>

        <div style={{ flexShrink: "0", width: "15px" }}></div>

        <Link href="/about">
          <a>
            <h2 style={{ fontSize: "0.825rem" }}>About</h2>
          </a>
        </Link>

        <div style={{ flexShrink: "0", width: "15px" }}></div>

        {darkTheme ? (
          <label>
            <input
              type="checkbox"
              checked={darkTheme}
              onChange={(ev) => {
                setDarkTheme(ev.target.checked ? true : false);
              }}
            />

            <Moon
              style={{
                position: "relative",
                fontSize: "25px",
                top: "2.5px",
              }}
            />
          </label>
        ) : (
          <label>
            <input
              type="checkbox"
              checked={darkTheme}
              onChange={(ev) => {
                setDarkTheme(ev.target.checked ? true : false);
              }}
            />
            <Sun
              style={{
                position: "relative",
                fontSize: "25px",
                top: "3.465px",
              }}
            />
          </label>
        )}
      </div>
    </>
  );
}
