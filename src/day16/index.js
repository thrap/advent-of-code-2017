import run from "aocrunner"

const parseInput = rawInput => rawInput.split(',').map(([s, ...t]) => [s, ...t.join('').split('/')])

const swap = (arr, a, b) => {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

const dance = (input, str) => {
  input.forEach(([s, a, b]) => {
    if (s == 's') {
      str.push(...str.splice(0, 16-a))
    } else if (s == 'x') {
      swap(str, a, b)
    } else if (s == 'p') {
      swap(str, str.indexOf(a), str.indexOf(b))
    }
  })
  return str
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  var str = "abcdefghijklmnop".split('')

  return dance(input, str).join('')
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  const cycle = (str) => {
    const start = str.join('')
    for(var i = 1; true; i++) {
      str = dance(input, str)
      var s = str.join('')
      if (s == start) {
        return i
      }
    }
  }

  var str = "abcdefghijklmnop".split('')

  const limit = 1000000000 % cycle([...str])
  for (var i = 0; i < limit; i++) {
    str = dance(input, str)
  }
  return str.join('')
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
