import run from "aocrunner"

const swap = (arr, a, b) => {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

const part1 = (rawInput) => {
  const input = rawInput.split(',').map(x => +x)
  var arr = Array(256).fill(0).map((_, i) => i)

  var skipSize = 0
  var current = 0
  input.forEach(length => {
    for (var i = 0; i < length/2; i++) {
      swap(arr, (current + i) % arr.length, (current + length - 1 - i) % arr.length)
    }

    current += length + skipSize
    skipSize++
  })

  return arr[0]*arr[1]
}

const part2 = (rawInput) => {
  const input = rawInput.split('').map(x => x.charCodeAt(0)).concat([17, 31, 73, 47, 23])

  var arr = Array(256).fill(0).map((_, i) => i)
  var skipSize = 0
  var current = 0
  for (var i = 0; i < 64; i++) {
    input.forEach(length => {
      for (var i = 0; i < length/2; i++) {
        swap(arr, (current + i) % arr.length, (current + length - 1 - i) % arr.length)
      }

      current += length + skipSize
      skipSize++
    })
  }

  var res = ""
  for(var i = 0; i < arr.length; i+=16) {
    var result = arr[i]
    for (var j = 1; j < 16; j++) {
      result ^= arr[i+j]
    }
    res += (result < 16 ? '0' : '') + result.toString(16)
  }

  return res
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
