const lineSummary = (list: number[]) => {
  let sum = 0;
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

const compare = (
  list1: Array<number | undefined>,
  list2: Array<number | undefined>
) => {
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

const maxSummaryLength = (list: number[][]): number => {
  let maxLength = 0;

  list.forEach((line) => {
    const lineSum: number[] = lineSummary(line);
    if (lineSum.length > maxLength) maxLength = lineSum.length;
  });
  return maxLength;
};

export { lineSummary, compare, maxSummaryLength };
