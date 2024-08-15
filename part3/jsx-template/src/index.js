import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// const name = "山田";
// root.render(<p>こんにちは、{name}さん！</p>);
// root.render(
//   <div>
//     <p>名前は、{"$" + name + "$"}です。</p>
//     <p>現在の日時は、{new Date().toLocaleString()}です。</p>
//     <p>2の3乗は、{2 ** 3}です。</p>
//   </div>
// );

// const str = "こんにちは、世界!<br />さようなら、私";
// root.render(<p dangerouslySetInnerHTML={{ __html: str }}></p>);

// const url = "https://wings.msn.to/";
// root.render(<a href={url}>サポートサイト</a>);

// const style = { color: "Red", backgroundColor: "Yellow" };
// root.render(<p style={style}>WINGSプロジェクト</p>);

const attrs = {
  src: "https://wings.msn.to/image/wings.jpg",
  alt: "",
  title: "WINGSプロジェクト",
};

root.render(<img {...attrs} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
