const reverseParentheses =  (s: string) => {
  let text = s
  const regex = /\([a-z]*\)/
  while (regex.test(text)) {
    text = text.replace(regex, (text) => {
      return text.split('').filter(character => character !== '(' && character !== ')').reverse().join('')
    })
  }

  return text
};
