const getEven = () => {
  let arr = [];

  for (let i = 0; i < 51; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
};

getEven();
