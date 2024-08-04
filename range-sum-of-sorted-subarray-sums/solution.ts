function getSortedSubsetSum(array) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const sub = [array[i]]
    result.push(array[i])
    for (let j = i + 1; j < array.length; j++) {
      sub.push(array[j])
      const sum = sub.reduce((total, num) => total + num, 0)
      result.push(sum)
    }
  }

  return result.sort((a, b) => a - b)
}


function rangeSum(nums: number[], n: number, left: number, right: number): number {
  const MOD = 1000000007;
  let total = 0
  const subsetSum = getSortedSubsetSum(nums)
  for (let i = left - 1; i < right; i++) {
    total = (subsetSum[i] + total) % MOD
  }

  return total
};
