import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import About from "./components/About";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";

import React, { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "/", element: <Body /> },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/grocery",
    element: (
      <Suspense fallback={<h1>Loading Grocery Page...</h1>}>
        <Grocery />
      </Suspense>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
