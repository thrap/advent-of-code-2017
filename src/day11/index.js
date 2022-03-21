import run from "aocrunner"

const re = /(.*)/
const parseLine = l => l.match(re).slice(1).map(x => +x ? +x : x)
const parseInput = rawInput => rawInput.split(',')

const dirs = {
  'n':  [0,  2],
  'se': [1, -1],
  'sw': [-1, -1],
  's':  [0, -2],
  'nw': [-1, 1],
  'ne': [1,  1]
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  var x = 0
  var y = 0
  input.map(x => dirs[x]).forEach(([dx, dy]) => {
    x += dx
    y += dy
  })
  return (Math.abs(x) + Math.abs(y))/2
}

const part2 = (rawInput) => {

}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
