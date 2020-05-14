<template>
  <div>
    <v-card class="mx-auto pa-4 pl-6 pr-6" outlined width="844">
      <v-list-item-content>
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
              <p class="label-form">Business Tags</p>
              <ValidationProvider v-slot="{ errors }" name="Tags" rules="required">
                <v-autocomplete
                  ref="tagAutocomplete"
                  v-model="tags"
                  :items="tagList"
                  :error-messages="errors"
                  chips
                  small-chips
                  deletable-chips
                  full-width
                  hide-details
                  hide-no-data
                  hide-selected
                  multiple
                  single-line
                  outlined
                  dense
                  flat
                  placeholder="Eg. Cafe, Cake, Sweet, No smoking "
                  auto-select-first
                  :value="tagInputValue"
                  @change="onTagValueChange"
                  @input="onTagInput"
                  @keyup.enter="submitTag"
                  @keyup.tab="submitTag"
                ></v-autocomplete>
              </ValidationProvider>
              <v-btn block color="#FDB526" dark class="mt-6" type="submit" :loading="loading">Create Outlet</v-btn>
              <v-btn text block color="#F32626" @click="getBack" class="mt-2">Back</v-btn>
            </v-form>
          </ValidationObserver>
        </div>
      </v-list-item-content>
    </v-card>
    <!-- dialog success -->
    <v-dialog v-model="dialog" persistent max-width="350">
      <v-card class="pa-8 pb-10 d-flex flex-column justify-center">
        <img src="@/assets/img/success.png" alt="success" class="mx-auto">
        <v-card-title class="title-card mx-auto">Register Outlet Success</v-card-title>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="closeAndNavigate"
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
        <v-card-title class="title-card mx-auto">Register Outlet Failed</v-card-title>
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
</template>

<script>
export default {
  name: 'address-section',
  props: ['dataSection1'],
  data () {
    return {
      dialog: false,
      dialog2: false,
      loading: false,
      address: null,
      detailAddress: null,
      tagList: ['Smooking Area', 'Contain Pork', 'Cafe', 'Cake', 'Sweet', 'No Smoking'],
      tagInputValue: '',
      tags: [],
      map: null,
      marker: null,
      coordText: '',
      mapCenter: { lat: -6.9034443, lng: 107.5731165 },
      addressText: '',
      errorMessage: null
    }
  },
  mounted () {
    this.$refs.map.$mapPromise.then(map => {
      this.map = map
    })
    this.marker = this.$refs.marker
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
    closeAndNavigate () {
      setTimeout(() => {
        this.$router.push('/login')
      }, 200)
    },
    getBack () {
      this.$emit('back', 1)
    },
    onTagValueChange (e) {
      console.log(e)
    },
    onTagInput (e) {
      console.log(e)
    },
    submitTag (e) {
      const value = e.target.value
      if (value) {
        const stringToMatch = new RegExp(value, 'g')
        const filter = this.tagList.filter(item => {
          return !!item.match(stringToMatch)
        })

        if (filter.length === 0) {
          const filterValue = this.tags.filter(item => {
            return item === value
          })
          if (filterValue.length === 0) {
            e.target.value = ''
            this.tagList.push(value)
            this.tags.push(value)
          }
        }
      }
    },
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
    submitForm () {
      var allData = this.dataSection1
      allData.outlet_address = this.address
      allData.outlet_address_detail = this.detailAddress
      this.tags.forEach((element, index) => {
        var key = 'outlet_tags[' + index + ']'
        allData[key] = element
      })
      const [lat, lng] = this.coordText.split(',')
      allData.outlet_latitude = lat
      allData.outlet_longitude = lng
      allData.outlet_description = '-'
      var formData = new FormData()
      for (var key in allData) {
        formData.append(key, allData[key])
      }
      this.$store.commit('outlet/SET_REGISTRATION', formData)
      this.$store.dispatch('outlet/registOutlet')
        .then(response => {
          const res = response.data
          if (res.status) {
            this.dialog = true
          } else {
            this.loading = false
          }
        }).catch((error) => {
          const message = error.response.data.messageelse
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
