const Node = (d = null, n = null) => {
  return {data: d, next_node: n}
}

const append = (list, data) => {
  tail(list).next_node = Node(data)
  return list
}

const appends = (list, data) => {
  const last = {node: list}
  data.forEach(e => last.node = append(list, e))
  return last.node
}

const tail = node => {
  if (!node.next_node) return node
  return tail(node.next_node)
}

(() => {
  const list = appends(Node(), ["ok", "wow", "nice", "omg"])
  console.log(list)
})()
