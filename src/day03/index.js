import run from "aocrunner"

const part1 = (input) => {
  var min = Number.MAX_VALUE
  for (var layer = 0; 4*(layer-1)*(layer-1) <= input; layer ++) {
    for (var i = 0; i <= 3; i++) {
      var x = (2*layer+1)*(2*layer+1)-layer-2*layer*i;

      min = Math.min(layer + Math.abs(input - x), min)
    }
  }
  return min
}

const part2 = (input) => {
  const dirs = [[0, 1], [-1, 0], [0, -1], [1, 0]]

  const values = {'0,0': 1}

  const around = ([x, y]) => {
    const dirs = [[0,1],[1,0],[-1,0],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]
    return dirs.map(([dx, dy]) => values[[x+dx, y+dy]]).filter(x => x).reduce((acc, x) => acc + x)
  }

  var pos = [0, 0]
  for (var layer = 1; true; layer ++) {
    pos[0]+=1
    values[pos] = around(pos)
    var start = (2*layer-1)*(2*layer-1)+1
    var end = (2*layer+1)*(2*layer+1)

    for (var dirI = 0; dirI <= 3; dirI++) {
      var numSteps = (end-start+1)/4 - (dirI == 0 ? 1 : 0)
      for (var step = 0; step < numSteps; step++) {
        var [dx, dy] = dirs[dirI]
        pos[0] += dx
        pos[1] += dy
        values[pos] = around(pos)
        if (values[pos] > input) {
          return values[pos]
        }
      }
    }
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
