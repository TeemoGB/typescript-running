import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let name = "리액트";
  const style = {
    backgroundColor: "#ffc",
    color: "#555",
    fontSize: "24px",
    fontWeight: "bold",
    padding: "20px",
  };

  return (
    <div style={style}>
      <h1 className="title">Hello, {name === "리액트" ? "YES" : "NO"}!</h1>
      <p>반갑습니다.</p>
      {/* 주석 */}
      <br />
      <input />
    </div>
  );
}

export default App;
