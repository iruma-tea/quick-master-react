import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MyTop from "./MyTop";
import MyHello from "./MyHello";
import MyArticle from "./MyArticle";
import NotFound from "./NotFound";
// import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<MyTop />} />
      <Route path="hello" element={<MyHello />} />
      <Route path="article" element={<MyArticle />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
