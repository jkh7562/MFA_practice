import React from 'react';
import { Suspense, lazy } from 'react';
import { createBrowserRouter } from "react-router-dom";

const Loading = <div>Loading....</div>;

const MainHome = lazy(() => import('../components/MainHome'));
const RemoteDomainApp = React.lazy(() => import("domain1/DomainApp"));

const root = createBrowserRouter([
    { path: "", element: <Suspense fallback={Loading}><MainHome/></Suspense> },
    { path: "domain1", element: <Suspense fallback={Loading}><RemoteDomainApp/></Suspense> },
]);

export default root;