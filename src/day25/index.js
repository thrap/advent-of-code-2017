import run from "aocrunner"

const part1 = (rawInput) => {
  const [a, ...stateStrs] = rawInput.split('\n\n')
  const header = /Begin in state (.).*\n.*checksum after (\d+) steps/
  var [state, stepStr] = a.match(header).slice(1)
  const steps = +stepStr
  var pos = 0
  const tape = {}

  const states = {}
  stateStrs.forEach(str => {
    const instr = /(.):\n.*0:\n.* (.).\n.* (.*).\n.* (.).\n.*1:\n.* (.).\n.* (.*).\n.* (.)./

    var arr = str.match(instr).slice(1)
    const f = ([write, dir, s]) => () => {
      state = s
      tape[pos] = write
      pos += dir == 'right' ? 1 : -1
    }
    states[arr[0]] = [f(arr.slice(1, 4)), f(arr.slice(4))]
  });

  for (var i = 0; i < steps; i++) {
    states[state][tape[pos] || 0]()
  }
  return Object.values(tape).filter(x => x == '1').length
}

const part1Input = `Begin in state A.
Perform a diagnostic checksum after 6 steps.

In state A:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state B.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the left.
    - Continue with state B.

In state B:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state A.
  If the current value is 1:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state A.`
run({
  part1: {
    tests: [
      { input: part1Input, expected: 3 },
    ],
    solution: part1,
  },
  onlyTests: false
})
