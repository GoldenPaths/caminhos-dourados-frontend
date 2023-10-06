import { Divider, Typography, List } from "@mui/material";
import { Layout } from "../../components";
import { CustomListItem } from "./service.styled";

const mockService = {
  address: "Nome da rua, bairro, complemento",
  pictures: [{ fileName: "imagem.png", url: "" }],
  dateTime: "20/05/2023 13:25",
  categories: ["Acidente", "Estrutura"],
  comment:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt leo sed purus pretium blandit.Ut vestibulum eros at ornare bibendum. Phasellus consectetur feugiat suscipit.",
};

const ViewServicePage = () => {
  const { address, pictures, dateTime, categories, comment } = mockService;

  return (
    <Layout>
      <Typography sx={{ marginBottom: "24px" }} fontSize={32} fontWeight={700} textAlign="center">
        Ocorrência
      </Typography>
      <List>
        <CustomListItem>
          <Typography color="primary" fontWeight={700}>
            Endereço
          </Typography>
          <Typography>{address}</Typography>
        </CustomListItem>
        <Divider />
        <CustomListItem>
          <Typography color="primary" fontWeight={700}>
            Evidências
          </Typography>
          {pictures.map(({ fileName, url }) => (
            <a href={url} download={fileName}>
              <Typography>{fileName}</Typography>
            </a>
          ))}
        </CustomListItem>
        <Divider />
        <CustomListItem>
          <Typography color="primary" fontWeight={700}>
            Data e Hora
          </Typography>
          <Typography>{dateTime}</Typography>
        </CustomListItem>
        <Divider />
        <CustomListItem>
          <Typography color="primary" fontWeight={700}>
            Categorias
          </Typography>
          {categories.map((category) => (
            <Typography>{category}</Typography>
          ))}
        </CustomListItem>
        <Divider />
        <CustomListItem>
          <Typography color="primary" fontWeight={700}>
            Comentário
          </Typography>
          <Typography>{comment}</Typography>
        </CustomListItem>
      </List>
    </Layout>
  );
};

export default ViewServicePage;
