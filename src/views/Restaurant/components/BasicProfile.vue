<template>
    <div class="px-4 pt-6">
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
                    <p class="app-title-small">Business Logo</p>
                    <p>This logo will appear when customer find your restaurant.</p>
                    <p>Pro tips: Use logo with dimension 1:1</p>
                    <v-btn @click="handleTriggerUpload"><span class="text--primary">Upload Image</span></v-btn>
                    <input class="d-none" type="file" @change="handleFileChange" :accept="accept" ref="file" />
                </v-col>
            </v-row>
            <div>
                <p class="app-title-small" style="margin-bottom: -5px">Business Name</p>
                <v-text-field
                    label="Business Name"
                    placeholder="Eg. floor1 or floor for cafe & resto"
                    single-line
                    dense
                    outlined
                ></v-text-field>
            </div>
            <div>
                <p class="app-title-small" style="margin-bottom: -5px">Business Description</p>
                <v-textarea
                outlined
                dense
                placeholder="Eg. All floor smoking area"
                ></v-textarea>
            </div>
            <div>
                <p class="app-title-small" style="margin-bottom: -5px">Business Type</p>
                <v-select
                dense
                :items="businessTypeList"
                outlined
                ></v-select>
            </div>
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
      businessTypeList: [
        {
          text: 'Restaurant',
          value: 1
        }
      ],
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
