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

const dayActive = (state) => {
  return state.businessHours.filter(day => day.is_active)
}

export default {
  didItLoad,
  events,
  dayActive
}
