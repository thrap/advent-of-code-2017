import run from "aocrunner"

const rows = input => input.split('\n').map(l => l.split('\t'))

const part1 = (input) => rows(input).reduce((acc, row) => acc + Math.max(...row)-Math.min(...row), 0)

const part2 = (input) => {

}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
