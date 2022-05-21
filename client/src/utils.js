export const toCamelCase = (string) =>
  string &&
  string
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toUpperCase() : word.toLowerCase()
    )
    .replace(/\s+/g, "")
    .replace(/(^[A-Z])/g, (word) => word.toLowerCase());

export const toCapitalCase = (string) =>
  string &&
  string
    .split("")
    .map((latter, index, array) =>
      index === 0 || array[index - 1] === " "
        ? latter.toUpperCase()
        : latter.toLowerCase()
    )
    .join("");

export const replacer = (state) => {
  const values = {
    "[]": state?.name??"<Name>",
  };
  return (content='') =>
    Object.keys(values).reduce(
      (result, key) => result.replace(key, values[key]),
      content
    );
};
