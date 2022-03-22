import run from "aocrunner"

const parseInput = rawInput => rawInput.match(/(\d+)[^\d]+(\d+)/).slice(1)

const part1 = (rawInput) => {
  var [a, b] = parseInput(rawInput)

  var count = 0
  var pow = 1 << 16
  for(var i = 0; i < 40000000; i++) {
    a = (a*16807) % 2147483647
    b = (b*48271) % 2147483647

    if (a % pow == b % pow) {
      count++
    }
  }

  return count
}

const part2 = (rawInput) => {
  var [a, b] = parseInput(rawInput)

  var count = 0
  var pow = 1 << 16
  for(var i = 0; i < 5000000; i++) {
    do {
      a = (a*16807) % 2147483647
    } while(a % 4 != 0)
    do {
      b = (b*48271) % 2147483647
    } while (b % 8 != 0)

    if (a % pow == b % pow) {
      count++
    }
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
