function inmutable(obj) {
  const obj2 = { ...obj, change: 'new' };
  return obj2;
}

const obj = {
  1: 1,
  2: 2,
  3: 3,
  change: 'original',
};

console.log(obj);
const obj2 = inmutable(obj);
console.log('obj', obj);
console.log('obj2', obj2);
