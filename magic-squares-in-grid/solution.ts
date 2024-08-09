const isValidSquare = (grid: number[][]) => {
  const countMap = {}
  let isValid = true
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const num = grid[i]?.[j]
      if (!num || num > 9 || num < 0) {
        isValid = false
        break
      }

      if (!countMap[num]) {
        countMap[num] = 0
      }

      if (countMap[num] === 1) {
        isValid = false
        break
      }

      countMap[num]++


    }

  }


  return isValid
}

const isMagicSquare = (grid: number[][]) => {
  if (!isValidSquare(grid)) {
    return false
  }
  let isMagic = true
  const firstRowSum = grid[0][0] + grid[0][1] + grid[0][2]

  const secondRowSum = grid[1][0] + grid[1][1] + grid[1][2]
  if (firstRowSum !== secondRowSum) {
    return false
  }

  const thirdRowSum = grid[1][0] + grid[1][1] + grid[1][2]
  if (firstRowSum !== thirdRowSum) {
    return false
  }

  const firstColSum = grid[0][0] + grid[1][0] + grid[2][0]
  if (firstRowSum !== firstColSum) {
    return false
  }

  const secondColSum = grid[0][1] + grid[1][1] + grid[2][1]
  if (firstRowSum !== secondColSum) {
    return false
  }

  const thirdColSum = grid[0][2] + grid[1][2] + grid[2][2]
  if (firstRowSum !== thirdColSum) {
    return false
  }

  const firstDiagonalSum = grid[0][0] + grid[1][1] + grid[2][2]
  if (firstRowSum !== firstDiagonalSum) {
    return false
  }

  const secondDiagonalSum = grid[0][2] + grid[1][1] + grid[2][0]
  if (firstRowSum !== firstDiagonalSum) {
    return false
  }

  return true
}

function numMagicSquaresInside(grid: number[][]): number {
  let count = 0

  for (let i = 0; i <= grid.length - 3; i++) {
    const row = grid[i]
    for (let j = 0; j <= row.length - 3; j++) {
      const sub = []
      sub.push([row[j], row[j + 1], row[j + 2]])
      sub.push([grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2]])
      sub.push([grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2]])

      count += Number(isMagicSquare(sub))
    }
  }


  return count
};
