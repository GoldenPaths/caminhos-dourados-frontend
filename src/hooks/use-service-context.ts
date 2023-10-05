import { useContext } from "react";
import { ServiceContext } from "../contexts/service";

export const useServiceContext = () => useContext(ServiceContext);
