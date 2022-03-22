import run from "aocrunner"

const parse = input => input.split('\n').reduce((acc, l) => {
  const [node, b] = l.split(' <-> ')
  acc[node] = b.split(', ')
  return acc
}, {})

const part1 = (input) => {
  const graph = parse(input)
  const visited = new Set()

  const dfs = node => {
    if (visited.has(node))
      return
    visited.add(node)
    graph[node].forEach(c => dfs(c))
  }
  dfs('0')

  return visited.size
}

const part2 = (input) => {
  const graph = parse(input)
  const remaining = new Set(Object.keys(graph))

  const dfs = node => {
    if (!remaining.has(node))
      return
    remaining.delete(node)
    graph[node].forEach(c => dfs(c))
  }
  for (var count = 0; remaining.size != 0; count++) {
    dfs(remaining.values().next().value)
  }

  return count
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
