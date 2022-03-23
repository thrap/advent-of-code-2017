import run from "aocrunner"

const parseInput = rawInput => {
  const input = rawInput.split('\n')
  const grid = {}
  input.forEach((l, i) => {
    l.split('').forEach((c, j) => {
      grid[[j-(input.length-1)/2, i-(input.length-1)/2]] = c == '#' ? 2 : 0
    })
  })
  return grid
}

const dirs = [[0,-1],[-1,0],[0,1],[1,0]]

const part1 = (rawInput) => {
  const grid = parseInput(rawInput)

  var x = 0
  var y = 0
  var dir = 0

  var count = 0
  for(var steps = 0; steps < 10000; steps++) {
    const c = grid[[x, y]]

    if (c) {
      dir = (4+dir-1)%4
    } else {
      count++
      dir = (dir+1)%4
    }

    grid[[x, y]] = !grid[[x, y]]
    x += dirs[dir][0]
    y += dirs[dir][1]
  }
  return count
}

const part2 = (rawInput) => {
  const grid = parseInput(rawInput)

  var x = 0
  var y = 0
  var dir = 0

  var count = 0
  for(var steps = 0; steps < 10000000; steps++) {
    if (steps % 1000000 == 0) {
      console.log(steps / 1000000 + '/10', count);
    }
    const c = grid[[x, y]] || 0

    if (c == 2) {
      dir = (4+dir-1)%4
    } else if (c == 1) {
      count++
    } else if (c == 3) {
      dir = (dir+2)%4
    } else {
      dir = (dir+1)%4
    }

    grid[[x, y]] = ((grid[[x, y]] || 0) + 1)%4
    x += dirs[dir][0]
    y += dirs[dir][1]
  }
  return count
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
