import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  HomePage,
  ServiceQueuePage,
  CreateServicePage,
  ViewServicePage,
  LoginPage,
  RegisterPage,
} from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/queue" element={<ServiceQueuePage />} />
        <Route path="/queue/service" element={<CreateServicePage />} />
        <Route path="/queue/service/:id" element={<ViewServicePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
