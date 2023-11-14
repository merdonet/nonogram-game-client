const list_1: number[] = [1, 1, 0, 1, 0, 0, 1, 1, 1, 1];
const list2: number[] = [1, 1, 1, 1, 0, 0, 1, 1, 1, 1];

let sum = 0;
const columnSummary = (list: number[]) => {
  //   console.log(list);
  return list.reduce((acc: number[], item, index, arr) => {
    if (item === 1) sum++;
    if (item === 0 && sum !== 0) {
      acc.push(sum);
      sum = 0;
    }
    if (index == arr.length - 1 && item == 1) acc.push(sum);
    return acc;
  }, []);
};

const compare = (list1: number[], list2: number[]) => {
  if (list1.length != list2.length) return false;
  const result: Array<number | boolean> = [];
  list1.forEach((item, index) => {
    if (item == list2[index]) {
      result.push(true);
      return;
    }
    result.push(false);
  });
  return result;
};

export { columnSummary, compare };
