<template>
  <div>

    <div class="mt-4 d-flex flex-row justify-space-between">
        <h1 class="title">Request Purchase Order</h1>
      <div class="action-add d-flex flex-row">
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full"
          text>
          <span class="text-capitalize">View PO</span>
        </v-btn>
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Create PO</span>
        </v-btn>
      </div>
    </div>
    <v-card class="mt-5" style="height:auto;">
      <v-row>
        <v-col cols="12" style="max-height: 52px;">
          <div class="app-box">
            <p class="text-bold pl-3">PO Information</p>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="px-3">
            <div>
              <v-row>
                <v-col cols="6">
                  <p class="app-title-small ma-0">PO Date &nbsp; <v-chip class="pa-1 cursor-pointer" color="#FDB526" x-small>?</v-chip>
                  </p>
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="computedDateFormattedMomentjs"
                        :value="computedDateFormattedMomentjs"
                        label="Picker without buttons"
                        append-icon="mdi-calendar"
                        readonly
                        single-line
                        dense
                        filled
                        outlined
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="6">
                  <p class="app-title-small ma-0">PO Number &nbsp; <v-chip class="pa-1 cursor-pointer" color="#FDB526" x-small>?</v-chip></p>
                  <v-text-field
                      label="Supplier ID"
                      placeholder="Eg. Tandoori Chicken"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
            <div>
              <p class="app-title-small ma-0">Supplier</p>
              <v-text-field
                  label="Inventory Name"
                  placeholder="Eg. 046789976"
                  single-line
                  dense
                  filled
                  outlined
              >
                <img slot="append" class="pt-1" src="@/assets/icon/phone-book.png" alt />
              </v-text-field>
            </div>
            <div>
              <p class="text-blood ma-0">Delivery</p>
              <v-row>
                <v-col cols="4">
                  <p class="app-title-small ma-0">Delivery Date &nbsp; <v-chip class="pa-1 cursor-pointer" color="#FDB526" x-small>?</v-chip></p>
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
                        v-model="date"
                        label="Picker without buttons"
                        append-icon="mdi-calendar"
                        readonly
                        single-line
                        dense
                        filled
                        outlined
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="4">
                  <p class="app-title-small ma-0">Loading Date &nbsp; <v-chip class="pa-1 cursor-pointer" color="#FDB526" x-small>?</v-chip></p>
                  <v-menu
                    v-model="menu3"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Picker without buttons"
                        append-icon="mdi-calendar"
                        readonly
                        single-line
                        dense
                        filled
                        outlined
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @input="menu3 = false"></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="4">
                  <p class="app-title-small ma-0">Delivery Due Date &nbsp; <v-chip class="pa-1 cursor-pointer" color="#FDB526" x-small>?</v-chip></p>
                  <v-menu
                    v-model="menu4"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Picker without buttons"
                        append-icon="mdi-calendar"
                        readonly
                        single-line
                        dense
                        filled
                        outlined
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @input="menu4 = false"></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </div>
            <div>
              <p class="app-title-small ma-0">Delivery To</p>
              <v-select
              dense
              :items="deliveryList"
              outlined
              ></v-select>
            </div>
            <div>
              <p class="text-blood ma-0">items ({{itemDy.length}})</p>
              <div
              :key="index.id"
              v-for="(row, index) in itemDy">
                <v-row>
                  <v-col cols="2">
                    <p class="app-title-small ma-0">Product Name</p>
                    <v-text-field
                      label="Amount/Actual Unit"
                      placeholder="Eg. 0.01"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                  </v-col>
                  <v-col cols="auto">
                    <p class="app-title-small ma-0">Quantity</p>
                    <v-text-field
                      label="Amount/Actual Unit"
                      placeholder="Eg. 0.01"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <p class="app-title-small ma-0">Unit/Ratio</p>
                    <v-select
                    dense
                    :items="ratioUnit"
                    outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="2">
                    <p class="app-title-small ma-0">Unit Price</p>
                    <v-text-field
                      label="Amount/Actual Unit"
                      placeholder="Eg. 0.01"
                      prefix="Rp"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                  </v-col>
                  <v-col cols="1">
                    <p class="app-title-small ma-0">Discount</p>
                    <v-text-field
                      label="Amount/Actual Unit"
                      placeholder="Eg. 0.01"
                      suffix="%"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                  </v-col>
                  <v-col cols="1">
                    <p class="app-title-small ma-0">Tax</p>
                    <v-select
                    dense
                    :items="ratioUnit"
                    outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="auto">
                    <p class="app-title-small ma-0">Total</p>
                    <v-text-field
                      label="Amount/Actual Unit"
                      placeholder="Eg. 0.01"
                      prefix="Rp"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                  </v-col>
                  <v-col cols="auto">
                    <div class="pt-7">
                      <v-icon  @click.prevent="removeConfigurationRow(index)" medium color="red" class="cursor-pointer">mdi-delete</v-icon>
                    </div>
                  </v-col>
                </v-row>
              </div>
              <v-btn
                width="100%"
                @click="addConfigurationRow(index)"
                color="#FAFAFA" class="text-center pt-0 mt-1"
                dark>
                <span class="text-blue-sm">Add New Ratio</span>
              </v-btn>
            </div>
            <div>
              <v-row>
                <v-col cols="6">
                  <div class="pb-3">
                    <v-row>
                      <v-col cols="6">
                        <p class="app-title-small ma-0">Delivery Cost</p>
                        <v-text-field
                          label="Amount/Actual Unit"
                          placeholder="Eg. 10000"
                          prefix="Rp"
                          single-line
                          dense
                          filled
                          outlined
                      ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <p class="app-title-small ma-0">Total Discount</p>
                        <v-text-field
                          label="Amount/Actual Unit"
                          placeholder="Eg. 20000"
                          prefix="Rp"
                          single-line
                          dense
                          filled
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </div>
                  <div class="mt-12">
                    <p class="app-title-small ma-0">Total</p>
                    <v-textarea
                    outlined
                    filled
                    dense
                    placeholder="Eg. All floor smoking area"
                    ></v-textarea>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div>
                    <v-row>
                      <v-col cols="6"></v-col>
                      <v-col class="text-right" cols="3">Sub Total</v-col>
                      <v-col class="text-right text-total-sm" cols="3">Rp.20.010.000</v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6"></v-col>
                      <v-col class="text-right" cols="3">Total Discount</v-col>
                      <v-col class="text-right" cols="3">Rp.20.010.000</v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6"></v-col>
                      <v-col class="text-right" cols="3">Delivery Cost</v-col>
                      <v-col class="text-right" cols="3">Rp.20.010.000</v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6"></v-col>
                      <v-col class="text-right text-total" cols="3">Total Cost</v-col>
                      <v-col class="text-right text-total" cols="3">Rp.20.010.000</v-col>
                    </v-row>
                  </div>
                  <div>
                    <p class="app-title-small ma-0">Terms Condition</p>
                    <v-textarea
                    outlined
                    filled
                    dense
                    placeholder="Eg. All floor smoking area"
                    ></v-textarea>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import * as moment from 'moment'
export default {
  name: 'product',
  components: {
  },
  computed: {
    eatmoreLogo () {
      return require('@/assets/img/NotFound.png')
    },
    computedDateFormattedMomentjs () {
      return this.date ? moment(this.date).format('DD/MM/YYYY') : ''
    }
  },
  data () {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      menu2: false,
      menu3: false,
      menu4: false,
      moment: null,
      itemDy: [0],
      deliveryList: [
        {
          text: 'outlet 1',
          value: 1
        }
      ]
    }
  },
  watch: {
  },
  methods: {
    addConfigurationRow: function (i) {
      this.itemDy.push([i])
    },
    removeConfigurationRow: function (index) {
      this.itemDy.splice(index, 1)
    },
    gotoAdd () {
      setTimeout(() => {
        this.$router.push('/inventories/add-purchase-order')
      }, 1000)
    },
    goToEdit () {
      setTimeout(() => {
        this.$router.push('/inventories/edit-supplier')
      }, 1000)
    }
  }
}
</script>
<style scoped>
.text-total-sm{
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
}
.text-total{
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #333333;
}
</style>
