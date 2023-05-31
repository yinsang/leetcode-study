export const addNumberThousand = (number, thousandsSeperator = ",") => {
  const reverse = (str) => str.split("").reverse().join("");
  const str = reverse(String(number)).replace(
    /(\d\d\d)(?=\d)/g,
    "$1" + thousandsSeperator
  );
  return reverse(str);
};
