const add = (param) => {
  const strs = param.match(/-{0,1}\d+/g);
  const nums = strs.map((el) => parseInt(el, 10));
  const neg = nums.some((el) => el < 0);
  if (neg) throw new Error('negativos no soportados');
  return nums.reduce((val, acc) => acc + val);
};

const param = '//~\n1~2~3\n4~5';
try {
  const res = add(param);
  console.log(res);
} catch (e) {
  console.log(e.message);
}
