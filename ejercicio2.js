const parentesis = (params) => {
  console.log(params);
  let counter = 0;
  if (params.length % 2 === 1) return false;
  for (let index = 0; index < params.length; index++) {
    console.log(params[index]);
    counter += (params[index] === '(') ? 1 : -1;
    if (counter < 0) return false;
  }
  return counter === 0;
};

const res1 = parentesis('(()()())');
console.log('res1', res1);
