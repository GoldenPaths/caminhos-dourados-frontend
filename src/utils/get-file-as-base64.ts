const getFileAsBase64 = (file?: File): Promise<string | ArrayBuffer | null> | undefined => {
  if (!file) return undefined;
  return new Promise((resolve) => {
    let baseURL = null;
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      baseURL = reader.result;
      resolve(baseURL);
    };

    return baseURL;
  });
};
export default getFileAsBase64;
