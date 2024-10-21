export const extractNumberFromString = (str: string) => {
  const match = str.match(/-?\d+/g);
  return match ? parseInt(match[0]) : 0;
};
