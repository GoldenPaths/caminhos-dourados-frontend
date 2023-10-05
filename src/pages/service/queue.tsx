import { Typography } from "@mui/material";
import { useState, ChangeEvent } from "react";
import { SERVICE_CATEGORIES } from "../../constants";
import { Input, Layout, Select, OptionType } from "../../components";
import { FormControlWrapper } from "./service.styled";

const ServiceQueuePage = () => {
  const [search, setSearch] = useState("");
  const categoriesOptions = SERVICE_CATEGORIES.map(({ label, id }) => ({ label, value: id }));

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
      <FormControlWrapper>
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
      </FormControlWrapper>

      {/* TODO: add map */}
    </Layout>
  );
};

export default ServiceQueuePage;
