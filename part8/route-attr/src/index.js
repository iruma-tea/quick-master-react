import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  redirect,
} from "react-router-dom";
import App from "./App";
import MyTop from "./MyTop";
import MyHello from "./MyHello";
import MyArticle from "./MyArticle";
import MyError from "./MyError";
import MyBook from "./MyBook";
import MyBookPost from "./MyBookPost";
import NotFound from "./NotFound";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<MyTop />} />
      <Route path="hello" element={<MyHello />} />
      <Route
        path="article/:id"
        element={<MyArticle />}
        errorElement={<MyError />}
      />
      <Route
        path="book/:isbn"
        element={<MyBook />}
        loader={({ params }) => {
          return fetch(`./data/${params.isbn}.json`).then((res) => res.json());
        }}
      />
      <Route
        path="post"
        element={<MyBookPost />}
        action={async ({ request }) => {
          const errs = new Map();
          const form = await request.formData();
          const title = form.get("title");
          const price = Number(form.get("price"));
          if (typeof title !== "string" || title.length > 20) {
            errs.set("title", "書名は20文字以内で入力してください。");
          }
          if (Number.isNaN(price) || price < 0) {
            errs.set("price", "価格は正数で入力してください。");
          }
          if (errs.size > 0) {
            return errs;
          }

          console.log(title, price);
          return redirect("/");
        }}
      />
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
