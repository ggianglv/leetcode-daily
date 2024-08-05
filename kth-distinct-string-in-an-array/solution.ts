function kthDistinct(arr: string[], k: number): string {
  const count = {}
  arr.forEach(item => {
    if (!count[item]) count[item] = 0
    count[item]++
  })
  const filteredArray = arr.filter(item => count[item] === 1)

  return filteredArray[k - 1] || ''
};
