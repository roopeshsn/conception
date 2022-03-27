export default function (string) {
  let arr = string.split(",");
  let formattedArr = arr.map((item) => item.trim());
  return formattedArr;
}
