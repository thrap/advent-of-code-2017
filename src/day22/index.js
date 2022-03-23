import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n')

const dirs = [[0,-1],[-1,0],[0,1],[1,0]]

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  const grid = {}
  input.forEach((l, i) => {
    l.split('').forEach((c, j) => {
      grid[[j-(input.length-1)/2, i-(input.length-1)/2]] = c == '#'
    })
  })

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
  const input = parseInput(rawInput)

  return
}

const part1Input = `..#
#..
...`
const part2Input = part1Input
run({
  part1: {
    tests: [
      { input: part1Input, expected: '' },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      { input: part2Input, expected: '' },
    ],
    solution: part2,
  },
  onlyTests: false,
})
