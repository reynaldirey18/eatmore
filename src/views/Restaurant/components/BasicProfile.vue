<template>
    <div class="pl-4 pt-6">
        <h1 class="app-title">Basic Profile</h1>
        <form>
            <v-row>
                <v-col cols="3">
                    <app-file-upload
                        description="Maximum size 2 mb"
                        @onFileChange="onFileChange"
                        :value="businessLogo">
                    </app-file-upload>
                </v-col>
                <v-col cols="9">
                    <p class="app-subtitle">Business Logo</p>
                    <p>This logo will appear when customer find your restaurant.</p>
                    <p>Pro tips: Use logo with dimension 1:1</p>
                    <v-btn @click="handleTriggerUpload"><span class="text--primary">Upload Image</span></v-btn>
                    <input class="d-none" type="file" @change="handleFileChange" :accept="accept" ref="file" />
                </v-col>
            </v-row>
        </form>
    </div>
</template>

<script>
import AppFileUpload from '@/components/AppFileUpload'
export default {
  name: 'ComponentBasicProfile',
  components: {
    AppFileUpload
  },
  data () {
    return {
      accept: '',
      businessLogo: null,
      businessName: '',
      businessDescription: '',
      businessType: '',
      tags: []
    }
  },
  methods: {
    handleTriggerUpload () {
      this.$refs.file.click()
    },
    handleFileChange (e) {
      console.log(e)
      const input = e.target || this.$refs.file
      const file = input.files ? input.files[0] : null

      this.onFileChange(file)
    },
    onFileChange (file) {
      this.businessLogo = file
    }
  }
}
</script>
