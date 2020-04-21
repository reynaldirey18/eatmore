import Vue from 'vue'
import config from '@/config/config'
import * as VueGoogleMaps from 'vue2-google-maps'
import Geocoder from '@pderas/vue2-geocoder'

Vue.use(VueGoogleMaps, {
  load: {
    key: config.google_api_key,
    libraries: 'places'
  }
})

Vue.use(Geocoder, {
  defaultCountryCode: null, // e.g. 'CA'
  defaultLanguage: null, // e.g. 'en'
  defaultMode: 'lat-lng', // or 'lat-lng'
  googleMapsApiKey: config.google_api_key
})
