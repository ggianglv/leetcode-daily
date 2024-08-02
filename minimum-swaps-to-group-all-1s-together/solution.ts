const getNextCount = (prev: number, next: number, current: number) => {
  if (prev === next) {
    return current
  }
  if (prev === 1 && next === 0) {
    return current + 1
  }

  if(prev === 0 && next === 1) {
    return current - 1

  }

  return current
}

function minSwaps(nums: number[]): number {
  const countOne = nums.filter(num => num === 1).length
  let numberOfZero = 0
  // get initial of number of zero
  for (let i = 0; i < countOne; i++) {
    if (nums[i] === 0) numberOfZero++
  }
  let min = numberOfZero
  //Sliding window
  for (let i = 1; i < nums.length; i++) {
    const prev = nums[i - 1]
    const lastIndex = (i + countOne - 1) % nums.length
    const last = nums[lastIndex]
    numberOfZero = getNextCount(prev, last, numberOfZero)
    min = Math.min(numberOfZero, min)
  }


  return min
};
