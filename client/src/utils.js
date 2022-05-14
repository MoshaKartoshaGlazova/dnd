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
