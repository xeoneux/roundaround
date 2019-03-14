import DESC_LENGTH from "./constants";

const truncate = string => {
  const length = DESC_LENGTH;
  return string.length > length ? `${string.substring(0, length)}...` : string;
};

export default truncate;
