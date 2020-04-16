<template>
    <div class="px-4 py-6">
        <h1 class="app-title mb-10">Basic Profile</h1>
        <form @submit.prevent="handleFormSubmit">
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
                <p class="app-title-small ma-0">Business Name</p>
                <v-text-field
                    label="Business Name"
                    placeholder="Eg. floor1 or floor for cafe & resto"
                    single-line
                    dense
                    outlined
                ></v-text-field>
            </div>
            <div>
                <p class="app-title-small ma-0">Business Description</p>
                <v-textarea
                outlined
                dense
                placeholder="Eg. All floor smoking area"
                ></v-textarea>
            </div>
            <div>
                <p class="app-title-small ma-0">Business Type</p>
                <v-select
                dense
                :items="businessTypeList"
                outlined
                ></v-select>
            </div>
            <div>
                <p class="app-title-small ma-0">Tags</p>
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
      businessTypeList: [
        {
          text: 'Restaurant',
          value: 1
        }
      ],
      tagList: ['Smooking Area', 'Contain Pork', 'Cafe', 'Cake', 'Sweet', 'No Smoking'],
      tagInputValue: '',
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
      const input = e.target || this.$refs.file
      const file = input.files ? input.files[0] : null

      this.onFileChange(file)
    },
    onFileChange (file) {
      this.businessLogo = file
    },
    onTagValueChange (e) {
    },
    onTagInput (e) {
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
    handleFormSubmit (e) {
      console.log('submit')
    }
  }
}
</script>
