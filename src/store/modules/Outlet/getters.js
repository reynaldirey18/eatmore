const didItLoad = (state) => {
  return state.isLoaded
}

const events = (state) => {
  var listEvent = []
  state.specialHours.forEach(element => {
    const event = {
      name: '',
      start: element.hour_date,
      end: element.hour_date,
      color: 'blue'
    }
    listEvent.push(event)
  })
  return listEvent
}

export default {
  didItLoad,
  events
}
