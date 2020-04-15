import Vue from 'vue'
import config from '@/config/config'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: config.google_api_key
  }
})
