<template>
    <div class="px-4 py-6">
        <h1 class="app-title mb-10">Location</h1>
        <div class="mb-10">
            <gmap-map
                ref="map"
                :center="mapCenter"
                :zoom="12"
                style="height: 300px"
                @click="handleMapClick"
                :options="{
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    disableDefaultUi: false
                }"
            >
                <gmap-marker
                    ref="marker"
                ></gmap-marker>
            </gmap-map>
        </div>
        <div>
            <p class="app-title-small" style="margin-bottom: 0px">Google Map Coordinat</p>
            <v-text-field
                placeholder="Eg. -6.870803, 107.583518"
                single-line
                dense
                outlined
                v-model="coordText"
            ></v-text-field>
            <p>{{"Preview: " + addressText || "&nbsp;"}}</p>
        </div>
        <div class="mt-8 d-flex justify-end align-end">
            <v-btn @click.prevent="handleFormSubmit" color="#FDB526" dark><span class="text-capitalize">save change</span></v-btn>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      map: null,
      marker: null,
      coordText: '',
      mapCenter: { lat: -6.9034443, lng: 107.5731165 },
      addressText: ''
    }
  },
  watch: {
    coordText (newVal, oldVal) {
      if (newVal !== oldVal) {
        const [lat, lng] = newVal.split(',')
        this.getAddress({ lat, lng })
      }
    }
  },
  methods: {
    handleMapClick (e) {
      const lat = e.latLng.lat()
      const lng = e.latLng.lng()
      this.map.panTo({ lat, lng })
      this.marker.$markerObject.setPosition({ lat, lng })
      this.coordText = `${lat}, ${lng}`
    },
    getAddress (coord) {
      this.$geocoder.send(coord, response => {
        const addressText = response.results[0].formatted_address
        this.addressText = addressText
      })
    }
  },
  mounted () {
    this.$refs.map.$mapPromise.then(map => {
      this.map = map
    })
    this.marker = this.$refs.marker
  }
}
</script>
