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
          <p class="label-form">Address</p>
          <v-form ref="form">
            <v-text-field
              v-model="address"
              outlined
              dense
              disabled
            >
            </v-text-field>
          </v-form>
          <p class="label-form">Business Tags</p>
          <v-autocomplete
              ref="tagAutocomplete"
              v-model="tags"
              :items="tagList"
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
        </div>
        <v-btn block color="#FDB526" dark class="mt-6">Create Outlet</v-btn>
        <v-btn text block color="#F32626" @click="getBack" class="mt-2">Back</v-btn>
      </v-list-item-content>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'address-section',
  data () {
    return {
      address: null,
      tagList: ['Smooking Area', 'Contain Pork', 'Cafe', 'Cake', 'Sweet', 'No Smoking'],
      tagInputValue: '',
      tags: [],
      map: null,
      marker: null,
      coordText: '',
      mapCenter: { lat: -6.9034443, lng: 107.5731165 },
      addressText: ''
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
