const primo = (to) => {
  let res = [];
  for (let number = 2; number < to; number++) {
    let isPrime = true;
    for (const prime of res) {
      if (number % prime === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      res = [...res, number];
    }
  }
  return res;
};

const res = primo(10);
console.log(res);
