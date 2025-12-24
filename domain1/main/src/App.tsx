import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import MainHome from "./components/MainHome";
import Loader from "./components/Loader";

const RemoteDomainApp = React.lazy(() => import("domain1/DomainApp"));

const App = () => {
  return (
    <div>
      <div>Header Area</div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/domain1/*" element={<RemoteDomainApp />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;