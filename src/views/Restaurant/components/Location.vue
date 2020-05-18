<template>
  <div class="px-4 py-6">
    <h1 class="app-title mb-10">Location</h1>
    <div class="form-input">
      <p class="label-form">Search Address</p>
      <gmap-autocomplete  @place_changed="processLocationChanged" class="introInput"></gmap-autocomplete>
      <div class="mb-6 mt-4">
        <gmap-map
          ref="map"
          :center="mapCenter"
          :zoom="15"
          style="height: 275px"
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
            :draggable="true"
            :position="mapCenter"
            @drag="updateCoordinates"
          ></gmap-marker>
        </gmap-map>
      </div>
      <ValidationObserver ref="form" v-slot="{ handleSubmit }">
        <v-form @submit.prevent="handleSubmit(submitForm)">
          <p class="label-form">Address</p>
          <ValidationProvider v-slot="{ errors }" name="Address" rules="required">
            <v-text-field
              v-model="address"
              :error-messages="errors"
              outlined
              dense
              readonly
            >
            </v-text-field>
          </ValidationProvider>
          <p class="label-form">Detail Address</p>
          <ValidationProvider v-slot="{ errors }" name="Detail address" rules="required">
            <v-text-field
              v-model="detailAddress"
              :error-messages="errors"
              outlined
              dense
            >
            </v-text-field>
          </ValidationProvider>
          <div class="mt-8 d-flex justify-end align-end">
            <v-btn @click.prevent="handleFormSubmit" color="#FDB526" dark><span class="text-capitalize">save change</span></v-btn>
          </div>
        </v-form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('outlet')

export default {
  data () {
    return {
      address: null,
      detailAddress: null,
      map: null,
      marker: null,
      coordText: '',
      mapCenter: { lat: -6.9034443, lng: 107.5731165 },
      addressText: ''
    }
  },
  mounted () {
    this.$store.dispatch('outlet/viewProfile')
    this.$refs.map.$mapPromise.then(map => {
      this.map = map
    })
    this.marker = this.$refs.marker
  },
  computed: {
    ...mapState({
      dataProfil: state => state.dataProfil
    })
  },
  watch: {
    dataProfil (newVal) {
      this.address = newVal.outlet_address
      this.detailAddress = newVal.outlet_address_detail
      this.mapCenter.lat = newVal.outlet_latitude
      this.mapCenter.lng = newVal.outlet_longitude
    },
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
        this.address = addressText
      })
    },
    updateCoordinates (e) {
      const lat = e.latLng.lat()
      const lng = e.latLng.lng()
      this.coordText = `${lat}, ${lng}`
    },
    processLocationChanged (addressData) {
      this.mapCenter.lat = addressData.geometry.location.lat()
      this.mapCenter.lng = addressData.geometry.location.lng()
      this.coordText = `${this.mapCenter.lat}, ${this.mapCenter.lng}`
      this.address = addressData.formatted_address
    }
  }
}
</script>

<style lang="scss" scoped>
input.introInput {
  border: 1px solid #a1a0a0 !important;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
}
</style>
