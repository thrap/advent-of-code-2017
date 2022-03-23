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

const partition = (grid) => {
  var n = grid.length % 2 == 0 ? 2 : 3
  const parts = []
  for (var di = 0; di < grid.length; di += n) {
    const row = []
    for (var dj = 0; dj < grid.length; dj+= n) {
      const part = Array(n).fill(0).map(_ => Array(n))
      for (var i = 0; i < n; i ++) {
        for (var j = 0; j < n; j++) {
          part[i][j] = grid[di+i][dj+j]
        }
      }
      row.push(part)
    }
    parts.push(row)
  }
  return parts
}

const toArr = str => str.split('\n').map(l => l.split(''))
const toStr = arr => arr.map(l => l.join('')).join('\n')

const step = (grid, rules) => {
  const parts = partition(grid).map(row => row.map(part => {
    for (var i = 0; i < 4; i++) {
      const found = rules[toStr(part)] || rules[toStr(mirror(part))]
      if (found) {
        return toArr(found)
      }
      part = rotate(part)
    }
  }))

  var newArr = []

  /*var count = {}
  parts.flat().map(toStr).forEach(x => {
    count[x] = (count[x] || 0) + 1
  })
  console.log(count);*/
  for (var i = 0; i < parts.length; i++) {
    for (var j = 0; j < parts[i][0].length; j++) {
      newArr.push(parts[i].map(m => m[j]).flat())
    }
  }

  return newArr
}

const solve = (input, n) => {
  const rules = input.split('\n').map(l => l.replace(/\//g, '\n').split(' => '))
                     .reduce((acc, [x, y]) => ({...acc, [x]: y}), {})

  var grid = toArr('.#.\n..#\n###')

  for (var steps = 0; steps < n; steps++) {
    grid = step(grid, rules)
  }

  return grid.map(l => l.join('')).join('').replace(/\./g,'').length
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
