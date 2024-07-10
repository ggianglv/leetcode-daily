const minOperations = (logs: string[]) => {
  let step = 0
  logs.forEach(log => {
    if(log === './') return
    if(log === '../') {
      step = Math.max(0, step - 1)
      return
    }
    step +=1
  })
  return step
};
