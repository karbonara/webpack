import MainPage from "../../../pages/Home/Home";
import NoFaundPage from "../../../pages/NotFoundPage";
import GameDetails from "../../../pages/GameDetails";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = 'main',
  GAMEDETAILS = 'gameDetails',
  NoFaundPage = 'NoFaundPage',
}

export const RouthPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.GAMEDETAILS]: `/games/:id`,
  [AppRoutes.NoFaundPage]: '*',
};

export const routConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouthPath.main,
    element: <MainPage />,
  },
  [AppRoutes.GAMEDETAILS]: {
    path: RouthPath.gameDetails,
    element: <GameDetails />,
  },
  [AppRoutes.NoFaundPage]: {
    path: '*',
    element: <NoFaundPage />
  }
};