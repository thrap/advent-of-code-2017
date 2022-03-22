import run from "aocrunner"

const dirs = [[1,0],[0,1],[-1,0],[0,-1]]

const traverse = input => {
  const grid = input.split('\n')
  var x = 0
  var y = grid[x].indexOf('|')
  var dir = 0

  var path = ''
  for(var steps = 0; true; steps++) {
    const c = grid[x][y]
    if ((c || ' ') == ' ') {
      return [path, steps]
    }
    if (/[A-Z]/.test(c)) {
      path += c
    }
    if (c == '+') {
      const [dx, dy] = dirs[(dir+1)%4]

      if ((grid[x+dx]?.[y+dy] || ' ') != ' ') {
        dir = (dir+1)%4
      } else {
        dir = (4+dir-1)%4
      }
    }
    x += dirs[dir][0]
    y += dirs[dir][1]
  }
}

run({
  part1: {
    solution: (input) => traverse(input)[0],
  },
  part2: {
    solution: (input) => traverse(input)[1],
  },
})
