function sample(arr) {
  let lengthArr = arr.length;
  let nRandom = Math.floor(Math.random() * (lengthArr - 0) + 0);
  return arr[nRandom];
}

function take(arr, length) {
  if (length < 0) return undefined;
  return arr.slice(0, length);
}

export { sample, take };
