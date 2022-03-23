import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n').map(l => l.split(' '))

const part1 = (rawInput) => {
  const program = parseInput(rawInput)

  var i = 0
  var reg = {}
  const inst = {
    set: (x, y) => reg[x] = y,
    sub: (x, y) => reg[x] = (reg[x] || 0) - y,
    mul: (x, y) => reg[x] = (reg[x] || 0) * y,
    jnz: (x, y) => i += ((+x || reg[x] || 0) != 0) ? (y - 1) : 0
  }
  var count = 0
  for (; i < program.length; i++) {
    const [s, x, y] = program[i]
    if (s == 'mul') {
      count++
    }
    inst[s](x, /\d/.test(y) ? +y : reg[y] || 0)
  }
  return count
}

const part2 = () => {
  const isPrime = n => {
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0)
        return false
    }
    return true
  }

  var b = 81*100 + 100000
  var c = b + 17000;
  var h = 0
  while (true) {
    if (!isPrime(b)) {
      h = h + 1
    }
    if (b == c) {
      return h
    }
    b = b + 17
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
