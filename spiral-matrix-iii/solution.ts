function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
  let direction = 'right'
  let col = cStart
  let row = rStart
  let topBoundary = rStart
  let rightBoundary = cStart + 1
  let bottomBoundary = rStart + 1
  let leftBoundary = cStart - 1
  const result = []
  while (result.length < rows * cols) {
    const isValidRow = row >=0 && row < rows
    const isValidCol = col >=0 && col < cols
    isValidRow && isValidCol && result.push([row, col])


    if (direction === 'right') {
      const nextCol = col + 1

      if (nextCol > rightBoundary) {
        direction = 'down'
        row = row + 1
        topBoundary -= 1
        continue
      }
      col += 1
      continue
    }

    // Move Down
    if (direction === 'down') {
      const nextRow = row + 1
      if (nextRow > bottomBoundary) {
        direction = 'left'
        col = col - 1
        rightBoundary += 1
        continue
      }
      row += 1
      continue
    }

    // Move to the left
    if (direction === 'left') {
      const nextCol = col - 1
      if (nextCol < leftBoundary) {
        direction = 'up'
        row = row - 1
        bottomBoundary += 1
        continue
      }
      col -= 1
      continue
    }

    // move up
    if (direction === 'up') {
      const nextRow = row - 1
      if (nextRow < topBoundary) {
        direction = 'right'
        col = col + 1
        leftBoundary -= 1
        continue
      }

      row -= 1
      continue
    }

  }

  return result
};
