import run from "aocrunner"

const part1 = (input) => {
  const step = +input
  var pos = 0
  var arr = [0]
  for (var i = 1; i <= 2017; i++) {
    pos += step
    var x = pos%arr.length+1
    arr.splice(x, 0, i)
    pos = x
  }
  return arr[pos%arr.length+1]
}

const part2 = (input) => {
  const step = +input
  var pos = 0
  var last = 0
  for (var i = 1; i <= 50000000; i++) {
    pos = (pos + step)%i+1
    if (pos == 1) {
      last = i
    }
  }
  return last
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
