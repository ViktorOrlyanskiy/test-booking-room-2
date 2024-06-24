import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from './routeConfig';

export const AppRouter: FC = () => {
    const renderWithWrapper = ({ path, element }: AppRoutesProps) => (
        <Route key={path} path={path} element={element}></Route>
    );

    return (
        <Suspense fallback={<div />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
};
