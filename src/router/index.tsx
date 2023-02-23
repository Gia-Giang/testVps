import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import router from "./router";

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading</div>}>
        <Layout />
        <Routes>
          <Route>
            {router.map((route) => {
              return <Route path={route.path} element={<route.component />} />;
            })}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
