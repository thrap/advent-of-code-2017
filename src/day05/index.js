import run from "aocrunner"

const solve = (input, f) => {
  const offsets = input.split('\n').map(x => +x)
  var i = 0
  for (var steps = 0; i >= 0 && i < offsets.length; steps++) {
    var jumps = offsets[i]
    offsets[i] = f(jumps)
    i += jumps
  }
  return steps
}

run({
  part1: {
    solution: (input) => solve(input, x => x + 1),
  },
  part2: {
    solution: (input) => solve(input, x => x >= 3 ? x - 1 : x + 1),
  },
})
