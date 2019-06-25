function sample(arr) {
  let lengthArr = arr.length - 1;
  let nRandom = Math.floor(Math.random() * (lengthArr - 0) + 0);
  return arr[nRandom];
}

export default sample;
