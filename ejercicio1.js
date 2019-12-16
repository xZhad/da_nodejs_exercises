function palindromos(palabra) {
  console.log(palabra);
  const tmp = palabra.replace(/[ ]/g, '');
  console.log(tmp);
  for (const key in tmp) {
    console.log(key, tmp[key], tmp[tmp.length - 1 - key], tmp[key] === tmp[tmp.length - 1 - key]);
    if (tmp[key] === tmp[tmp.length - 1 - key] === false) {
      return false;
    }
  }
  return true;
}

function newPalindromos(palabra) {
  console.log(palabra);
  const tmp = palabra.split(' ').join('');
  const rev = tmp.split('').reverse().join('');
  console.log(rev);
  return tmp === rev;
}

const res1 = palindromos('anita lava la tina');
const res2 = newPalindromos('anita lava la tina');
console.log('res1', res1);
console.log('res2', res2);
