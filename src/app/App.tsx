import { FC, Suspense } from "react";
import { AppRouter } from "./providers/AppRouter";
import "./styles/index.scss";

export const App: FC = () => {
    return (
        <div className="container">
            <Suspense fallback={<p>Loading...</p>}>
                <AppRouter />
            </Suspense>
        </div>
    );
};
