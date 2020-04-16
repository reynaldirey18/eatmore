<template>
    <div class="px-4 py-6">
        <h1 class="app-title mb-10">Bank Account</h1>
        <form @submit.prevent="handleFormSubmit">
            <v-row>
                <v-col cols="3">
                    <app-file-upload
                        description="Maximum size 2 mb"
                        @onFileChange="onFileChange"
                        :value="photoIdCard">
                    </app-file-upload>
                </v-col>
                <v-col cols="9">
                    <p class="app-title-small">Photo ID card</p>
                    <p>Make sure the photo clearly.</p>
                    <p>Pro tips: Use logo with dimension 1:1</p>
                    <v-btn @click="handleTriggerUpload"><span class="text--primary">Upload Image</span></v-btn>
                    <input class="d-none" type="file" @change="handleFileChange" :accept="accept" ref="file" />
                </v-col>
            </v-row>
             <div>
                <p class="app-title-small ma-0">Type Bank</p>
                <v-select
                :value="1"
                dense
                :items="typeBankList"
                outlined
                ></v-select>
            </div>
             <div>
                <p class="app-title-small ma-0">Bank</p>
                <v-select
                :value="1"
                dense
                :items="bankList"
                outlined
                ></v-select>
            </div>
            <div>
                <p class="app-title-small ma-0">Account Number</p>
                 <v-text-field
                    single-line
                    dense
                    outlined
                ></v-text-field>
            </div>
            <div>
                <p class="app-title-small ma-0">Name Of Account Holder</p>
                 <v-text-field
                    placeholder="Eg. PT. Exaditama"
                    single-line
                    dense
                    outlined
                ></v-text-field>
            </div>
            <div class="mt-8 d-flex justify-end align-end">
                <v-btn @click.prevent="handleFormSubmit" color="#FDB526" dark><span class="text-capitalize">save change</span></v-btn>
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
      typeBankList: [
        {
          text: 'Company',
          value: 1
        }
      ],
      bankList: [
        {
          text: 'BCA',
          value: 1
        }
      ],
      photoIdCard: null
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
      this.photoIdCard = file
    },
    handleFormSubmit (e) {
      console.log('submit')
    }
  }
}
</script>
