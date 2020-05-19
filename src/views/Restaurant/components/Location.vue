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
        <v-form @submit.prevent="handleSubmit(saveChange)">
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
            <v-btn type="submit" color="#FDB526" dark :loading="loading">save change</v-btn>
          </div>
        </v-form>
      </ValidationObserver>

      <!-- dialog success -->
      <v-dialog v-model="dialog" persistent max-width="350">
        <v-card class="pa-8 pb-10 d-flex flex-column justify-center">
          <img src="@/assets/img/success.png" alt="success" class="mx-auto">
          <v-card-title class="title-card mx-auto">Data has been saved</v-card-title>
          <v-card-actions class="pa-0">
            <v-spacer></v-spacer>
            <v-btn
              @click.prevent="dialog = false"
              color="#FDB526" class="mt-3 w-full"
              width="100%"
              dark>
              <span class="text-capitalize">Okay</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- dialog failed -->
      <v-dialog v-model="dialog2" persistent max-width="350">
        <v-card class="pa-8 pb-10 d-flex flex-column justify-center">
          <v-icon color="#F32626" size="100px">mdi-alert-circle-outline</v-icon>
          <v-card-title class="title-card mx-auto">Failed to save data</v-card-title>
          <p class="mx-auto">{{ errorMessage }}</p>
          <v-card-actions class="pa-0">
            <v-spacer></v-spacer>
            <v-btn
              @click.prevent="dialog2 = false"
              color="#FDB526" class="mt-3 w-full"
              width="100%"
              dark>
              <span class="text-capitalize">Okay</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
      addressText: '',
      loading: false,
      dialog: false,
      dialog2: false,
      errorMessage: null
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
      this.coordText = `${newVal.outlet_latitude}, ${newVal.outlet_longitude}`
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
    },
    saveChange () {
      var allData = {}
      allData.outlet_address = this.address
      allData.outlet_address_detail = this.detailAddress
      const [lat, lng] = this.coordText.split(',')
      allData.outlet_latitude = lat
      allData.outlet_longitude = lng
      var formData = new FormData()
      for (var key in allData) {
        formData.append(key, allData[key])
      }

      this.$store.commit('outlet/SET_EDIT', formData)
      this.$store.dispatch('outlet/editProfile')
        .then(response => {
          const res = response.data
          if (res.status) {
            this.dialog = true
          } else {
            this.loading = false
          }
        }).catch((error) => {
          const message = error.response.data.message
          this.errorMessage = message
          this.dialog2 = true
          this.loading = false
        })
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
