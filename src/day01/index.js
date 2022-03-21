import run from "aocrunner"

const part1 = (input) => {
  var sum = 0
  for (var i = 0; i < input.length; i++) {
    if (input[i] == input[(i+1)%input.length])
      sum += +input[i]
  }
  return sum
}

const part2 = (rawInput) => {
  //const input = parseInput(rawInput)

  return
}

const part1Input = ``
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
