<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">Add New Employee</h1>
      <v-btn color="#FDB526" dark small width="160px">Save Employee</v-btn>
    </div>
    <v-card class="pl-3 mt-6" id="card" outlined>
      <v-row>
        <v-col cols="3" class="photo-section" :style="{ height: heightCard}">
          <div class="photo">
            <p class="app-subtitle mt-2 ml-2">Employee Photo</p>
          </div>
          <app-file-upload
            height="245px"
            @onFileChange="onFileChange"
            :value="photo"
            class="mt-4"
            id="upload"
          ></app-file-upload>
          <p class="text-grey-light text-center">Maximum size 3 mb</p>
          <v-btn @click="handleTriggerUpload" block><span class="blue2" id="button-upload">Upload Image</span></v-btn>
          <input class="d-none" type="file" @change="handleFileChange" :accept="accept" ref="file" />
        </v-col>
        <v-col cols="9" class="information-section">
          <div class="header">
            <p class="app-subtitle mt-2 ml-2">Employee Information</p>
          </div>
          <div class="form-input pl-2 pr-4">
            <p class="label-form">Employee Name</p>
            <v-form ref="form">
              <v-text-field
                v-model="name"
                placeholder="Eg. John Doe"
                outlined
                dense
              >
              </v-text-field>
            </v-form>
            <p class="label-form">Email</p>
            <v-form ref="form">
              <v-text-field
                v-model="email"
                placeholder="Eg. example@example.com"
                outlined
                dense
              >
              </v-text-field>
            </v-form>
            <p class="label-form">Phone Number</p>
            <v-form ref="form">
              <v-text-field
                v-model="number"
                placeholder="Eg. 0812xxxx"
                outlined
                dense
              >
              </v-text-field>
            </v-form>
            <v-row>
              <v-col cols="6" class="pt-0 pb-0">
                <p class="label-form">Division</p>
                <v-select
                  :items="division"
                  v-model="selectedDiv"
                  outlined
                  dense
                ></v-select>
              </v-col>
              <v-col cols="6" class="pt-0 pb-0">
                <p class="label-form">Role</p>
                <v-select
                  :items="role"
                  v-model="selectedRole"
                  outlined
                  dense
                ></v-select>
              </v-col>
              <v-col cols="6" class="pt-0 pb-0">
                <p class="label-form">Employee Status</p>
                <v-select
                  :items="status"
                  v-model="selectedStatus"
                  outlined
                  dense
                ></v-select>
              </v-col>
              <v-col cols="6" class="pt-0 pb-0">
                <p class="label-form">Employee Hire Date</p>
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="hireDate"
                      outlined
                      dense
                      readonly
                      v-on="on"
                    >
                      <template v-slot:prepend-inner>
                        <div class="icon-input">
                          <v-icon size="20">mdi-calendar-month</v-icon>
                        </div>
                      </template>
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="hireDate" @input="menu = false"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="6" class="pt-0 pb-0">
                <p class="label-form">Username</p>
                <v-form>
                  <v-text-field
                    v-model="username"
                    placeholder="Eg. John234"
                    outlined
                    dense
                  ></v-text-field>
                </v-form>
              </v-col>
              <v-col cols="6" class="pt-0 pb-0">
                <p class="label-form">PIN Number</p>
                <v-form ref="form">
                  <v-text-field
                    v-model="pin"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    placeholder="Max. 4 Number"
                    outlined
                    dense
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-form>
              </v-col>
              <v-col cols="6" class="pt-0 pb-0">
                <p class="label-form">Password</p>
                <v-form ref="form">
                  <v-text-field
                    v-model="password"
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show2 ? 'text' : 'password'"
                    name="input-10-1"
                    placeholder="Max. 8 Characters"
                    outlined
                    dense
                    @click:append="show2 = !show2"
                  ></v-text-field>
                </v-form>
              </v-col>
              <v-col cols="6" class="pt-0 pb-0">
                <p class="label-form">Password</p>
                <v-form ref="form">
                  <v-text-field
                    v-model="reType"
                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show3 ? 'text' : 'password'"
                    name="input-10-1"
                    placeholder="Re-Type Password"
                    outlined
                    dense
                    @click:append="show3 = !show3"
                  ></v-text-field>
                </v-form>
              </v-col>
            </v-row>
            <p class="label-form">Choose Outlet</p>
            <div class="checkbox d-flex flex-row">
              <v-form ref="form" v-for="outlet in outlets" :key="outlet">
                <v-checkbox
                  v-model="outlet.value"
                  :label="outlet.text"
                  class="mt-0 mr-8"
                ></v-checkbox>
              </v-form>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import AppFileUpload from '@/components/AppFileUpload'

export default {
  name: 'Add New Employee',
  components: {
    AppFileUpload
  },
  data () {
    return {
      heightCard: null,
      photo: null,
      selectedDiv: null,
      division: ['Cashier'],
      selectedRole: null,
      role: ['Staff'],
      selectedStatus: null,
      status: ['Choose'],
      hireDate: null,
      menu: false,
      pin: null,
      password: null,
      reType: null,
      show1: false,
      show2: false,
      show3: false,
      outlets: [
        {
          text: 'Outlet 1',
          value: false
        },
        {
          text: 'Outlet 2',
          value: false
        },
        {
          text: 'Outlet 3',
          value: false
        },
        {
          text: 'Outlet 4',
          value: false
        },
        {
          text: 'Outlet 5',
          value: false
        }
      ]
    }
  },
  mounted () {
    var ele = document.getElementById('card')
    var eleStyle = window.getComputedStyle(ele)
    this.heightCard = eleStyle.height
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
      this.photo = file
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  .photo-section {
    background-color: #FBFBFB;
    border-right: 1px solid #F2F2F2;;
    height: 100vh;
    .photo {
      border-bottom: 1px solid #F2F2F2;
    }
  }
  .information-section {
    .header {
      border-bottom: 1px solid #F2F2F2;
    }
  }
}
.app-subtitle {
  font-weight: bold;
}
</style>
