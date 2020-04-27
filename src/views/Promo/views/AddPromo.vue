<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">New Promo</h1>
      <div class="action-add">
        <v-btn color="#3D87F4" text small class="mr-6">Save as Draft</v-btn>
        <v-btn color="#FDB526" dark small width="160px">Publish Promo</v-btn>
      </div>
    </div>
    <v-card class="pa-4 pt-2 mt-4" outlined>
      <div class="form-input">
        <p class="label-form">Type Promo</p>
        <v-select
          :items="type"
          outlined
          dense
        ></v-select>
        <p class="label-form">Title Promo</p>
        <v-form ref="form">
          <v-text-field
            v-model="title"
            placeholder="Eg. Special Offer Holiday"
            outlined
            dense
          >
          </v-text-field>
        </v-form>
        <v-row>
          <v-col cols="6">
            <app-file-upload
              height="212px"
              @onFileChange="onFileChange"
              :value="image"
            ></app-file-upload>
            <v-btn @click="handleTriggerUpload" block><span class="blue2">Upload Image</span></v-btn>
            <input class="d-none" type="file" @change="handleFileChange" :accept="accept" ref="file" />
          </v-col>
          <v-col cols="3">
            <p class="text-grey-light">Maximum size 3 mb</p>
            <p>Pro tips: Use photo Banner with high resolution</p>
          </v-col>
          <v-col cols="3"></v-col>
          <v-col cols="6">
            <div>
              <p class="label-form">Start Promo</p>
              <v-dialog
                ref="dialog"
                v-model="startTime.visible"
                :return-value.sync="startTime.datetime"
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="startTime.datetime"
                    outlined
                    dense
                    readonly
                    v-on="on"
                  >
                  <template v-slot:prepend-inner>
                    <div class="icon-input">
                      <v-icon size="20" color="#FDB526">mdi-calendar-month</v-icon>
                    </div>
                  </template>
                  </v-text-field>
                </template>
                <v-time-picker
                  v-if="startTime.showTime"
                  v-model="startTime.time"
                  full-width
                  color="#FDB526"
                >
                  <v-btn text color="#FDB526" @click="handleStartTimeSubmit" class="center">OK</v-btn>
                </v-time-picker>
                <v-date-picker v-else no-title v-model="startTime.date" color="#FDB526">
                  <v-btn text color="#FDB526" @click="handleStartTimeNext" class="center">Next</v-btn>
                </v-date-picker>
              </v-dialog>
            </div>
          </v-col>
          <v-col cols="6">
            <div>
              <p class="label-form">End Promo</p>
              <v-dialog
                ref="dialog"
                v-model="startTime.visible"
                :return-value.sync="startTime.datetime"
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="startTime.datetime"
                    outlined
                    dense
                    readonly
                    v-on="on"
                  >
                  <template v-slot:prepend-inner>
                    <div class="icon-input">
                      <v-icon size="20" color="#FDB526">mdi-calendar-month</v-icon>
                    </div>
                  </template>
                  </v-text-field>
                </template>
                <v-time-picker
                  v-if="startTime.showTime"
                  v-model="startTime.time"
                  full-width
                  color="#FDB526"
                >
                  <v-btn text color="#FDB526" @click="handleStartTimeSubmit" class="center">OK</v-btn>
                </v-time-picker>
                <v-date-picker v-else no-title v-model="startTime.date" color="#FDB526">
                  <v-btn text color="#FDB526" @click="handleStartTimeNext" class="center">Next</v-btn>
                </v-date-picker>
              </v-dialog>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
import AppFileUpload from '@/components/AppFileUpload'

export default {
  name: 'Add Promo',
  components: {
    AppFileUpload
  },
  data () {
    return {
      type: ['Premium', 'Regular'],
      title: null,
      image: null,
      startTime: {
        date: null,
        time: null,
        datetime: '',
        showTime: false,
        visible: false
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
      this.image = file
    },
    handleStartTimeNext () {
      this.startTime.showTime = true
      this.$nextTick(() => {
      })
    },
    handleStartTimeSubmit () {
      this.startTime.showTime = false
      this.$nextTick(() => {
        const formatedDate = this.startTime.date + ' / ' + this.startTime.time
        this.$refs.dialog.save(formatedDate)
        this.startTime.datetime = formatedDate
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.v-text-field {
  .v-input__control {
    .v-input__slot {
      background-color: #FAFAFA !important;
    }
  }
}
</style>
