const x = '//~\n1~2~3\n4~5';
const y = x.match(/\d+/g);
const z = y.reduce((val, acc) => parseInt(acc, 10) + parseInt(val, 10));
console.log(z);
