const SET_REGISTRATION = (state, payload) => {
  state.dataRegistration = payload
}

const SET_ID_OUTLET = (state, payload) => {
  state.idOutlet = payload
}

const SET_CATEGORY = (state, payload) => {
  state.outletCategory = payload
}

const SET_TAG = (state, payload) => {
  state.outletTag = payload
}

const SET_LIST = (state, payload) => {
  state.outletList = payload
  state.lengthList = payload.length
}

const IS_LOADED = (state) => {
  state.isLoaded = true
}

const SET_PROFIL = (state, payload) => {
  state.dataProfil = payload
}

const SET_EDIT = (state, payload) => {
  state.editProfil = payload
}

const SET_SPECIAL_HOURS = (state, payload) => {
  state.specialHours = payload
  var listEvent = []
  payload.forEach(element => {
    var startTime = element.hour_start_date + ' ' + element.hour_start_time
    var endTime = element.hour_end_date + ' ' + element.hour_end_time
    const event = {
      name: '',
      start: startTime,
      end: endTime,
      color: 'blue'
    }
    listEvent.push(event)
  })
  state.events = listEvent
}

const EVENTS_LOADED = (state) => {
  state.eventsLoaded = true
}

const SET_YEAR = (state, payload) => {
  state.year = payload
}

const SET_MONTH = (state, payload) => {
  state.month = payload
}

const SET_CREATE_SPECIAL = (state, payload) => {
  state.dataSpecialHours = payload
}

const SET_ID_EVENT = (state, payload) => {
  state.idClickedEvent = payload
}

const SET_BUSINESS_HOURS = (state, payload) => {
  state.businessHours = payload
}

const UPDATE_TIME_BUSINESS = (state, payload) => {
  state.businessHours = payload
}

const NEW_BUSINESS_TIME = (state, payload) => {
  state.newBusinessHours = payload
}

export default {
  SET_REGISTRATION,
  SET_ID_OUTLET,
  SET_CATEGORY,
  SET_TAG,
  SET_LIST,
  IS_LOADED,
  SET_PROFIL,
  SET_EDIT,
  SET_SPECIAL_HOURS,
  EVENTS_LOADED,
  SET_YEAR,
  SET_MONTH,
  SET_CREATE_SPECIAL,
  SET_ID_EVENT,
  SET_BUSINESS_HOURS,
  UPDATE_TIME_BUSINESS,
  NEW_BUSINESS_TIME
}
