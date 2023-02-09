import СalculationPage from 'pages/СalculationPage';
import UserDataPage from 'pages/UserDataPage';
import ConfirmationPage from 'pages/ConfirmationPage';
import SuccessPage from 'pages/SuccessPage';
import NotFoundPage from 'pages/NotFoundPage';
import type { RouteProps } from 'react-router-dom';
import {
    AppRoutes,
    getRouteСalculation,
    getRouteConfirmation,
    getRouteSuccess,
    getRouteUserData,
} from 'shared/consts/routes';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.СALCULATION]: {
        path: getRouteСalculation(),
        element: <СalculationPage />,
    },
    [AppRoutes.USER_DATA]: {
        path: getRouteUserData(),
        element: <UserDataPage />,
    },
    [AppRoutes.CONFIMATION]: {
        path: getRouteConfirmation(),
        element: <ConfirmationPage />,
    },
    [AppRoutes.SUCCESS]: {
        path: getRouteSuccess(),
        element: <SuccessPage />,
    },

    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
        authOnly: false,
    },
};
