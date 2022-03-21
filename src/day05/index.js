import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n').map(x => +x)

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  var i = 0
  var steps = 0
  while (i >= 0 && i < input.length) {
    i += input[i]++
    steps++
  }
  return steps
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `0
3
0
1
-3`
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
