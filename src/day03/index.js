import run from "aocrunner"

const parseInput = rawInput => +rawInput

const part1 = (input) => {
  var min = Number.MAX_VALUE
  for (var layer = 0; 4*(layer-1)*(layer-1) <= input; layer ++) {
    for (var i = 0; i <= 3; i++) {
      var x = (2*layer+1)*(2*layer+1)-layer-2*layer*i;

      min = Math.min(layer + Math.abs(input - x), min)
    }
  }
  return min
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    tests: [
      //{ input: part2Input, expected: '' },
    ],
    solution: part2,
  },
})
