import { Typography } from "@mui/material";
import { useState, ChangeEvent } from "react";
import { SERVICE_CATEGORIES } from "../../constants";
import { Input, Layout, Select, OptionType, Button, Map } from "../../components";
import { FormControlWrapper } from "./service.styled";
import { useNavigate } from "react-router-dom";

const ServiceQueuePage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const categoriesOptions = SERVICE_CATEGORIES.map(({ label, id }) => ({ label, value: id }));

  const handleOpenLastService = () => navigate("/queue/service/1");

  const handleSearchLocation = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSelectCategory = (category?: OptionType) => {
    console.log(category);
  };

  return (
    <Layout>
      <Typography fontWeight={700} fontSize={32} align="center">
        Acompanhe o que <br />
        está acontecendo
      </Typography>
      <FormControlWrapper centralize>
        <Input
          onInput={handleSearchLocation}
          placeholder="Pesquise a região..."
          name="region"
          value={search}
        />
        <Select
          placeholder="Selecione a categoria"
          options={categoriesOptions}
          onSelectOption={handleSelectCategory}
        />
        <Button variant="contained" onClick={handleOpenLastService}>
          Ver última ocorrência
        </Button>
      </FormControlWrapper>

      <Map />
    </Layout>
  );
};

export default ServiceQueuePage;
