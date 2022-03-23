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

const part2 = (rawInput) => {
  const program = parseInput(rawInput)

  const par = {
    set: (x, y) => `${x} = ${y};`,
    sub: (x, y) => `${x} = ${x} - ${y};`,
    mul: (x, y) => `${x} = ${x} * ${y};`,
  }

  const parse = (indent, index, max) => {
    for (var i = index; i < max; i++) {
      var [s, x, y] = program[i]

      for (var j = i + 1; j < max; j++) {
        if (program[j][0] == 'jnz' && program[j][2] == i-j) {
          console.log(indent + 'do {')
          indent+= '  '
        }
      }

      if (s == 'jnz' && y > 0) {
        var steps = +y
        console.log(indent + `if (${x} == 0) {`)
        if (steps + index >= program.length) {
          console.log(indent + "  return h");
        } else {
          parse(indent + "  ", i+1, i+1+steps-1)
          i+=steps-1
        }
        console.log(indent + "}");
      } else if ((s == 'jnz' && y < 0)) {
        indent = indent.substring(0, indent.length-2)
        console.log(indent + `} while (${x} != 0)\n`);
      } else {
        console.log(indent + par[s](x, y));
      }
    }
    return
  }

  console.log("var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0;");
  parse('', 0, program.length)

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
