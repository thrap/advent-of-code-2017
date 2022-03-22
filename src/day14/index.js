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
  const grid = parseGrid(key)
  const dirs = [[0, 1],[-1,0],[0,-1],[1,0]]
  const visited = {}
  const visit = (i, j) => {
    if (visited[[i,j]] || grid[i]?.[j] != '1') {
      return
    }
    visited[[i,j]] = true
    dirs.forEach(([di, dj]) => visit(i+di, j+dj))
  }

  var regions = 0
  for (var i = 0; i < 128; i++) {
    for (var j = 0; j < 128; j++) {
      if (grid[i][j] == '1' && !visited[[i,j]]) {
        regions++
        visit(i, j)
      }
    }
  }
  return regions
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
