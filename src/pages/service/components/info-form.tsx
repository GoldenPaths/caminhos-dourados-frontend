import { ChevronLeft, InsertComment, Update, Collections, LocationOn } from "@mui/icons-material";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../../components";
import { FileContentType, GeolocationType } from "../../../contexts/service";
import { getFileAsBase64 } from "../../../utils";
import { useServiceContext } from "../../../hooks/use-service-context";
import { FormControlWrapper, ButtonsWrapper } from "../service.styled";

interface ServiceInfoFormProps {
  setCreateStep: (step: "categories" | "info") => void;
}
const ServiceInfoForm = ({ setCreateStep }: ServiceInfoFormProps) => {
  const [comment, setComment] = useState("");
  const [datetime, setDatetime] = useState("");
  const [fileInput, setFileInput] = useState("");
  const [fileContent, setFileContent] = useState<FileContentType | null>(null);
  const [geolocation, setGeolocation] = useState<GeolocationType | null>(null);

  const { handleSubmitService } = useServiceContext();
  const navigate = useNavigate();

  const handleInput = (event: ChangeEvent<HTMLInputElement>, setValue: (value: string) => void) =>
    setValue(event.target.value);

  const handleInputFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileInput(event.target.value);
    const base64Url = await getFileAsBase64(file);
    setFileContent({
      fileName: file?.name || "",
      url: base64Url ? String(base64Url) : "",
    });
  };

  const handleSelectLocation = (event: MouseEvent<HTMLInputElement>) => {
    console.log(event);
    setGeolocation({ lat: "", long: "" });
  };

  const handleSubmit = () => {
    handleSubmitService({
      comment,
      datetime,
      fileContent,
      geolocation,
    });

    navigate("/queue");
  };

  return (
    <>
      <FormControlWrapper>
        <Input
          onClick={handleSelectLocation}
          placeholder="Selecione o endereço"
          type="button"
          endIcon={<LocationOn />}
          name="geolocation"
        />
        <Input
          onChange={handleInputFile}
          placeholder={fileContent?.fileName ? fileContent.fileName : "Anexe fotos do local"}
          value={fileInput}
          type="file"
          endIcon={<Collections />}
          name="picture"
        />
        <Input
          onInput={(event: ChangeEvent<HTMLInputElement>) => handleInput(event, setDatetime)}
          placeholder="Data e hora do local"
          type="datetime-local"
          endIcon={<Update />}
          name="datetime"
          value={datetime}
        />
        <Input
          onInput={(event: ChangeEvent<HTMLInputElement>) => handleInput(event, setComment)}
          placeholder="Deseja adicionar comentários?"
          endIcon={<InsertComment />}
          name="comment"
          value={comment}
        />
      </FormControlWrapper>

      <ButtonsWrapper>
        <Button
          variant="contained"
          startIcon={<ChevronLeft />}
          onClick={() => setCreateStep("categories")}
        >
          Voltar
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Finalizar
        </Button>
      </ButtonsWrapper>
    </>
  );
};

export default ServiceInfoForm;
