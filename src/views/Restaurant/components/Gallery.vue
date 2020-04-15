<template>
    <div class="px-4 py-6">
        <h1 class="app-title mb-10">Gallery</h1>
        <app-file-upload
          id="uploader"
          :multiple="true"
          :noPreview="true"
          width="100%"
          height="300px"
          @onFileChange="handleFileChange"
        >
          <template v-slot:innerDescription>
            <div class="d-flex flex-column justify-center">
              <v-icon class="align-self-center mb-7" style="font-size">mdi-folder-multiple-image</v-icon>
              <p class="app-subtitle text-center">Restaurant Gallery</p>
              <p class="text-center">You able to upload multiple image at once</p>
              <p class="text-center">Maximum size 2 mb each image</p>
            </div>
          </template>
        </app-file-upload>
        <div v-if="images.length > 0" class="gallery-wrapper" :style="galleryWidth">
          <div class="d-flex flex-row gallery">
            <div
              class="gallery-item"
              v-for="(image, i) in imageGallery"
              :key="i"
            >
              <v-img
                :src="image"
                lazy-src=""
                aspect-ratio="1"
                class="grey lighten-2"
                width="251.33"
                height="180"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular indeterminate color="dark lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </div>
          </div>
        </div>
        <p class="mt-5">This gallery will appear on your restaurant detail</p>
        <div class="mt-8 d-flex justify-end align-end">
            <v-btn @click.prevent="handleFormSubmit" color="#FDB526" dark><span class="text-capitalize">save change</span></v-btn>
        </div>
    </div>
</template>

<script>
import AppFileUpload from '@/components/AppFileUpload'
export default {
  components: {
    AppFileUpload
  },
  data () {
    return {
      uploader: '',
      images: []
    }
  },
  computed: {
    maxWidth () {
      return this.uploader.clientWidth
    },
    galleryWidth () {
      return { height: '180px', width: this.maxWidth + 'px' }
    },
    imageGallery () {
      return this.images.map(item => {
        return URL.createObjectURL(item)
      })
    }
  },
  methods: {
    handleFileChange (images) {
      this.images = [...this.images, ...images]
    }
  },
  mounted () {
    const vm = this
    const upload = document.getElementById('uploader')
    vm.uploader = upload
  }
}
</script>

<style lang="scss" scoped>
.gallery-wrapper {
  overflow: hidden;
  position: relative;
  .gallery {
    position: absolute;
    top: 0;
    bottom: -20px;
    left: 0;
    right: 0;
    overflow-x: scroll;
    .gallery-item {
      display: block;
      margin-right: 29px;
      &last-child {
        margin-right: 0;
      }
      img {
        border-radius: 4px;
      }
    }
  }
}
</style>
