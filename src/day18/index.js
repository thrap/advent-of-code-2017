import run from "aocrunner"

const parse = rawInput => rawInput.split('\n').map(l => l.split(' '))

const Program = function(reg, program) {
  var out = []
  var i = 0
  var rc = []
  this.sent = 0

  const inst = {
    set: (x, y) => reg[x] = y,
    add: (x, y) => reg[x] = (reg[x] || 0) + y,
    mul: (x, y) => reg[x] = (reg[x] || 0) * y,
    mod: (x, y) => reg[x] = (reg[x] || 0) % y,
    snd: (x) => ++this.sent & out.push(reg[x] || 0),
    rcv: (x) => reg[x] = rc.shift(),
    jgz: (x, y) => i += (+x || reg[x] > 0) ? (y - 1) : 0
  }

  this.recieve = (arr) => rc.push(...arr)
  this.output = () => out.splice(0, out.length)
  this.run = () => {
    var ran = false
    for (; i < program.length; i++) {
      const [s, x, y] = program[i]
      if (s == 'rcv' && rc.length == 0) {
        return ran
      }
      ran = true
      inst[s](x, /\d/.test(y) ? +y : reg[y] || 0)
    }
  }
}

const part1 = (input) => {
  var p = new Program({}, parse(input))
  p.run()
  return p.output().pop()
}

const part2 = (input) => {
  const program = parse(input)

  var p0 = new Program({ p: 0 }, program)
  var p1 = new Program({ p: 1 }, program)

  for (var i = 0; p0.run() || p1.run(); i++) {
    p0.recieve(p1.output())
    p1.recieve(p0.output())
  }
  return p1.sent
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
