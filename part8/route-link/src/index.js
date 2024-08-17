import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import MyTop from "./MyTop";
import MyHello from "./MyHello";
import MyArticle from "./MyArticle";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<MyTop />} />
        <Route path="hello" element={<MyHello />} />
        <Route path="article" element={<MyArticle />} />
      </Route>
    </>
  )
);

root.render(<RouterProvider router={router}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
