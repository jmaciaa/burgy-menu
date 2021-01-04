export const slugify = str => {
  return str
    .toLowerCase()
    .trim()
    .replace(/ /g, '-');
};
