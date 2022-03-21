import run from "aocrunner"

const re = /(.*)/
const parseLine = l => l.match(re).slice(1).map(x => +x ? +x : x)
const parseInput = rawInput => rawInput.split('\n')//.map(parseLine)

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  const parents = []
  const children = new Set()
  input.filter(x => x.includes('->')).map(x => x.split(/ \(.* -> /)).forEach(x => {
    parents.push(x[0])

    x[1].split(', ').forEach(children.add, children)
  })

  return parents.filter(x => !children.has(x))[0]
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`
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
