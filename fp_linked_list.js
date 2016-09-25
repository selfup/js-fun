const Node = (d = null, n = null) => {
  return {data: d, next_node: n}
}

const append = (list, data) => {
  tail(list).next_node = Node(data)
  return list
}

const tail = node => {
  if (!node.next_node) return node
  return tail(node.next_node)
}

(() => {
  const list = append(
                 append(
                   append(
                     append(Node(), "ok"), "wow"), "nice"), "omg")
  console.log(list)
})()
