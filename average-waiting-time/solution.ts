const averageWaitingTime = (customers: [number, number]) => {
  let idleTime = 0
  let totalTime = 0
  customers.forEach((customer) => {
    const startTime = Math.max(idleTime, customer[0])
    const endTime = startTime + customer[1]
    totalTime += endTime - customer[0]
    idleTime = endTime
  })

  return totalTime / customers.length
};
