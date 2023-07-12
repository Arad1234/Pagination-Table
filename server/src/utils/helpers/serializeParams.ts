// Serialize the parameters so the external API could understand what params the url is given
export const serializeParams = (params: any) => {
  const serializedParamsArray = Object.keys(params).map((key) => {
    return `_${key}=${params[key]}`;
  });
  const serializedParams = serializedParamsArray.join("&");
  return serializedParams;
};
