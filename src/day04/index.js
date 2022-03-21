import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n').map(l => l.split(' '))

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  return input.filter(pass => {
    var seen = {}
    for (var i = 0; i < pass.length; i++) {
      if (seen[pass[i]])
        return false
      seen[pass[i]] = true
    }
    return true
  }).length
}

const part2 = (rawInput) => {

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
