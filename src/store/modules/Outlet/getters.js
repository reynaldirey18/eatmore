const didItLoad = (state) => {
  return state.isLoaded
}

const eventsLoaded = (state) => {
  return state.eventsLoaded
}

export default {
  didItLoad,
  eventsLoaded
}
