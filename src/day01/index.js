import run from "aocrunner"

const solve = (input, next) => {
  var sum = 0
  for (var i = 0; i < input.length; i++) {
    if (input[i] == input[next(i)%input.length])
      sum += +input[i]
  }
  return sum
}

run({
  part1: {
    solution: (input) => solve(input, x => x+1),
  },
  part2: {
    solution: (input) => solve(input, x => x+input.length/2),
  },
})
