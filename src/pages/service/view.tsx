import { Input, Layout } from "../../components";
import { FormControlWrapper } from "./service.styled";

const ViewServicePage = () => {
  return (
    <Layout>
      <FormControlWrapper>
        <Input onClick={() => {}} placeholder="Veja no mapa" type="button" name="geolocation" />
      </FormControlWrapper>
    </Layout>
  );
};

export default ViewServicePage;
