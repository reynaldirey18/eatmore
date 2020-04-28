<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">New Promo</h1>
      <div class="action-add">
        <v-btn color="#3D87F4" text small class="mr-6">Save as Draft</v-btn>
        <v-btn color="#FDB526" dark small width="160px">Publish Promo</v-btn>
      </div>
    </div>
    <v-card class="pa-4 pt-2 mt-4" outlined>
      <div class="form-input">
        <p class="label-form">Type Promo</p>
        <v-select
          :items="type"
          outlined
          dense
        ></v-select>
        <p class="label-form">Title Promo</p>
        <v-form ref="form">
          <v-text-field
            v-model="title"
            placeholder="Eg. Special Offer Holiday"
            filled
            outlined
            dense
          >
          </v-text-field>
        </v-form>
        <v-row>
          <v-col cols="6">
            <app-file-upload
              height="212px"
              @onFileChange="onFileChange"
              :value="image"
            ></app-file-upload>
            <v-btn @click="handleTriggerUpload" block><span class="blue2">Upload Image</span></v-btn>
            <input class="d-none" type="file" @change="handleFileChange" :accept="accept" ref="file" />
          </v-col>
          <v-col cols="3">
            <p class="text-grey-light">Maximum size 3 mb</p>
            <p>Pro tips: Use photo Banner with high resolution</p>
          </v-col>
          <v-col cols="3"></v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
import AppFileUpload from '@/components/AppFileUpload'

export default {
  name: 'Add Promo',
  components: {
    AppFileUpload
  },
  data () {
    return {
      type: ['Premium', 'Regular'],
      title: null,
      image: null
    }
  },
  methods: {
    handleTriggerUpload () {
      this.$refs.file.click()
    },
    handleFileChange (e) {
      const input = e.target || this.$refs.file
      const file = input.files ? input.files[0] : null
      this.onFileChange(file)
    },
    onFileChange (file) {
      this.image = file
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
