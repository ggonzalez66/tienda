import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

const basename =
  import.meta.env.MODE === "github" && import.meta.env.VITE_REPO_NAME
    ? `/${import.meta.env.VITE_REPO_NAME.replace(/^\/+|\/+$/g, "")}`
    : "/";

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ],
  { basename }
);
