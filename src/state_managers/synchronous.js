const synchronousStateManager = initState => {
  const subscribers = []
  let state = {
    value: Object.assign({}, initState)
  }
  return {
    listen(subscriber) {
      subscribers.push(subscriber)
      subscriber(state.value)
    },
    update(next) {
      state.value = next
      subscribers.forEach(s => s(state.value))
    },
    hatch: state
  }
}

export default synchronousStateManager