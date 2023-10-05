import { ChevronRight } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { ChangeEvent, Fragment, useState } from "react";
import { Button, Checkbox, Input, Layout } from "../../components";
import { SERVICE_CATEGORIES } from "../../constants";
import { FormControlWrapper } from "./service.styled";

const CreateServicePage = () => {
  const [showDescriptionInput, setShowDescriptionInput] = useState(false);
  const [serviceCategories, setServiceCategories] = useState(SERVICE_CATEGORIES);

  const handleCheck = (id: number, checked: boolean, isOther: boolean) => {
    if (isOther) setShowDescriptionInput(checked);

    setServiceCategories((oldCategories) => [
      ...oldCategories.map((category) =>
        category.id === id
          ? { ...category, checked, description: isOther && !checked ? "" : category.description }
          : category
      ),
    ]);
  };

  const handleInputDescription = (event: ChangeEvent<HTMLInputElement>) => {
    const otherCategory = serviceCategories.find((category) => category.label === "Outro");

    if (otherCategory)
      setServiceCategories((oldCategories) => [
        ...oldCategories.map((category) =>
          category.id === otherCategory.id
            ? { ...category, description: event.target.value }
            : category
        ),
      ]);
  };

  const handleClickNext = () => {
    //TODO: send categories data to context / change context step typec
    console.log(serviceCategories);
  };

  return (
    <Layout sx={{ margin: "32px auto" }}>
      <Typography fontWeight={700} fontSize={32}>
        Solicite seu
      </Typography>
      <Typography fontWeight={700} fontSize={32} color="primary">
        chamado
      </Typography>
      <FormControlWrapper>
        {[...serviceCategories].map(({ id, label, checked, ...rest }) => (
          <Fragment key={id}>
            <Checkbox
              label={label}
              checked={checked}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleCheck(id, event.target.checked, label === "Outro")
              }
            />
            {showDescriptionInput && label === "Outro" ? (
              <Input
                onInput={handleInputDescription}
                placeholder="Descreva"
                name="description"
                defaultValue={rest?.description || ""}
                required
              />
            ) : null}
          </Fragment>
        ))}
      </FormControlWrapper>

      <Button
        variant="contained"
        sx={{ float: "right" }}
        endIcon={<ChevronRight />}
        onClick={handleClickNext}
      >
        Próximo
      </Button>
    </Layout>
  );
};

export default CreateServicePage;
