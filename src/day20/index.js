import run from "aocrunner"

const re = /p=<(.+),(.+),(.+)>, v=<(.+),(.+),(.+)>, a=<(.+),(.+),(.+)>/
const parseLine = l => l.match(re).slice(1).map(x => +x)
const parseInput = rawInput => rawInput.split('\n').map(parseLine)

const step = input => {
  return input.map(([px, py, pz, vx, vy, vz, ax, ay, az]) => {
    vx += ax
    vy += ay
    vz += az
    return [px + vx, py + vy, pz + vz, vx, vy, vz, ax, ay, az]
  })
}

const part1 = (rawInput) => {
  var input = parseInput(rawInput)

  for(var i = 0; i < 1000; i++) {
    input = step(input)
  }

  var min = Number.MAX_VALUE
  var minParticle = 0
  for(var i = 0; i < input.length; i++) {
    const [px, py, pz] = input[i]
    const manhattan = Math.abs(px)+Math.abs(py)+Math.abs(pz)
    if (manhattan < min) {
      min = manhattan
      minParticle = i
    }
  }

  return minParticle
}

const part2 = (rawInput) => {
  var input = parseInput(rawInput)

  for(var steps = 0; steps < 200; steps++) {
    const pos = {}
    input.forEach(([x, y, z], i) => {
      pos[[x,y,z]] = pos[[x,y,z]] || new Set()
      pos[[x,y,z]].add(i)
    });
    const remove = new Set()
    Object.values(pos).forEach(arr => {
      if (arr.size != 1) {
        arr.forEach(x => remove.add(x))
      }
    })
    input = step(input.filter((_, x) => !remove.has(x)))
  }
  return input.length
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
