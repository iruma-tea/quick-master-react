import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App";
import MyTop from "./MyTop";
import MyHello from "./MyHello";
import MyArticle from "./MyArticle";
import MyQueryArticle from "./MyQueryArticle";
import MySearch from "./MySearch";
import NotFound from "./NotFound";

import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<MyTop />} />
      <Route path="hello" element={<MyHello />} />
      <Route path="article/:id" element={<MyArticle />} />
      <Route path="article" element={<MyQueryArticle />} />
      <Route path="search/*" element={<MySearch />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
