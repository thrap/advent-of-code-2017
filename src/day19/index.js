import run from "aocrunner"

const re = /(.*)/
const parseLine = l => l.match(re).slice(1).map(x => +x ? +x : x)
const parseInput = rawInput => rawInput.split('\n')//.map(parseLine)

const dirs = [[0,1],[-1,0],[0,-1],[1,0]]
const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  var x = 0
  var y = input[x].indexOf('|')
  var dirI = 3

  console.log(dirs[dirI]);

  var path = ''
  for(var steps = 0; steps < 300000; steps++) {
    const c = input[x][y]
    if ((c || ' ') == ' ') {
      break
    }
    if (/[A-Z]/.test(c)) {
      path += c
    }
    if (c == '+') {
      const a = dirs[(4+dirI-1)%4]
      const b = dirs[(4+dirI+1)%4]
      const ac = input[x+a[0]]?.[y+a[1]] || ' '
      const bc = input[x+b[0]]?.[y+b[1]] || ' '

      if (ac != ' ' && bc != ' ') {
        console.log();
        throw 1
      }

      if (ac != ' ') {
        dirI = (4+dirI-1)%4
      } else if (bc != ' ') {
        dirI = (4+dirI+1)%4
      } else {
        console.log("å fuck ingen");
        throw 1
      }
    }
    const [dx, dy] = dirs[dirI]
    x += dx
    y += dy
  }

  return path
}

const part2 = (rawInput) => {

}

const part1Input = "     |          \n"+
                   "     |  +--+    \n"+
                   "     A  |  C    \n"+
                   " F---|----E|--+ \n"+
                   "     |  |  |  D \n"+
                   "     +B-+  +--+ "
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
  trimTestInputs: false,
  onlyTests: false,
})
