import run from "aocrunner"

const parseInput = rawInput => rawInput.match(/(\d+)[^\d]+(\d+)/).slice(1)

const part1 = (rawInput) => {
  var [a, b] = parseInput(rawInput)

  var count = 0
  var pow = 1 << 16
  for(var i = 0; i < 40000000; i++) {
    a = (a*16807) % 2147483647
    b = (b*48271) % 2147483647

    if (a % pow == b % pow) {
      count++
    }
  }

  return count
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part2Input = `Generator A starts with 65
Generator B starts with 8921`
run({
  part1: {
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
