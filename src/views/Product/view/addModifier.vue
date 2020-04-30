<template>
  <div>

    <div class="my-4 d-flex flex-row justify-space-between">
      <h1 class="title">Add New Modifier</h1>
      <div class="action-add d-flex flex-row">
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full mx-2 "
          dark>
          <span class="text-capitalize">Add New Modifier</span>
        </v-btn>
      </div>
    </div>
    <v-card style="min-height: 100vh;">
      <v-toolbar class="app-toolbar-menu-2" dense short flat color="white">
        <v-toolbar-title style="width: 311px" class="app-subtitle app-toolbar-menu-title-2">Modifier Image</v-toolbar-title>
        <v-toolbar-title class="pl-3 app-subtitle">Modifiers Information</v-toolbar-title>
      </v-toolbar>
      <v-row class="ml-3">
        <v-col class="app-menu text-center" cols="auto"  style="min-height: 820px;">
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
        <v-col cols="9" class="">
          <div>
            <p class="app-title-small ma-0">Modifier Name</p>
            <v-text-field
                label="Product Name"
                placeholder="Eg. 200"
                single-line
                dense
                filled
                outlined
            ></v-text-field>
          </div>
          <div class="pb-0 mb-0">
            <v-row class="pb-0 mb-0">
              <v-col cols="4">
                <p class="app-title-small ma-0">Modifier SKU / Modifier ID</p>
                <v-text-field
                    label="Variant Name"
                    placeholder="Eg. SKU-092-FF"
                    v-model="name"
                    single-line
                    dense
                    filled
                    outlined
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <p class="app-title-small ma-0">Modifier Price</p>
                <v-text-field
                    label="SKU"
                    placeholder="Eg. 17000"
                    prefix="Rp"
                    v-model="price"
                    single-line
                    dense
                    filled
                    outlined
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <p class="app-title-small ma-0">Modifier Cost</p>
                <v-text-field
                    label="price"
                    placeholder="Eg. 17.000"
                    prefix="Rp"
                    v-model="cost"
                    single-line
                    dense
                    filled
                    outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
          <div>
            <p class="text-blood mt-0">Quantity and Cost/Topping</p>
            <v-card color="#F5F5F5">
              <v-card-title class="text-blood-sm pb-1">Use Recipe As Quantity and Cost Tracker</v-card-title>
              <v-card-subtitle class="pb-0">
                <div class="text">
                <p>Enable this setting to add ingredient from inventories, price will be count from AVG Cost</p>
                  <v-switch
                    v-model="switch1"
                    color="#1DBA81"
                  ></v-switch>
                </div>
              </v-card-subtitle>
              <div class="mt-0 pt-0"  v-if="switch1 === false">
                <v-btn color="red" text>Disabled</v-btn>
              </div>
              <div class="mt-0 pt-0" v-else>
                <v-btn color="#1DBA81" text>Enabled</v-btn>
              </div>
            </v-card>
            <p class="float-right" v-if="switch1 === true" style="color: #1DBA81">*Untracked product stock</p>
            <div v-if="productDy">
              <div class="pt-3">
                <div class="px-0 mx-0"
                  v-for="(item, i) in topingsList"
                  :key="i"
                >
                  <v-row>
                    <v-col cols="4">
                      <p class="app-title-small ma-0">Inventory Name</p>
                      <v-text-field
                          label="SKU"
                          background-color="#E6E6E6"
                          v-model="item.name"
                          single-line
                          dense
                          disabled
                          filled
                          outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <p class="app-title-small ma-0">Quantity</p>
                      <v-text-field
                          label="SKU"
                          placeholder="Eg. 200"
                          single-line
                          dense
                          filled
                          outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <p class="app-title-small ma-0">Unit</p>
                      <v-select
                      dense
                      :items="UnitList"
                      outlined
                      ></v-select>
                    </v-col>
                    <v-col cols="auto">
                      <v-icon  @click.prevent="removeTopings(index)" medium color="red" class="cursor-pointer py-7">mdi-delete</v-icon>
                    </v-col>
                  </v-row>
                </div>
              </div>
              <v-btn
                width="100%"
                @click="dialog = true"
                color="#FAFAFA" class="text-center pt-0 mt-1"
                dark>
                <span class="text-blue-sm">+ Add Ingredient</span>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <!-- modal -->
    <v-dialog v-model="dialog" persistent max-width="450">
      <v-card class="pa-2">
        <v-card-title class="text-blood pl-0 pt-1 pr-0 pb-3">Add Ingredient
          <v-spacer></v-spacer>
          <v-icon class="float-right"
          @click.prevent="dialog = false">mdi-close</v-icon>
        </v-card-title>
        <div>
          <p class="text-blood-sm">Search inventories</p>
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
            :items="toppingsList"
            :search="search"
            :items-per-page="itemsPerPage"
            hide-default-header
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
          >
            <template v-slot:item.avatar="{item}">
              <v-row>
                <v-col cols="2" class="pa-1">
                  <v-img src="https://goodminds.id/handsome/wp-content/uploads/2019/04/18.-Ragam-Menu-Takjil-Buka-Puasa-yang-Praktis-dan-Menyegarkan.jpg" style="width:120px; height:48px; border-radius: 4px;" aspect-ratio="1.7"></v-img>
                </v-col>
                <v-col cols="10">
                  <span class="text-blood">{{item.name}}</span><br>
                  <span>{{item.code}}</span>
                </v-col>
              </v-row>
            </template>
            <template v-slot:item.other="{item}">
              <v-checkbox v-model="selected" :value="item"></v-checkbox>
            </template>
          </v-data-table>
          </div>
        </div>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="addToping(selected)"
            color="#FDB526" class="text-center mt-3 w-full"
            width="100%"
            dark>
            <span class="text-capitalize">Add Ingredient</span>
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
      item: [],
      selected: [],
      topingsList: [],
      active: false,
      switch1: false,
      dialog: false,
      ProductImage: null,
      tags: [],
      name: [],
      sku: [],
      price: [],
      tagList: ['JunkFood', 'Chicken', 'Contain Park'],
      tagInputValue: '',
      TaxList: [
        {
          text: 'PPN (10%)',
          value: 1
        }
      ],
      ProductUnitList: [
        {
          text: 'Pcs',
          value: 1
        }
      ],
      ProductCatList: [
        {
          text: 'Appetizer',
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
      UnitList: [
        {
          text: 'Gram (g)',
          value: 1
        }
      ],
      toppingsList: [
        {
          id: 1,
          name: 'Egg',
          code: 'KZ-276SJ27',
          avatar: 'https://assets.mubicdn.net/images/cast_member/721101/image-original.jpg?1570516226'
        },
        {
          id: 2,
          name: 'Cheese',
          code: 'KZ-276SJ34',
          avatar: 'https://asset.winnetnews.com/image/cache/slide/post/image-bukan-janda-ini-status-asli-aurelie-moeremans-1580793251.jpg'
        }
      ],
      productDy: true,
      productDynamic: [0],
      VariantDynamic: [0]
    }
  },
  watch: {
    switch1 (newVal) {
      console.log(newVal)
      if (newVal === true) {
        this.productDy = false
      } else {
        this.productDy = true
      }
    }
  },
  methods: {
    addConfigurationRow: function (i) {
      this.productDynamic.push([i])
    },
    removeConfigurationRow: function (index) {
      this.productDynamic.splice(index, 1)
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
