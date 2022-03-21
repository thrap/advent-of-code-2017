import run from "aocrunner"

const re = /(.*)/
const parseLine = l => l.match(re).slice(1).map(x => +x ? +x : x)
const cancel = input => input.replace(/\!./g, '')

const part1 = (rawInput) => {
  const input = cancel(rawInput).replace(/<[^>]*>/g, '').replace(/,/g, '')
  var sum = 0
  var depth = 0
  for(var i = 0; i < input.length; i++) {
    if (input[i] == '{') {
      depth++
      sum += depth
    } else {
      depth--
    }
  }

  return sum
}

const part2 = (rawInput) => {
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
