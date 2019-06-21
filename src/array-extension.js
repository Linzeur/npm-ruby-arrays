function sample(arr) {
  let lengthArr = arr.length;
  let nRandom = Math.floor(Math.random() * (lengthArr - 0) + 0);
  return arr[nRandom];
}

export default sample;
