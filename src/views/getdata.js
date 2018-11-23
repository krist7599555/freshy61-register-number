import { maingroup, expenggroup, cpgroup } from "./groupnumber";

function getfromiteraval(order, array) {
  for (let obj of array) {
    let { start, end, ...rest } = obj;
    if (start <= order && order <= end) {
      return rest;
    }
  }
  return null;
}
export default function(order) {
  let [main, expeng, cp] = [maingroup, expenggroup, cpgroup].map(arr =>
    getfromiteraval(order, arr)
  );
  return {
    main,
    expeng,
    cp
  };
}
