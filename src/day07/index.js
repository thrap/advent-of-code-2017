import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n')

const root = input => {
  const parents = []
  const children = new Set()
  input.filter(x => x.includes('->')).map(x => x.split(/ \(.* -> /)).forEach(x => {
    parents.push(x[0])

    x[1].split(', ').forEach(children.add, children)
  })

  return parents.filter(x => !children.has(x))[0]
}
const part1 = (rawInput) => root(parseInput(rawInput))

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  const weight = {}
  const children = {}

  input.forEach(x => {
    const [a, b] = x.split(' -> ')
    const [node, cost] = a.split(' ')
    weight[node] = eval(cost)
    if (b) {
      children[node] = b.split(', ')
    }
  })

  const dfs = (node) => {
    var sum = weight[node]
    if (!children[node])
      return sum
    const weights = children[node].map(x => dfs(x))
    const min = Math.min(...weights)
    const max = Math.max(...weights)
    if (min != max) {
      const count = [0, 0]
      for (var i = 0; i < weights.length; i++) {
        count[weights[i] == min ? 0 : 1]++
      }
      const index = weights.indexOf(count[0] == 1 ? min : max)
      throw weight[children[node][index]] + (max-min) * (count[0] == 1 ? 1 : -1)
    }
    return sum + weights.reduce((acc, x) => acc + x)
  }
  try {
    dfs(root(input))
  } catch (e) {
    return e
  }
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
