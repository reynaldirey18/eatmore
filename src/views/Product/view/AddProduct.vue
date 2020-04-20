<template>
  <div>
    <h1 class="app-title mb-5">Business Profile</h1>

    <v-card>
      <v-toolbar class="app-toolbar-menu" dense short flat color="white">
        <v-toolbar-title class="app-subtitle app-toolbar-menu-title">Photo Product</v-toolbar-title>
        <v-toolbar-title class="pl-3 app-subtitle">Product Information</v-toolbar-title>
      </v-toolbar>
      <v-row>
        <v-col class="app-menu ml-3 text-center" cols="auto">
          <app-file-upload
              height="250px"
              @onFileChange="onFileChange"
              :value="ProductImage">
          </app-file-upload>
          <p class="text-grey-light">Maximum size 3 mb</p>
          <p class="text-regular text-left">Pro tips: Use photo product with high resolution</p>
          <v-btn
            width="100%"
            @click.prevent="handleFormSubmit"
            color="#FAFAFA" class="text-center w-full"
            dark>
            <span class="text-blue-sm">Upload Image</span>
          </v-btn>
        </v-col>
        <v-col cols="9">a</v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import AppFileUpload from '@/components/AppFileUpload'
export default {
  name: 'AddProduct',
  components: {
    AppFileUpload
  },
  data () {
    return {
      ProductImage: null
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
      this.ProductImage = file
    }
  }
}
</script>
