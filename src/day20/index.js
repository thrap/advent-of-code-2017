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

const canCrash = (arr, b) => {

  const ts = []
  var t = 0
  for (var i = 0; i < 3; i++) {
    const a1 = arr[6+i]
    const v1 = arr[3+i]
    const p1 = arr[0+i]

    const a2 = b[6+i]
    const v2 = b[3+i]
    const p2 = b[0+i]

    var p = (p1 - p2)
    var v = (v1-v2)
    var a = (a1-a2)
    if (a < 0) {
      a*=-1
      p*=-1
      v*=-1
    }

    if (a == 0) {
      t = -p/v
      // blir dette riktig?
      ts.push([t, -t])
    } else {
      const sols = [(-a - 2 * v + Math.sqrt(-8*a*p + Math.pow(a + 2 *v, 2)))/(2*a), -(a + 2 * v + Math.sqrt(-8*a*p + Math.pow(a + 2 *v, 2)))/(2*a)]
      ts.push(sols)
      t = (-a - 2 * v + Math.sqrt(-8*a*p + Math.pow(a + 2 *v, 2)))/(2*a)
    }
  }
  const count = {}
  for (var i = 0; i < 3; i++) {
    ts[i].forEach(x => {
      count[x] = (count[x] || 0) + 1
    })
  }
  var T = Object.keys(count).find(x => count[x] >= 3)
  return T
}

const part2 = (rawInput) => {
  var input = parseInput(rawInput)

  var count = 0
  input.forEach(a => {
    input.forEach(b => {
      if (a != b && !isNaN(canCrash(a, b))) {
        count ++
      }
    })
  })
  console.log(count);


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
