import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\t').map(x => +x)

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  const seen = {}
  for (var cycles = 0; true; cycles++) {
    if (seen[input]) {
      return cycles
    }
    seen[input] = true
    var max = Math.max(...input)
    var i = input.indexOf(max)
    input[i] = 0
    for (var di = 1; di <= max; di++) {
      input[(i+di)%input.length]++
    }
  }
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `0\t2\t7\t0`
const part2Input = part1Input
run({
  part1: {
    tests: [
      { input: part1Input, expected: 5 },
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
