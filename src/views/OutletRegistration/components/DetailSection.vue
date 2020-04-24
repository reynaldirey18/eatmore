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
            <v-btn color="#FAFAFA" width="125" class="mt-4">Primary</v-btn>
          </div>
        </div>
        <div class="form-input">
          <v-row>
            <v-col cols="6">
              <p class="label-form">Business Name</p>
              <v-form ref="form">
                <v-text-field
                  v-model="name"
                  placeholder="Eg Sushi Sushanti"
                  outlined
                  dense
                >
                </v-text-field>
              </v-form>
            </v-col>
            <v-col cols="6">
              <p class="label-form">Business Email</p>
              <v-form ref="form">
                <v-text-field
                  v-model="email"
                  type="email"
                  placeholder="makanlagi@gmail.com"
                  outlined
                  dense
                >
                </v-text-field>
              </v-form>
            </v-col>
            <v-col cols="6" class="pass">
              <p class="label-form">Password</p>
              <v-form ref="form">
                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  outlined
                  dense
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-form>
            </v-col>
            <v-col cols="6" class="pass">
              <p class="label-form">Re-type Password</p>
              <v-form ref="form">
                <v-text-field
                  v-model="reType"
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show2 ? 'text' : 'password'"
                  name="input-10-1"
                  outlined
                  dense
                  @click:append="show2 = !show2"
                ></v-text-field>
              </v-form>
            </v-col>
          </v-row>
          <p class="label-form">Business Contact</p>
          <v-form ref="form">
            <v-text-field
              v-model="contact"
              placeholder="Eg 08291049124"
              outlined
              dense
            >
            </v-text-field>
          </v-form>
          <p class="label-form">Business Category</p>
          <v-select
            :items="categoryItems"
            outlined
            dense
          ></v-select>
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
        </div>
        <v-btn block color="#FDB526" dark @click="nextStep" class="mt-6">Continue</v-btn>
        <v-btn text block color="#F32626" class="mt-2">Back</v-btn>
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
      outletLogo: null,
      name: null,
      email: null,
      show1: false,
      show2: false,
      password: null,
      reType: null,
      categoryItems: ['Resto1'],
      dineIn: false,
      takeaway: false,
      delivery: false
    }
  },
  methods: {
    handleFileChange (e) {
      const input = e.target || this.$refs.file
      const file = input.files ? input.files[0] : null
      this.onFileChange(file)
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
