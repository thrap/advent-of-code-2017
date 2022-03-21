import run from "aocrunner"

const dirs = {
  'n':  [0,  2],
  'se': [1, -1],
  'sw': [-1, -1],
  's':  [0, -2],
  'nw': [-1, 1],
  'ne': [1,  1]
}

const steps = rawInput => rawInput.split(',').map(x => dirs[x])

const solve = (steps, f) => {
  var x = 0
  var y = 0
  return steps.reduce((acc, [dx, dy]) => {
    x += dx
    y += dy
    return f((Math.abs(x) + Math.abs(y))/2, acc)
  }, 0)
}

run({
  part1: {
    solution: input => solve(steps(input), x => x)
  },
  part2: {
    solution: input => solve(steps(input), Math.max)
  },
})
