import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n')

const evaluate = (line, reg) => {
  const [a, b] = line.split(' if ')

  const r = a => `reg["${a}"]`
  const condition = b.replace(/^([^ ]+)/, a => `(${r(a)}||0)`)
  const expr = a.replace(/^([^ ]+)/, a => `${r(a)}=(${r(a)}||0)`).replace('dec', '-').replace('inc', '+')

  if (eval(condition)) {
    eval(expr)
  }
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  var reg = {}
  input.forEach(l => evaluate(l, reg))

  return Math.max(...Object.values(reg))
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  var max = 0
  var reg = {}
  input.forEach(l => {
    evaluate(l, reg)
    max = Math.max(max, Math.max(...Object.values(reg)))
  })
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
