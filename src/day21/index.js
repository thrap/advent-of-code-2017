import run from "aocrunner"

const re = /(.*)/
const parseLine = l => l.match(re).slice(1).map(x => +x ? +x : x)
const parseInput = rawInput => rawInput.split('\n').map(l => l.replace(/\//g, '\n').split(' => ')).reduce((acc, [x, y]) => ({...acc, [x]: y}), {})

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

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  console.log(input)
  Object.keys(input).forEach(pattern => {
    /*onsole.log(pattern);
    console.log(" -> ");
    console.log(input[pattern]);
    console.log();*/
  })

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

  const step = grid => {
    const parts = partition(grid).map(row => row.map(part => {
      for (var i = 0; i < 4; i++) {
        const found = input[toStr(part)] || input[toStr(mirror(part))]
        if (found) {
          return toArr(found)
        }
        part = rotate(part)
      }

      for (var i = 0; i < 4; i++) {
        console.log(toStr(part));
        console.log();
        console.log(toStr(mirror(part)));
        console.log();
        part = rotate(part)
      }
      throw "faen"
    }))

    var newArr = []

    for (var i = 0; i < parts.length; i++) {
      for (var j = 0; j < parts[i][0].length; j++) {
        newArr.push(parts[i].map(m => m[j]).flat())
      }
    }

    return newArr

  }

  const toArr = str => str.split('\n').map(l => l.split(''))
  const toStr = arr => arr.map(l => l.join('')).join('\n')
  var grid = toArr('.#.\n..#\n###')

  for (var i = 0; i < 5; i++) {
    grid = step(grid)
    console.log(toStr(grid));
    console.log();
  }

  return grid.map(l => l.join('')).join('').replace(/\./g,'').length
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)
  console.log(input)
  Object.keys(input).forEach(pattern => {
    /*onsole.log(pattern);
    console.log(" -> ");
    console.log(input[pattern]);
    console.log();*/
  })

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

  const step = grid => {
    const parts = partition(grid).map(row => row.map(part => {
      for (var i = 0; i < 4; i++) {
        const found = input[toStr(part)] || input[toStr(mirror(part))]
        if (found) {
          return toArr(found)
        }
        part = rotate(part)
      }

      for (var i = 0; i < 4; i++) {
        console.log(toStr(part));
        console.log();
        console.log(toStr(mirror(part)));
        console.log();
        part = rotate(part)
      }
      throw "faen"
    }))

    var newArr = []

    for (var i = 0; i < parts.length; i++) {
      for (var j = 0; j < parts[i][0].length; j++) {
        newArr.push(parts[i].map(m => m[j]).flat())
      }
    }

    return newArr

  }

  const toArr = str => str.split('\n').map(l => l.split(''))
  const toStr = arr => arr.map(l => l.join('')).join('\n')
  var grid = toArr('.#.\n..#\n###')

  for (var i = 0; i < 18; i++) {
    grid = step(grid)
    console.log(toStr(grid));
    console.log();
  }

  return grid.map(l => l.join('')).join('').replace(/\./g,'').length
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
  onlyTests: false,
})
