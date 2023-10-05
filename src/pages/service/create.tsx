import { Typography } from "@mui/material";
import { useState } from "react";
import { Layout } from "../../components";

import { ServiceContextProvider } from "../../contexts/service";

import ServiceCategories from "./components/categories";
import ServiceInfoForm from "./components/info-form";

const CreateServicePage = () => {
  const [createStep, setCreateStep] = useState<"categories" | "info">("categories");

  return (
    <ServiceContextProvider>
      <Layout>
        <Typography fontWeight={700} fontSize={32}>
          Solicite seu
        </Typography>
        <Typography fontWeight={700} fontSize={32} color="primary">
          chamado
        </Typography>

        {createStep === "categories" && <ServiceCategories setCreateStep={setCreateStep} />}
        {createStep === "info" && <ServiceInfoForm setCreateStep={setCreateStep} />}
      </Layout>
    </ServiceContextProvider>
  );
};

export default CreateServicePage;
