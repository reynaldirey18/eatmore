<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">New Reimbursement</h1>
      <v-btn color="#FDB526" dark small width="160px" @click="goToAdd">Save Transaction</v-btn>
    </div>
    <v-card class="pl-3 mt-6" id="card" outlined>
      <v-row>
        <v-col cols="3" class="attachment-section" :style="{ height: heightCard}">
          <div class="attachment">
            <p class="app-subtitle mt-2 ml-2">Attachment</p>
          </div>
          <app-file-upload
            height="245px"
            @onFileChange="onFileChange"
            :value="attachment"
            class="mt-4"
            id="upload"
          ></app-file-upload>
          <p class="text-grey-light text-center">Maximum size 3 mb</p>
          <v-btn @click="handleTriggerUpload" block><span class="blue2" id="button-upload">Upload Image</span></v-btn>
          <input class="d-none" type="file" @change="handleFileChange" :accept="accept" ref="file" />
        </v-col>
        <v-col cols="9" class="information-section">
          <div class="header">
            <p class="app-subtitle mt-2 ml-2">Reimbursement Information</p>
          </div>
          <div class="form-input pl-2 pr-4">
            <p class="label-form">Amount</p>
            <v-form ref="form">
              <!-- <v-text-field
                v-model="name"
                placeholder="Eg. 10.000"
                outlined
                dense
              >
              </v-text-field> -->
              <v-row>
                <v-col cols="1" class="label-currency pa-0 pl-3">
                  <div class="rupiah d-flex">
                    <p>Rp</p>
                  </div>
                </v-col>
                <v-col cols="11" class="input-currency pa-0">
                  <v-form ref="form">
                    <v-text-field
                      v-model="amount"
                      placeholder="Eg. 10.000"
                      outlined
                      dense
                    >
                    </v-text-field>
                  </v-form>
                </v-col>
                <v-col cols="6" class="pt-0 pb-0">
                  <p class="label-form">Expense Category</p>
                  <v-select
                    :items="category"
                    v-model="selectedCategory"
                    outlined
                    dense
                  ></v-select>
                </v-col>
                <v-col cols="6" class="pt-0 pb-0">
                  <p class="label-form">Transaction Date</p>
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
                        v-model="transactionDate"
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
                    <v-date-picker v-model="transactionDate" @input="menu = false"></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <p class="label-form">Description</p>
              <v-form ref="form">
                <v-textarea
                  outlined
                  dense
                ></v-textarea>
              </v-form>
            </v-form>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import AppFileUpload from '@/components/AppFileUpload'

export default {
  name: 'New Reimbursement',
  components: {
    AppFileUpload
  },
  data () {
    return {
      menu: false,
      transactionDate: null,
      heightCard: null,
      attachment: null,
      amount: null,
      selectedCategory: null,
      category: ['Transportation']
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
      this.attachment = file
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  .attachment-section {
    background-color: #FBFBFB;
    border-right: 1px solid #F2F2F2;
    .attachment {
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
.rupiah {
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 45px;
  height: 40px;
  border-radius: 4px 0 0 4px;
  p {
    margin: auto;
  }
}
.label-currency {
  z-index: 1;
}
.input-currency {
  margin-left: -10px;
}
</style>
