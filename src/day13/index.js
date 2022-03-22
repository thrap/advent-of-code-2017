import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n').map(l => l.split(': ').map(x => +x))

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  const pos = {}
  const range = {}
  const dir = {}
  input.forEach(([i, r]) => {
    pos[i] = 0
    range[i] = r
    dir[i] = 1
  })
  const max = Math.max(...Object.keys(pos))

  var severity = 0
  for (var i = 0; i <= max; i++) {
    if (pos[i] == 0) {
      severity += i * range[i]
    }
    Object.keys(pos).forEach(x => {
      pos[x] = pos[x] + dir[x]
      if (pos[x] == range[x] - 1) {
        dir[x] = -1
      } else if (pos[x] == 0) {
        dir[x] = 1
      }
    })
  }

  return severity
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)
  const constraints = []
  input.forEach(([x, range]) => {
    var a = (range-1)*2
    var b = (a-x%a)%a
    constraints.push((n) => n % a != b)
  })

  for (var i = 0; true; i++) {
    if (constraints.every(f => f(i)))
      return i
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
