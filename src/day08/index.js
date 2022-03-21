import run from "aocrunner"

const re = /(.*)/
const parseLine = l => l.match(re).slice(1).map(x => +x ? +x : x)
const parseInput = rawInput => rawInput.split('\n')

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  var reg = {}
  input.forEach(l => {
    const [a, b] = l.split(' if ')

    const str = b.replace(/^([^ ]+)/, (a) => '(reg["'+a+'"]||0)')
    const str2 = a.replace(/^([^ ]+)/, (a) => 'reg["'+a+'"] = (reg["'+a+'"]||0)' ).replace('dec', '-').replace('inc', '+')

    if (eval(str)) {
      eval(str2)
    }
  })

  return Math.max(...Object.values(reg))
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`
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
