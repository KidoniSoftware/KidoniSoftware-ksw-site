import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ComponentPreviews, useInitial} from "./dev";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import ErrorPage from "./error_page";

const router = createBrowserRouter([
    {
        path: "/",
        element:
            <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
                <ChakraProvider>
                    <App/>
                </ChakraProvider>
            </DevSupport>,
        errorElement: <ErrorPage/>,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
