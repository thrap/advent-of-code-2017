import run from "aocrunner"

const parse = input => input.split('\n').map(l => l.split(' '))

const solve = (input, f) => {
  return parse(input).filter(pass => {
    var seen = {}
    for (var i = 0; i < pass.length; i++) {
      if (seen[f(pass[i])])
        return false
      seen[f(pass[i])] = true
    }
    return true
  }).length
}

run({
  part1: {
    solution: input => solve(input, word => word),
  },
  part2: {
    solution: input => solve(input, ([...word]) => word.sort()),
  },
})
