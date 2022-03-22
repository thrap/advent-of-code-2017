import run from "aocrunner"
import { knot } from "../utils/index.js"

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
  return knot(rawInput)
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
