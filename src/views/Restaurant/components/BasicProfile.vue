<template>
  <div class="px-4 py-6">
    <h1 class="app-title mb-10">Basic Profile</h1>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <v-form @submit.prevent="handleSubmit(saveChange)">
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
            <p class="error--text mt-3" v-if="logoError === true || errorExtention === true">Please upload an image</p>
            <p class="error--text mt-3" v-if="errorSize === true">Allowed file Max 2 MB</p>
          </v-col>
        </v-row>
        <div>
          <p class="app-title-small ma-0">Business Name</p>
          <ValidationProvider v-slot="{ errors }" name="Name" rules="required">
            <v-text-field
              label="Business Name"
              v-model="businessName"
              :error-messages="errors"
              placeholder="Eg. floor1 or floor for cafe & resto"
              single-line
              dense
              outlined
            ></v-text-field>
          </ValidationProvider>
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
          <p class="app-title-small ma-0">Business Category</p>
          <ValidationProvider v-slot="{ errors }" name="Category" rules="required">
            <v-select
              dense
              v-model="selectedCategory"
              :items="outletCategory"
              :error-messages="errors"
              item-text="param_value"
              item-value="param_id"
              outlined
            ></v-select>
          </ValidationProvider>
        </div>
        <div>
          <p class="app-title-small ma-0">Tags</p>
          <ValidationProvider v-slot="{ errors }" name="Tags" rules="required">
            <v-autocomplete
              ref="tagAutocomplete"
              v-model="tags"
              :items="outletTag"
              :error-messages="errors"
              item-text="tag_name"
              item-value="tag_name"
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
              placeholder="Eg. Cafe, Cake, Sweet"
              auto-select-first
              :value="tagInputValue"
            ></v-autocomplete>
          </ValidationProvider>
          <p class="black20">This tag will help customer to find your restaurant</p>
        </div>
        <div class="mt-8 d-flex justify-end align-end">
          <v-btn type="submit" color="#FDB526" dark :loading="loading">save change</v-btn>
        </div>
      </v-form>
    </ValidationObserver>

    <!-- dialog success -->
    <v-dialog v-model="dialog" persistent max-width="350">
      <v-card class="pa-8 pb-10 d-flex flex-column justify-center">
        <img src="@/assets/img/success.png" alt="success" class="mx-auto">
        <v-card-title class="title-card mx-auto">Data has been saved</v-card-title>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="dialog = false"
            color="#FDB526" class="mt-3 w-full"
            width="100%"
            dark>
            <span class="text-capitalize">Okay</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- dialog failed -->
    <v-dialog v-model="dialog2" persistent max-width="350">
      <v-card class="pa-8 pb-10 d-flex flex-column justify-center">
        <v-icon color="#F32626" size="100px">mdi-alert-circle-outline</v-icon>
        <v-card-title class="title-card mx-auto">Failed to save data</v-card-title>
        <p class="mx-auto">{{ errorMessage }}</p>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="dialog2 = false"
            color="#FDB526" class="mt-3 w-full"
            width="100%"
            dark>
            <span class="text-capitalize">Okay</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      selectedCategory: 1,
      tagInputValue: '',
      businessLogo: null,
      logoPreview: null,
      logoError: false,
      errorExtention: false,
      errorSize: false,
      businessName: '',
      businessDescription: '',
      businessType: '',
      tags: [],
      loading: false,
      dialog: false,
      dialog2: false,
      errorMessage: null
    }
  },
  computed: {
    ...mapState({
      dataProfil: state => state.dataProfil,
      outletCategory: state => state.outletCategory,
      outletTag: state => state.outletTag
    }),
    customStyle () {
      return {
        width: '170px',
        height: '170px'
      }
    }
  },
  mounted () {
    this.$store.dispatch('outlet/viewProfile')
  },
  watch: {
    dataProfil (newVal) {
      this.businessName = newVal.outlet_name
      this.businessDescription = newVal.outlet_description
      this.selectedCategory = newVal.outlet_category
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
      newVal.outlet_tags.forEach(element => {
        this.tags.push(element)
      })
    }
  },
  methods: {
    handleTriggerUpload () {
      this.$refs.file.click()
    },
    handleFileChange (e) {
      const input = e.target || this.$refs.file
      const file = input.files ? input.files[0] : null

      const allowed = ['png', 'jpg', 'jpeg', 'PNG', 'JPG']
      const extention = file.name.split('.').pop(-1)

      if (!allowed.includes(extention)) {
        this.errorExtention = true
      } else if (parseInt(file.size) > 2000000) {
        this.errorExtention = false
        this.errorSize = true
      } else {
        this.errorExtention = false
        this.errorSize = false
        this.onFileChange(file)
      }
    },
    onFileChange (file) {
      this.businessLogo = file
    },
    removeImage () {
      this.logoPreview = null
    },
    saveChange () {
      this.loading = true
      var allData = this.dataProfil
      if (this.logoPreview === null && this.outletLogo === null) {
        this.logoError = true
      } else {
        allData.outlet_name = this.businessName
        allData.outlet_description = this.businessDescription
        allData.outlet_category = this.selectedCategory
        allData.outlet_tags = this.tags
        if (this.businessLogo !== null) {
          allData.outlet_logo = this.businessLogo
        }
        var formData = new FormData()
        for (var key in allData) {
          formData.append(key, allData[key])
        }
        this.submitData(formData)
      }
    },
    submitData (val) {
      this.$store.commit('outlet/SET_EDIT', val)
      this.$store.dispatch('outlet/editProfile')
        .then(response => {
          const res = response.data
          if (res.status) {
            this.dialog = true
          } else {
            this.loading = false
          }
        }).catch((error) => {
          const message = error.response.data.message
          this.errorMessage = message
          this.dialog2 = true
          this.loading = false
        })
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
