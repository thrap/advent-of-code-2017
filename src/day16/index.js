import run from "aocrunner"

const parseInput = rawInput => rawInput.split(',')

const swap = (arr, a, b) => {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  var str = "abcdefghijklmnop".split('')
  input.forEach(s => {
    if (s[0] == 's') {
      const x = +s.slice(1)

      str = str.slice(str.length - x).concat(str.slice(0, str.length-x))
    } else if (s[0] == 'x') {
      const [a, b] = s.slice(1).split('/')

      swap(str, a, b)
    } else if (s[0] == 'p') {
      const [a, b] = s.slice(1).split('/')

      swap(str, str.indexOf(a), str.indexOf(b))
    } else {
      throw 1
    }
  });

  return str.join('')
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `s1,x3/4,pe/b`
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
