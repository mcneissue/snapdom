const withThunkHandler = stateManager => state => {
	const { listen, update, hatch } = stateManager(state)
  let currState

  listen(v => { currState = v })
  return {
    listen, hatch,
    update(next) {
      if (typeof next === 'function') {
        update(next(currState))
      }	else {
        update(next)
      }
    }
  }
}

export default withThunkHandler