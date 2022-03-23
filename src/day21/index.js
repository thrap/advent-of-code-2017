import run from "aocrunner"

const rotate = matrix => {
  const y = matrix.length - 1;
  for (var i = 0; i < matrix.length; i++) {
     for (var j = i; j < y - i; j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[y - j][i];
        matrix[y - j][i] = matrix[y - i][y - j];
        matrix[y - i][y - j] = matrix[j][y - i]
        matrix[j][y - i] = temp
     }
  }
  return matrix
}

const mirror = matrix => {
  return matrix.map(row => [...row].reverse())
}

const partition = (grid, n) => {
  const parts = []
  for (var di = 0; di < grid.length; di += n) {
    const row = []
    for (var dj = 0; dj < grid.length; dj+= n) {
      row.push([...Array(n)].map((_, i) => [...Array(n)].map((_, j) => grid[di+i][dj+j])))
    }
    parts.push(row)
  }
  return parts
}

const toArr = str => str.split('\n').map(l => l.split(''))
const toStr = arr => arr.map(l => l.join('')).join('\n')

const step = (grid, rules) => {
  const parts = partition(grid, grid.length % 2 == 0 ? 2 : 3).map(row => row.map(part => {
    for (var i = 0; i < 4; i++) {
      const found = rules[toStr(part)] || rules[toStr(mirror(part))]
      if (found) {
        return toArr(found)
      }
      part = rotate(part)
    }
  }))

  var newArr = []

  for (var i = 0; i < parts.length; i++) {
    for (var j = 0; j < parts[i][0].length; j++) {
      newArr.push(parts[i].map(m => m[j]).flat())
    }
  }

  return newArr
}

const memo = {}
const divide = (grid, rules, n) => {
  if (n == 0)
    return grid.map(l => l.join('')).join('').replace(/\./g,'').length
  const str = n + toStr(grid)
  if (memo[str]) {
    return memo[str]
  }
  var sum = 0
  if (grid.length > 12 && grid.length % 12 == 0) {
    const parts = partition(grid, 12)
    parts.flat().forEach(x => {
      sum += divide(x, rules, n)
    })
  } else {
    sum = divide(step(grid, rules), rules, n-1)
  }

  memo[str] = sum
  return memo[str]
}

const solve = (input, n) => {
  const split = input.split('\n').map(l => l.replace(/\//g, '\n').split(' => '))
  const rules = split.reduce((acc, [x, y]) => ({...acc, [x]: y}), {})

  var grid = toArr('.#.\n..#\n###')

  return divide(grid, rules, n)
}

run({
  part1: {
    solution: (input) => solve(input, 5),
  },
  part2: {
    solution: (input) => solve(input, 18),
  },
  onlyTests: false,
})
