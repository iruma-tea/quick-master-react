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

const name = "WINGSプロジェクト";
const tag = (
  <div className="main">
    <h1>ようこそ、{name}へ！</h1>
    <img src="http://www.wings.msn.to/image/wings.jpg" />
    こんにちは、世界！
  </div>
);

// const name = 'WINGSプロジェクト';
// const tag = React.createElement(
//   'div',
//   { className: 'main' },
//   React.createElement(
//     'h1',
//     null,
//     `ようこそ、${name}へ`
//   ),
//   React.createElement(
//     'img',
//     { src: 'http://www.wings.msn.to/image/wings.jpg' }
//   ),
//   'こんにちは、世界！'
// );

root.render(<div>{tag}</div>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
