<template>
  <div>
    <v-card outlined>
      <v-card-title class="app-subtitle">Top Area</v-card-title>
      <div class="px-3">
        <app-place-autocomplete @setPlace="setPlace"></app-place-autocomplete>
          <gmap-map
            ref="map"
            :center="mapCenter"
            :zoom="12"
            style="height: 519px"
            :options="{
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false,
                disableDefaultUi: false
            }"
          >
          </gmap-map>
      </div>
    </v-card>
  </div>
</template>

<script>
import AppPlaceAutocomplete from '@/components/AppPlaceAutocomplete'
export default {
  name: 'CardTopLocation',
  components: {
    AppPlaceAutocomplete
  },
  data () {
    return {
      mapCenter: { lat: -6.9034443, lng: 107.5731165 }
    }
  },
  methods: {
    setPlace (e) {
      console.log(e)
    }
  }
}
</script>
