import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { ErrorPage } from "./error-page";
import { Main } from "./main";
import { AboutPage } from "./about-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/:locale?" element={<Main />} errorElement={<ErrorPage />} />
      <Route
        path="/:locale?/oblast/:trailparkSlug"
        element={<Main />}
        errorElement={<ErrorPage />}
      />
      <Route path="/:locale?/about" element={<AboutPage />} errorElement={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} errorElement={<ErrorPage />} />
    </>
  )
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
