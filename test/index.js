const solve_graph = require('../lib/index')

describe('Simple graph with 1 arc', () => {
  const arcs = [
    {start: 'a', end: 'b'},
  ]

  it('Should reach b', () => {
    expect(solve_graph('a', 'b', arcs)).toEqual(true)
  })

  it('Should never reach c', () => {
    expect(solve_graph('a', 'c', arcs)).toEqual(false)
  })

  it('Should reach start state', () => {
    expect(solve_graph('a', 'a', arcs)).toEqual(true)
  })
})

describe('Complex graph with loops and intermediary nodes', () => {
  const arcs = [
    {start: 'a', end: 'b'},
    {start: 'b', end: 'c'},
    {start: 'c', end: 'a'},
    {start: 'c', end: 'd'},
    {start: 'e', end: 'a'},
  ]

  it('Should reach d', () => {
    expect(solve_graph('a', 'd', arcs)).toEqual(true)
  })

  it('Should never reach nodes with no arcs leading to it', () => {
    expect(solve_graph('a', 'e', arcs)).toEqual(false)
  })

  it('Should reach all nodes in a loop', () => {
    expect(solve_graph('a', 'a', arcs)).toEqual(true)
    expect(solve_graph('a', 'b', arcs)).toEqual(true)
    expect(solve_graph('a', 'c', arcs)).toEqual(true)
  })
})
