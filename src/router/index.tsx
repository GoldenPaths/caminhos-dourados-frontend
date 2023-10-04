import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage, LoginPage, RegisterPage, ServicePage, ServiceQueuePage } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/queue" element={<ServiceQueuePage />}>
          <Route path="/queue/service" element={<ServicePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
