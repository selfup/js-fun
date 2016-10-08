Array.prototype.last = function() {
  return this[this[(this.length - 2)]]
}

const ok = [1, 2, 234234]
console.log(ok.last())

const Demo = self => {
  self.state = {wow: "wow", nice: "nice"}

  self.methods = {
    setState: newState => {
      if (newState === self.state) throw new TypeError(
        `Please don't use refrences to "state"`
      )
      self.state = Object.assign(self.state, newState)
    }
  }

  return Object.assign(self.state, self.methods)
}

const d = Demo({})
d.setState({wow: "okkk", nice: "lol"})
console.log([d.wow, d.nice])
