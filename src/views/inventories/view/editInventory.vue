<template>
  <div>
    <div class="my-6 d-flex flex-row justify-space-between">
      <h1 class="title">Edit Inventory</h1>
      <div class="action-add d-flex flex-row">
        <v-btn
          @click.prevent="handleFormSubmit"
          class="text-center mx-2"
          text>
          <span class="text-red">Delete</span>
        </v-btn>
        <v-btn
          @click.prevent="handleFormSubmit"
          color="#333333" class="text-center mx-2"
          text>
          <span class="text-blue">Discard Changes</span>
        </v-btn>
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full mx-2 "
          >
          <span class="text-white">Save Changes</span>
        </v-btn>
      </div>
    </div>

    <v-card style="min-height: 820px;">
      <v-row class="ml-3">
        <v-col cols="3" class="app-box-grey"><p class="app-sub pb-0 mb-0">Invetory’s Photo</p></v-col>
        <v-col cols="9" class="app-box"><p class="app-sub pb-0 mb-0">Inventory Information</p></v-col>
      </v-row>
      <v-row class="ml-3">
        <v-col cols="3" class="app-box-grey text-center" style="min-height: 820px;">
          <app-file-upload
              height="250px"
              @onFileChange="onFileChange"
              :value="ProductImage">
          </app-file-upload>
          <p class="text-grey-light">Maximum size 3 mb</p>
          <p class="text-regular text-left">Pro tips: Use photo product with high resolution</p>
          <v-btn
            width="100%"
            @click.prevent="handleFormSubmit"
            color="#FAFAFA" class="text-center w-full"
            dark>
            <span class="text-blue-sm">Upload Image</span>
          </v-btn>
        </v-col>
        <!-- product Information -->
        <v-col cols="9" class="pa-6">
          <div>
            <p class="app-title-small ma-0">Inventory Name</p>
            <v-text-field
                label="Inventory Name"
                placeholder="Eg. Tandoori Chicken"
                single-line
                dense
                filled
                outlined
            ></v-text-field>
          </div>
          <div>
            <p class="app-title-small ma-0">Inventory Type</p>
            <v-select
            dense
            :items="invenType"
            outlined
            ></v-select>
          </div>
          <div>
            <p class="app-title-small ma-0">Inventory Type</p>
              <v-row>
                <v-col cols="6">
                  <p class="app-title-small ma-0">Unit</p>
                  <v-select
                  dense
                  :items="unitList"
                  outlined
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <p class="app-title-small ma-0">Product SKU / Product ID</p>
                  <v-text-field
                      label="Amount/Actual Unit"
                      placeholder="Eg. SKU-092-FF"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
              </v-row>
          </div>
          <div>
            <p class="text-blood mb-0 pa-0">Ratio per Unit</p>
            <p class="app-title-small ma-0 pt-1">Fill blank if the inventory doesn’t has ratio</p>
            <div
            :key="index.id"
            v-for="(row, index) in ratioDynamic">
              <v-row>
                <v-col cols="6">
                  <p class="app-title-small ma-0">Ratio Unit</p>
                  <v-select
                  dense
                  :items="ratioUnit"
                  outlined
                  ></v-select>
                </v-col>
                <v-col cols="5">
                  <p class="app-title-small ma-0">Amount/Actual Unit</p>
                  <v-text-field
                      label="Amount/Actual Unit"
                      placeholder="Eg. 0.01"
                      suffix="Kg"
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
          <div class="mt-5">
            <p class="text-blood mb-0 pa-0">Minimum Stock Alert</p>
            <p class="app-title-small ma-0 pt-1">Fill blank if the inventory doesn’t has ratio</p>
              <v-row>
                <v-col cols="6">
                  <p class="app-title-small ma-0">Minimum Stock Amount</p>
                  <v-text-field
                      label="Amount/Actual Unit"
                      placeholder="Eg. 20"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <p class="app-title-small ma-0">Minimum Stock Amount</p>
                  <v-text-field
                      label="Kilo"
                      placeholder="Eg. Kilo"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
              </v-row>
          </div>
          <div class="mt-5">
            <p class="text-blood mb-0 pa-0">Average Cost (COGS)</p>
            <p class="app-title-small ma-0 pt-1">This field will updated automatically based on your Purchased Order, <span class="cursor-pointer" style="color: #C5870E">Learn More</span></p>
              <v-row>
                <v-col cols="6">
                  <p class="app-title-small ma-0">Minimum Stock Amount</p>
                  <v-text-field
                      label="Amount/Actual Unit"
                      placeholder="50000"
                      prefix="Rp"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <p class="app-title-small ma-0">Minimum Stock Amount</p>
                  <v-text-field
                      label="Kilo"
                      placeholder="Eg. Kilo"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
              </v-row>
          </div>
          <div class="mt-5">
            <p class="text-blood mb-0 pa-0">Supplier Material</p>
            <p class="app-title-small ma-0 pt-1">You can add more than one supplier for this material</p>
            <div>
              <v-list three-line flat>
                <v-list-item-group v-model="item" color="primary">
                  <v-list-item
                    v-for="(item, i) in selected"
                    :key="i"
                  >
                    <v-list-item-content class="py-1">
                      <v-list-item-title class="text-blood mb-0" v-html="item.name"></v-list-item-title>
                      <v-list-item-subtitle v-html="item.code"></v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action class="py-1">
                      <v-icon  @click.prevent="removeTopings(index)" medium color="red" class="cursor-pointer">mdi-delete</v-icon>
                    </v-list-item-action>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
            <v-btn
              width="100%"
              @click="dialog = true"
              color="#FAFAFA" class="text-center pt-0 mt-1"
              dark>
              <span class="text-blue-sm">Add Supplier</span>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <!-- modal -->
    <v-dialog v-model="dialog" persistent max-width="450">
      <v-card class="pa-2">
        <v-card-title class="text-blood pl-0 pt-1 pr-0 pb-3">Add Supplier
          <v-spacer></v-spacer>
          <v-icon class="float-right"
          @click.prevent="dialog = false">mdi-close</v-icon>
        </v-card-title>
        <div>
          <p class="text-blood-sm">Search Supplier</p>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Eg: Egg"
            single-line
            dense
            filled
            outlined
            hide-details
          ></v-text-field>
          <div class="my-5" style="max-height: 364px; overflow-x:auto">
          <v-data-table
            :headers="headers"
            :items="supplierData"
            :search="search"
            :items-per-page="itemsPerPage"
            hide-default-header
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
          >
            <template v-slot:item.avatar="{item}">
              <p class="text-blood mb-1 mt-1">{{item.name}}</p>
              <p class="mb-1">{{item.code}}</p>
            </template>
            <template v-slot:item.other="{item}">
              <v-checkbox v-model="selected" :value="item"></v-checkbox>
            </template>
          </v-data-table>
          </div>
        </div>
        <v-card-actions class="pa-0">
            <v-btn
              width="100%"
              @click="dialog = true"
              class="text-center pt-0 mt-1"
              >
              <span class="text-blue-sm">Create New Supplier</span>
            </v-btn>
        </v-card-actions>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="addToping(selected)"
            color="#FDB526" class="text-center mt-3 w-full"
            width="100%"
            dark>
            <span class="text-capitalize">Add Supplier</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AppFileUpload from '@/components/AppFileUpload'
export default {
  name: 'AddProduct',
  components: {
    AppFileUpload
  },
  data () {
    return {
      search: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: 1000,
      selected: [],
      dialog: false,
      ProductImage: null,
      tagInputValue: '',
      invenType: [
        {
          text: 'Raw',
          value: 1
        }
      ],
      unitList: [
        {
          text: 'Kilogram (KG)',
          value: 1
        }
      ],
      ratioUnit: [
        {
          text: '1 Sdm (Sendok Makan)',
          value: 1
        }
      ],
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'avatar'
        },
        { text: '', value: 'other', sortable: false }
      ],
      supplierData: [
        {
          id: 1,
          name: 'PT Akur Pratama (Yogya Group)',
          code: 'SL-256-raw'
        },
        {
          id: 2,
          name: 'CV Lasser',
          code: 'KZ-276SJ34'
        },
        {
          id: 3,
          name: 'PT Len',
          code: 'KZ-276SJ34'
        },
        {
          id: 4,
          name: 'PT Orang Tua',
          code: 'KZ-276SJ34'
        },
        {
          id: 5,
          name: 'PT Pindad (persero)',
          code: 'KZ-276SJ34'
        },
        {
          id: 6,
          name: 'PT Telkom',
          code: 'KZ-276SJ34'
        }
      ],
      ratioDynamic: [0]
    }
  },
  watch: {
  },
  methods: {
    addConfigurationRow: function (i) {
      this.ratioDynamic.push([i])
    },
    removeConfigurationRow: function (index) {
      this.ratioDynamic.splice(index, 1)
    },
    removeTopings: function (index) {
      this.topingsList.splice(index, 1)
    },
    handleTriggerUpload () {
      this.$refs.file.click()
    },
    handleFileChange (e) {
      const input = e.target || this.$refs.file
      const file = input.files ? input.files[0] : null

      this.onFileChange(file)
    },
    onFileChange (file) {
      this.ProductImage = file
    },
    onTagValueChange (e) {
    },
    onTagInput (e) {
    },
    addToping (val) {
      this.topingsList = val
      this.dialog = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .text{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .img-popup{
    width: 48px !important;
    height: 100%;
    border-radius: 5px !important;
  }
</style>
