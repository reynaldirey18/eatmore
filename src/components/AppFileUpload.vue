<template>
    <div>
        <div class="app-button-upload" @click="handleTriggerUpload" :style="customStyle">
            <slot name="innerDescription">
              <v-icon class="align-self-center">mdi-file-image</v-icon>
            </slot>
            <div v-if="!noPreview" v-bind="imagePreview"></div>
        </div>
        <p class="text-center" style="width:140px">{{description}}</p>
        <input class="d-none" type="file" @change="handleFileChange" :accept="accept" ref="file" />
    </div>
</template>

<script>
export default {
  name: 'AppFileUpload',
  props: ['accept', 'value', 'description', 'fullWidth', 'width', 'height', 'noPreview'],
  data () {
    return {
      imagePreview: null
    }
  },
  computed: {
    customStyle () {
      return {
        width: this.width,
        height: this.height
      }
    }
  },
  watch: {
    value (newValue, oldValue) {
      if (newValue !== oldValue) {
        const image = URL.createObjectURL(newValue)
        this.imagePreview = {
          style: `
                position: absolute;
                background-image: url('${image}');
                background-color: transparent;
                background-size: cover;
                position: absolute;
                width: 100%;
                height: 100%;

            `
        }
      }
    }
  },
  methods: {
    handleTriggerUpload () {
      this.$refs.file.click()
    },
    handleFileChange (e) {
      const input = e.target || this.$refs.file
      const file = input.files ? input.files[0] : null
      if (file) {
        const image = URL.createObjectURL(file)
        this.imagePreview = {
          style: `
                position: absolute;
                background-image: url('${image}');
                background-color: transparent;
                background-size: cover;
                position: absolute;
                width: 100%;
                height: 100%;

            `
        }
        this.$emit('onFileChange', file)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-button-upload {
  display: flex;
  min-width: 140px;
  height: 140px;
  background: #F4F5F6;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
}
</style>
