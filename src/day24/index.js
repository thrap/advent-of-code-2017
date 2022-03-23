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

  var max = 0
  var maxLength = 0
  const dfs = (pin, arr, acc, length) => {
    if (length > maxLength) {
      maxLength = length
      max = acc
    }
    if (length >= maxLength) {
      max = Math.max(acc, max)
    }

    arr.forEach(([a, b], i) => {
      if (a == pin) {
        dfs(b, arr.filter((_, j) => j != i), acc + a + b, length+1)
      }
      if (b == pin) {
        dfs(a, arr.filter((_, j) => j != i), acc + a + b, length+1)
      }
    })
  }

  dfs(0, input, 0, 0)

  return max
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
