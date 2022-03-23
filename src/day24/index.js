import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n').map(x => x.split('/').map(x => +x))

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  var max = 0
  const dfs = (pin, arr, acc) => {
    max = Math.max(acc, max)
    arr.forEach(([a, b], i) => {
      if (a == pin) {
        dfs(b, arr.filter((_, j) => j != i), acc + a + b)
      }
      if (b == pin) {
        dfs(a, arr.filter((_, j) => j != i), acc + a + b)
      }
    })
  }

  dfs(0, input, 0)

  return max
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `0/2
2/2
2/3
3/4
3/5
0/1
10/1
9/10`
const part2Input = part1Input
run({
  part1: {
    tests: [
      { input: part1Input, expected: 31 },
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
