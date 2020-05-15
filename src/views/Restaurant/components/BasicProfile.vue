<template>
    <div class="px-4 py-6">
        <h1 class="app-title mb-10">Basic Profile</h1>
        <form @submit.prevent="handleFormSubmit">
            <v-row>
                <v-col cols="3" v-if="logoPreview === null">
                    <app-file-upload
                        height="170px"
                        width="170px"
                        description="Maximum size 2 mb"
                        @onFileChange="onFileChange"
                        :value="businessLogo">
                    </app-file-upload>
                </v-col>
                <v-col cols="3" v-if="logoPreview !== null">
                  <div class="app-button-upload" :style="customStyle">
                      <div v-bind="logoPreview">
                        <v-icon class="float-right absolute" v-if="logoPreview != null"
                        @click="removeImage">mdi-close</v-icon>
                      </div>
                  </div>
                </v-col>
                <v-col cols="9">
                    <p class="app-title-small pa-0 ma-0 mb-2">Business Logo</p>
                    <div>
                      <p class="pa-0 ma-0">This logo will appear when customer find your restaurant.</p>
                      <p class="meteor-primary">Pro tips: Use logo with dimension 1:1</p>
                    </div>
                    <v-btn @click="handleTriggerUpload"><span class="blue2">Upload Image</span></v-btn>
                    <input class="d-none" type="file" @change="handleFileChange" :accept="accept" ref="file" />
                </v-col>
            </v-row>
            <div>
                <p class="app-title-small ma-0">Business Name</p>
                <v-text-field
                    label="Business Name"
                    v-model="businessName"
                    placeholder="Eg. floor1 or floor for cafe & resto"
                    single-line
                    dense
                    outlined
                ></v-text-field>
            </div>
            <div>
                <p class="app-title-small ma-0">Business Description</p>
                <v-textarea
                  v-model="businessDescription"
                  outlined
                  dense
                  placeholder="Eg. All floor smoking area"
                ></v-textarea>
            </div>
            <div>
                <p class="app-title-small ma-0">Business Type</p>
                <v-select
                dense
                v-model="selectedType"
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
                <p class="black20">This tag will help customer to find your restaurant</p>
            </div>
            <div class="mt-8 d-flex justify-end align-end">
                <v-btn @click.prevent="handleFormSubmit" color="#FDB526" dark><span class="text-capitalize">save change</span></v-btn>
            </div>
        </form>
    </div>
</template>

<script>
import AppFileUpload from '@/components/AppFileUpload'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('outlet')

export default {
  name: 'ComponentBasicProfile',
  components: {
    AppFileUpload
  },
  data () {
    return {
      accept: '',
      selectedType: 1,
      businessTypeList: [
        {
          text: 'Restaurant',
          value: 1
        }
      ],
      tagList: ['Smooking Area', 'Contain Pork', 'Cafe', 'Cake', 'Sweet', 'No Smoking'],
      tagInputValue: '',
      businessLogo: null,
      logoPreview: null,
      businessName: '',
      businessDescription: '',
      businessType: '',
      tags: []
    }
  },
  computed: {
    ...mapState({
      dataProfil: state => state.dataProfil
    }),
    customStyle () {
      return {
        width: '170px',
        height: '170px'
      }
    }
  },
  mounted () {
    this.$store.dispatch('outlet/viewOutlet')
  },
  watch: {
    dataProfil (newVal) {
      this.businessName = newVal.outlet_name
      this.businessDescription = newVal.outlet_description
      this.logoPreview = {
        style: `
              position: absolute;
              background-image: url('${newVal.outlet_logo}');
              background-color: transparent;
              background-size: 100% auto;
              position: absolute;
              width: 100%;
              height: 100%;
            `
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
    },
    removeImage () {
      this.logoPreview = null
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
