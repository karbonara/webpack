import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routConfig } from "../../../../shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        {
          Object.values(routConfig).map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={(
                <div className="page-wrapper">
                  {route.element}
                </div>
              )}
            />
          ))
        }
      </Routes>
    </Suspense>
  )
};

export default AppRouter;