// Based on breadth-first search
function solve_graph(start, end, arcs) {
  if (start === end) return true

  const queue = [start]
  const visited = {[start]: true}

  while (queue.length) {
    const curr = queue.shift()

    for (let i of arcs.filter(i => i.start === curr)) {
      if (i.end === end) return true

      if (!visited[i.end]) {
        visited[i.end] = true
        queue.push(i.end)
      }
    }
  }

  return false
}

module.exports = solve_graph
