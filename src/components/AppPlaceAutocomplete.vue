<template>
  <div class="input-container">
    <v-icon>mdi-magnify</v-icon>
    <gmap-autocomplete @place_changed="handlePlaceChange" class="input-field">
    </gmap-autocomplete>
  </div>
</template>

<script>
export default {
  name: 'PlaceAutocomplete',
  data () {
    return {
    }
  },
  methods: {
    handlePlaceChange (e) {
      this.$emit('setPlace', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-container {
    display:flex;
    width: 100%;
    padding: 3px;
    margin: 10px 0px;
    border: 1px solid #DADADA;
    border-radius: 4px;
    .input-field {
      border: none;
      display: flex;
      flex: 1;
      outline: none;
    }
}
</style>
