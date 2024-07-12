const maximumGain = (s: string, x: number, y: number): number => {
  let score = 0
  const first = x > y ? 'ab' : 'ba'
  const second = x > y ? 'ba' : 'ab'
  const firstScore = Math.max(x, y)
  const secondScore = Math.min(x, y)
  let stack: string[] = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === first[1] && stack[stack.length - 1] === first[0]) {
      stack.pop()
      score += firstScore
      continue
    }
    stack.push(s[i])
  }

  let stack2: string[] = []
  while (stack.length) {
    const char = stack.pop()
    if (char === second[0] && stack2[stack2.length - 1] === second[1]) {
      stack2.pop()
      score += secondScore
    }else {
      stack2.push(char)
    }
  }

  return score
};
