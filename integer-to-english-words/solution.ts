const digits = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
  20: "Twenty",
  30: "Thirty",
  40: "Forty",
  50: "Fifty",
  60: "Sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninety",
  100: "Hundred",
  1000: "Thousand",
  1000000: "Million",
  1000000000: "Billion"
}

const mapSuffixByIndex = {
  0: '',
  1: ' Thousand',
  2: ' Million',
  3: ' Billion'
}

const chunkToWords = (num: number, level = 1): string => {
  if (num === 0) return ''
  let text = ''
  const first = Math.floor(num / 100)
  if (first !== 0) text += `${digits[first]} Hundred`
  const numberLeft = num - first * 100
  if (numberLeft === 0) {
    return text
  }

  if (digits[numberLeft]) {
    text += ` ${digits[numberLeft]}`
    return text
  }

  const second = Math.floor(numberLeft / 10) * 10
  text += ` ${digits[second]} ${digits[numberLeft - second]}`



  return text
}

function numberToWords(num: number): string {
  if (num === 0) return 'Zero'
  const stack = []
  const string = num.toString()
  // reverse loop
  let temp = ''
  const length = string.length
  for (let i = 1; i <= length; i++) {
    const nextTemp = temp + string[length - i]
    if (i % 3 === 0 || i === length) {
      stack.push(string[length - i] + temp)
      temp = ''
    } else {
      temp = `${string[length - i]}${temp}`
    }
  }
  let result = ''
  stack.forEach((item, index) => {
    if (+item === 0) return
    const text = `${chunkToWords(+item)}${mapSuffixByIndex[index]}`
    result = `${text.trim()}${index === 0 ? '' : ' '}${result}`
  })

  return result.trim()
};
