import { FC, Suspense } from "react";
import { AppRouter } from "./providers/AppRouter";
import "./styles/index.scss";

export const App: FC = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <AppRouter />
        </Suspense>
    );
};
