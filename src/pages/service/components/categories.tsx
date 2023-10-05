import { ChevronRight } from "@mui/icons-material";
import { ChangeEvent, Fragment, useState } from "react";
import { Button, Checkbox, Input } from "../../../components";
import { SERVICE_CATEGORIES } from "../../../constants";
import { useServiceContext } from "../../../hooks/use-service-context";
import { FormControlWrapper, ButtonsWrapper } from "../service.styled";

interface ServiceInfoFormProps {
  setCreateStep: (step: "categories" | "info") => void;
}

const ServiceCategories = ({ setCreateStep }: ServiceInfoFormProps) => {
  const [showDescriptionInput, setShowDescriptionInput] = useState(false);
  const [serviceCategories, setServiceCategories] = useState(SERVICE_CATEGORIES);
  const { setCategories } = useServiceContext();

  const handleCheck = (id: number, checked: boolean, isOther: boolean) => {
    if (isOther) setShowDescriptionInput(checked);

    setServiceCategories((oldCategories) => [
      ...oldCategories.map((category) =>
        category.id === id
          ? {
              ...category,
              ...(isOther && !checked ? { description: "" } : {}),
              checked,
            }
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
    setCategories(serviceCategories.filter(({ checked }) => checked));
    setCreateStep("info");
  };

  return (
    <>
      <FormControlWrapper hideGap>
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
              />
            ) : null}
          </Fragment>
        ))}
      </FormControlWrapper>
      <ButtonsWrapper>
        <Button
          variant="contained"
          sx={{ marginLeft: "auto" }}
          endIcon={<ChevronRight />}
          onClick={handleClickNext}
        >
          Próximo
        </Button>
      </ButtonsWrapper>
    </>
  );
};

export default ServiceCategories;
