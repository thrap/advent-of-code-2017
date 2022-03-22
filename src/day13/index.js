import run from "aocrunner"

const parse = input => input.split('\n').map(l => l.split(': '))

const part1 = (input) => {
  return parse(input).reduce((acc, [x, range]) => {
    var a = (range-1)*2
    var b = (a-x%a)%a
    return acc + (b == 0 ? x*range : 0)
  }, 0)
}

const part2 = (input) => {
  const constraints = parse(input).map(([x, range]) => {
    var a = (range-1)*2
    var b = (a-x%a)%a
    return (n) => n % a != b
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
