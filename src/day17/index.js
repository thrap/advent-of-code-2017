import run from "aocrunner"

const parseInput = rawInput => +rawInput

const part1 = (rawInput) => {
  const step = parseInput(rawInput)
  var pos = 0
  var arr = [0]
  for (var i = 1; i <= 2017; i++) {
    pos += step
    var x = pos%arr.length+1
    arr.splice(x, 0, i)
    pos = x
  }
  return arr[pos%arr.length+1]
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `3`
const part2Input = part1Input
run({
  part1: {
    tests: [
      { input: part1Input, expected: 638 },
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
