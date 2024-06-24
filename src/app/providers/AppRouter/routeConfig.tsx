import СalculationPage from 'components/pages/СalculationPage';
import UserDataPage from 'components/pages/UserDataPage';
import ConfirmationPage from 'components/pages/ConfirmationPage';
import SuccessPage from 'components/pages/SuccessPage';
import NotFoundPage from 'components/pages/NotFoundPage';
import type { RouteProps } from 'react-router-dom';
import {
    AppRoutes,
    getRouteCalculation,
    getRouteConfirmation,
    getRouteSuccess,
    getRouteUserData,
} from 'shared/consts/routes';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.СALCULATION]: {
        path: getRouteCalculation(),
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
