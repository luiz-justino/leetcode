function minMoves(arr) {
  let onesCount = 0;
  let zerosCount = 0;
  let costWhenZeros = 0;
  let costWhenOnes = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      costWhenZeros += onesCount;
      zerosCount++;
    } else {
      costWhenOnes += zerosCount;
      onesCount++;
    }
  }
  return Math.min(costWhenZeros, costWhenOnes);
}

console.log(minMoves([1,0,1,0])); // Output: 1
console.log(minMoves([0,1,0,1,1])); // Output: 1
console.log(minMoves([1,1,1,1])); // Output: 0
console.log(minMoves([0,0,1,1,0])); // Output: 2
console.log(minMoves([1,0,0,0,1,0,1])); // Output: 5