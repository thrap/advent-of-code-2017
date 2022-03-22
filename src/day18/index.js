import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n').map(l => l.split(' '))

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  const reg = {}

  var out = 0
  var i = 0
  const inst = {
    set: (x, y) => reg[x] = y,
    add: (x, y) => reg[x] = (reg[x] || 0) + y,
    mul: (x, y) => reg[x] = (reg[x] || 0) * y,
    mod: (x, y) => reg[x] = (reg[x] || 0) % y,
    snd: (x) => out = reg[x] || 0,
    rcv: (x) => {
      if (reg[x] != 0) {
        i = input.length
      }
    },
    jgz: (x, y) => {
      if ((/\d/.test(x) ? +x : reg[x]) > 0) {
        i += y - 1
      }
    }
  }

  for (i = 0; i < input.length; i++) {
    const [s, x, y] = input[i]

    inst[s](x, /\d/.test(y) ? +y : reg[y] || 0)
  }

  return out
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `set a 1
add a 2
mul a a
mod a 5
snd a
set a 0
rcv a
jgz a -1
set a 1
jgz a -2`
const part2Input = part1Input
run({
  part1: {
    tests: [
      { input: part1Input, expected: '' },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      { input: part2Input, expected: '' },
    ],
    solution: part2,
  },
  onlyTests: false,
})
