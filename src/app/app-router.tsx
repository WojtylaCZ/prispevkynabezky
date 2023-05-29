import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { ErrorPage } from "./error-page";
import { Main } from "./main";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/:locale?" element={<Main />} errorElement={<ErrorPage />} />
      <Route
        path="/:locale?/oblast/:trailparkSlug"
        element={<Main />}
        errorElement={<ErrorPage />}
      />
      <Route path="*" element={<ErrorPage />} errorElement={<ErrorPage />} />
    </>
  )
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
