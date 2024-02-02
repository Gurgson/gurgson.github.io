import { ReactNode } from "react";
import HomePage from "../Pages/HomePage";
import NotFound from "../Pages/NotFound";

type TRoute = {
    path: string,
    element: ReactNode;
}
export const routes : TRoute[] = [
    {
        path: "/",
        element: <HomePage/>  
    },
    {
        path: "*",
        element: <NotFound/>
    }
    ];