function fibs(n) {
  if (n === 0) return [0]
  let fibsArr = [];
  for (let i = 0; i <= n; i++) {
    console.log(fibsArr)
    if (i === 0) {
      fibsArr.push(0)
    } else if (i === 1 || i === 2) {
      fibsArr.push(1)
    } else {
      fibsArr.push(fibsArr[i - 1] + fibsArr[i - 2]);
    }
  }
  return fibsArr;
}

function fibsRec(n, fibsArr = [0, 1]) {
  if (n === 0) {
    return [0];
  } if (n === 1) {
    return fibsArr
  } else {
    fibsArr.push(fibsArr[fibsArr.length - 1] + fibsArr[fibsArr.length - 2]);
    return fibsRec(n - 1, fibsArr)
  }
}
console.table(fibsRec(10));