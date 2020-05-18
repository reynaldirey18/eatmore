<template>
  <div>
    <v-card class="mx-auto pa-4 pl-6 pr-6" outlined width="844">
      <v-list-item-content>
        <v-list-item-title class="headline">Outlet Registration</v-list-item-title>
        <v-list-item-subtitle class="mt-2">Please enter your business information to register outlet</v-list-item-subtitle>
        <div class="business-logo d-flex flex-row mt-4">
          <div class="upload-logo d-flex flex-column">
            <app-file-upload
              height="140px"
              width="140px"
              @onFileChange="onFileChange"
              :value="outletLogo"
              ></app-file-upload>
              <span class="text-grey-light center">Maximum size 2 mb</span>
          </div>
          <div class="title-upload-logo d-flex flex-column mt-2 ml-6">
            <span class="text-blood-sm">Business Logo</span>
            <span class="app-subtitle mt-2">This logo will appear when customer find your restaurant.</span>
            <span class="text-yellow mt-2">Pro tips: Use logo with dimension 1:1</span>
            <v-btn color="#FAFAFA" width="125" class="mt-4" @click="handleTriggerUpload">Upload Image</v-btn>
            <input class="d-none" type="file" @change="handleFileChange" ref="file" />
            <p class="error--text mt-3" v-if="logoError === true || errorExtention === true">Please upload an image</p>
            <p class="error--text mt-3" v-if="errorSize === true">Allowed file Max 2 MB</p>
          </div>
        </div>
        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
          <v-form @submit.prevent="handleSubmit(validationForm)">
            <div class="form-input">
              <v-row>
                <v-col cols="6">
                  <p class="label-form">Business Name</p>
                  <ValidationProvider v-slot="{ errors }" name="Name" rules="required">
                    <v-text-field
                      v-model="name"
                      :error-messages="errors"
                      placeholder="Eg Sushi Sushanti"
                      outlined
                      dense
                    >
                    </v-text-field>
                  </ValidationProvider>
                </v-col>
                <v-col cols="6">
                  <p class="label-form">Business Email</p>
                  <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
                    <v-text-field
                      v-model="email"
                      type="email"
                      :error-messages="errors"
                      placeholder="makanlagi@gmail.com"
                      outlined
                      dense
                    >
                    </v-text-field>
                  </ValidationProvider>
                </v-col>
              </v-row>
              <p class="label-form">Business Contact</p>
              <ValidationProvider v-slot="{ errors }" name="Contact" rules="required|integer">
                <v-text-field
                  v-model="contact"
                  :error-messages="errors"
                  placeholder="Eg 08291049124"
                  outlined
                  dense
                >
                </v-text-field>
              </ValidationProvider>
              <p class="label-form">Business Category</p>
              <ValidationProvider v-slot="{ errors }" name="Category" rules="required">
                <v-select
                  :items="categoryItems"
                  :error-messages="errors"
                  v-model="selectedCategory"
                  outlined
                  dense
                ></v-select>
              </ValidationProvider>
              <p class="label-form">Business Service</p>
              <div class="service-item d-flex flex-row">
                <div class="item" :class="{ 'selected': dineIn }" @click="selectService(0)">
                  <span class="text-blood-sm">Dine-In</span>
                </div>
                <div class="item ml-2" :class="{ 'selected': takeaway }" @click="selectService(1)">
                  <span class="text-blood-sm">Takeaway</span>
                </div>
                <div class="item ml-2" :class="{ 'selected': delivery }" @click="selectService(2)">
                  <span class="text-blood-sm">Delivery</span>
                </div>
              </div>
              <div>
                <p class="error--text mt-2 ml-3" v-if="serviceError === true">Please choose at least one</p>
              </div>
            </div>
            <v-btn block color="#FDB526" dark type="submit" class="mt-6">Continue</v-btn>
            <v-btn text block color="#F32626" class="mt-2">Back</v-btn>
          </v-form>
        </ValidationObserver>
      </v-list-item-content>
    </v-card>
  </div>
</template>

<script>
import AppFileUpload from '@/components/AppFileUpload'

export default {
  name: 'detail-section',
  components: {
    AppFileUpload
  },
  data () {
    return {
      show1: false,
      show2: false,
      outletLogo: null,
      logoError: false,
      errorExtention: false,
      errorSize: false,
      name: null,
      email: null,
      password: null,
      reType: null,
      contact: null,
      selectedCategory: null,
      categoryItems: ['Resto1'],
      dineIn: false,
      takeaway: false,
      delivery: false,
      serviceError: false
    }
  },
  mounted () {
    this.$store.dispatch('outlet/getCategory')
  },
  watch: {
    outletLogo (val) {
      if (val !== null) {
        this.logoError = false
      }
    },
    dineIn (val) {
      if (val === true) {
        this.serviceError = false
      }
    },
    takeaway (val) {
      if (val === true) {
        this.serviceError = false
      }
    },
    delivery (val) {
      if (val === true) {
        this.serviceError = false
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
      this.outletLogo = file
    },
    selectService (val) {
      if (val === 0) {
        this.dineIn = !this.dineIn
      }
      if (val === 1) {
        this.takeaway = !this.takeaway
      }
      if (val === 2) {
        this.delivery = !this.delivery
      }
    },
    nextStep () {
      this.$emit('continue', 2)
    },
    validationForm () {
      if (this.outletLogo === null) {
        this.logoError = true
      } else if (this.dineIn === false && this.takeaway === false && this.delivery === false) {
        this.serviceError = true
      } else {
        var dataSection1 = {}
        dataSection1.outlet_logo = this.outletLogo
        dataSection1.outlet_name = this.name
        dataSection1.outlet_email = this.email
        dataSection1.outlet_phone = this.contact
        dataSection1.outlet_category = 3
        var businessService = []
        if (this.dineIn === true) {
          businessService.push('Dine In')
        }
        if (this.takeaway === true) {
          businessService.push('Takeaway')
        }
        if (this.delivery === true) {
          businessService.push('Delivery')
        }
        businessService.forEach((element, index) => {
          var key = 'outlet_service[' + index + ']'
          dataSection1[key] = element
        })
        this.$emit('dataForm', dataSection1)
        this.$emit('continue', 2)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.service-item {
  .item {
    padding: 12px 24px;
    background: #FAFAFA;
    border: 1px solid #999999;
    border-radius: 4px;
    cursor: pointer;
  }
  .selected {
    border: 1px solid #FDB526;
    background: #FFF8E9;
    .text-blood-sm {
      color: #FDB526;
    }
  }
}

.pass {
  margin-top: -20px;
}

.text-yellow {
  background-color: #FFF8E9;
  width: 235px;
}

.business-logo {
  .v-btn {
    color: #3D87F4;
  }
}
</style>
