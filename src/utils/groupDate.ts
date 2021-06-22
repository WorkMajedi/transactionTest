const groupDate = myArray => {
  let res = {};

  let fn = (year, month, o = res, array = myArray) => {
    o[year][month] = {
      [month]: array.filter(
        ({ date: d }) => `${year}-${month}` === d.slice(0, 7),
      ),
    };
  };

  for (let { date } of myArray) {
    let [year, month] = date.match(/\d+/g);
    if (!res[year]) res[year] = {};
    fn(year, month);
  }
  return res;
};
export { groupDate };
