import run from "aocrunner"

const parseInput = rawInput => rawInput.split(',').map(x => +x)

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  var arr = Array(256).fill(0).map((_, i) => i)

  var skipSize = 0
  var current = 0
  input.forEach(length => {
    for (var i = 0; i < length/2; i++) {
      const temp = arr[(current + i) % arr.length]
      arr[(current + i) % arr.length] = arr[(current + length - 1 - i) % arr.length]
      arr[(current + length - 1 - i) % arr.length] = temp
    }

    current += length + skipSize
    skipSize++
  })

  return arr[0]*arr[1]
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
      { input: '', expected: '' },
    ],
    solution: part2,
  },
  onlyTests: false,
})
