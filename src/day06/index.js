import run from "aocrunner"

const parse = input => input.split('\t').map(x => +x)

const cycles = arr => {
  const seen = {}
  for (var cycles = 0; true; cycles++) {
    if (seen[arr]) return cycles

    seen[arr] = true
    var max = Math.max(...arr)
    var i = arr.indexOf(max)
    arr[i] = 0
    for (var di = 1; di <= max; di++) {
      arr[(i+di)%arr.length]++
    }
  }
}

run({
  part1: {
    solution: (input) => cycles(parse(input)),
  },
  part2: {
    solution: (input) => {
      const arr = parse(input)
      cycles(arr)
      return cycles(arr)
    },
  },
})
