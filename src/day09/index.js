import run from "aocrunner"

const cancel = input => input.replace(/\!./g, '')

const part1 = (input) => {
  const groups = cancel(input).replace(/<[^>]*>/g, '').replace(/,/g, '')
  var sum = 0
  var depth = 0
  for(var i = 0; i < groups.length; i++) {
    if (groups[i] == '{') {
      depth++
      sum += depth
    } else {
      depth--
    }
  }
  return sum
}

const part2 = (input) => {
  var sum = 0
  cancel(input).replace(/<[^>]*>/g, b => {
    sum += b.length - 2
  })
  return sum
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
