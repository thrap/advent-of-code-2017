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
  const input = parseInput(rawInput)

  return
}

const part1Input = `p=<3,0,0>, v=<2,0,0>, a=<-1,0,0>
p=<4,0,0>, v=<0,0,0>, a=<-2,0,0>`
const part2Input = `p=<-6,0,0>, v=<3,0,0>, a=<0,0,0>
p=<-4,0,0>, v=<2,0,0>, a=<0,0,0>
p=<-2,0,0>, v=<1,0,0>, a=<0,0,0>
p=<3,0,0>, v=<-1,0,0>, a=<0,0,0>`
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
