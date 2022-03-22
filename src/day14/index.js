import run from "aocrunner"
import { knot } from "../utils/index.js"

const toBinary = c => {
  var str = parseInt(c, 16).toString(2)
  while (str.length != 4) {
    str = '0'+str
  }
  return str
}

const binaryKnot = str => knot(str).split('').map(toBinary).join('')

const parseGrid = key => Array(128).fill(0).map((_, i) => binaryKnot(key+'-'+i))

const part1 = (key) => {
  return parseGrid(key).join('').replace(/0/g, '').length
}

const part2 = (key) => {
}

const part1Input = `flqrgnkx`
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
