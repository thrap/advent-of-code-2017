import run from "aocrunner"

const rows = input => input.split('\n').map(l => l.split('\t'))

const sum = (input, f) => rows(input).reduce((acc, row) => acc + f(row), 0)

run({
  part1: {
    solution: input => sum(input, row => Math.max(...row)-Math.min(...row)),
  },
  part2: {
    solution: input => sum(input, row => {
      for (var i = 0; i < row.length; i++) {
        for (var j = 0; j < row.length; j++) {
          if (row[i] % row[j] == 0 && i != j)
            return row[i] / row[j]
        }
      }
    }),
  },
})
