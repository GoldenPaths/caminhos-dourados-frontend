import { createContext, FC, ReactNode, useState } from "react";

export type CategoryType = {
  id: number | string;
  label: string;
  description?: string;
  checked: boolean;
};

export type FileContentType = {
  fileName: string;
  url: string;
};

export type GeolocationType = {
  lat: string;
  long: string;
};

// type ServiceContextProps = [
//   {
//     categories: CategoryType[];
//     fileContent: FileContentType | null;
//     geolocation: GeolocationType | null;
//     comment?: string;
//     datetime?: string;
//   },
//   {
//     setComment: (comment?: string) => void;
//     setDatetime: (datetime?: string) => void;
//     setFileContent: (fileContent: FileContentType | null) => void;
//     setGeolocation: (geolocation: GeolocationType | null) => void;
//     setCategories: (categories: CategoryType[]) => void;
//   }
// ];

type ServiceData = {
  fileContent: FileContentType | null;
  geolocation: GeolocationType | null;
  comment?: string;
  datetime?: string;
};

type ServiceContextProps = {
  setCategories: (categories: CategoryType[]) => void;
  handleSubmitService: (data: ServiceData) => void;
};

const defaultProps = {
  setCategories: () => {},
  handleSubmitService: () => {},
};

const ServiceContext = createContext<ServiceContextProps>(defaultProps);

const ServiceContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const handleSubmitService = (data: ServiceData) => {
    console.log(data);
    console.log(categories);
  };

  return (
    <ServiceContext.Provider value={{ setCategories, handleSubmitService }}>
      {children}
    </ServiceContext.Provider>
  );
};

export { ServiceContext, ServiceContextProvider };
