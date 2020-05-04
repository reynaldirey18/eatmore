<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title mb-5">Add New Product</h1>
      <div class="action-add d-flex flex-row">
        <v-btn
          @click.prevent="handleFormSubmit"
          color="#FDB526" class="text-center float-right"
          dark>
          <span class="text-capitalize">Save Product</span>
        </v-btn>
      </div>
    </div>

    <v-card class="">
      <v-row class="ml-3">
        <v-col cols="3" class="app-box-grey"><p class="app-sub pb-0 mb-0">Photo Product</p></v-col>
        <v-col cols="9" class="app-box"><p class="app-sub pb-0 mb-0">Product Information</p></v-col>
      </v-row>
      <v-row class="ml-3">
        <v-col class="app-menu text-center" cols="3" >
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
        <v-col cols="9" class="pr-7">
          <div>
            <p class="app-title-small ma-0">Product Name</p>
            <v-text-field
                label="Product Name"
                placeholder="Eg. Tandoori Chicken"
                single-line
                dense
                filled
                outlined
            ></v-text-field>
          </div>
          <div>
            <v-row>
              <v-col cols="6">
                <p class="app-title-small ma-0">Product Category</p>
                <v-select
                dense
                :items="ProductCatList"
                outlined
                ></v-select>
              </v-col>
              <v-col cols="6">
                <p class="app-title-small ma-0">Product Unit</p>
                <v-select
                dense
                :items="ProductUnitList"
                outlined
                ></v-select>
              </v-col>
            </v-row>
          </div>
          <div>
            <p class="text-blood">Product Price & Variants</p>
            <div
            :key="index.id"
            v-for="(row, index) in VariantDynamic">
              <v-row>
                <v-col cols="4">
                  <p class="app-title-small ma-0">Variant Name</p>
                  <v-text-field
                      label="Variant Name"
                      placeholder="Eg. 17.000"
                      v-model="name[index]"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <p class="app-title-small ma-0">Product SKU / Product ID</p>
                  <v-text-field
                      label="SKU"
                      placeholder="Eg. SKU-092-ff"
                      v-model="sku[index]"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <p class="app-title-small ma-0">Product Price</p>
                  <v-text-field
                      label="price"
                      placeholder="Eg. 17.000"
                      v-model="price[index]"
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
              color="#FAFAFA" class="text-center w-full"
              dark>
              <span class="text-blue-sm">Add Variants</span>
            </v-btn>
          </div>
          <div>
            <p class="text-blood mt-10">Product Modifier</p>
            <div>
              <v-list three-line flat>
                <v-list-item-group v-model="item" color="primary">
                  <v-list-item
                    v-for="(item, i) in topingsList"
                    :key="i"
                  >
                    <v-list-item-avatar class="img-popup mt-7">
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content class="py-5">
                      <v-list-item-title v-html="item.name"></v-list-item-title>
                      <v-list-item-subtitle v-html="item.code"></v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action class="py-5">
                      <v-icon  @click.prevent="removeTopings(index)" medium color="red" class="cursor-pointer">mdi-delete</v-icon>
                    </v-list-item-action>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
            <v-btn
              width="100%"
              @click="dialog = true"
              color="#FAFAFA" class="text-center w-full"
              dark>
              <span class="text-blue-sm">+Add Modifier</span>
            </v-btn>
          </div>
          <div>
            <p class="text-blood mt-10">Recipe, Stock Tracker & Cost (COGS)</p>
            <v-card color="#F5F5F5">
              <v-card-title class="text-blood-sm pb-1">Use Recipe As Stock Tracker</v-card-title>
              <v-card-subtitle class="pb-0">
                <div class="text">
                <p>Enable this setting to add this product to “<b>Recipes</b>” menu</p>
                  <v-switch
                    v-model="switch1"
                    color="#1DBA81"
                  ></v-switch>
                </div>
              </v-card-subtitle>
              <div class="mt-0 pt-0"  v-if="switch1 === false">
                <v-btn color="#F32626" text>Enabled</v-btn>
              </div>
              <div class="mt-0 pt-0" v-else>
                <v-btn color="#1DBA81" text>Disabled</v-btn>
              </div>
            </v-card>
            <p class="float-right" v-if="switch1 === true" style="color: #1DBA81">*Tracked Product’s stock</p>
            <div
            v-if="productDy">
              <div
              :key="index.id"
              v-for="(row, index) in productDynamic"
              class="mt-5">
                <v-row>
                  <v-col cols="4">
                    <p class="app-title-small ma-0">Product Name</p>
                    <v-text-field
                        label="Variant Name"
                        single-line
                        dense
                        filled
                        disabled
                        outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <p class="app-title-small ma-0">Product Cost</p>
                    <v-text-field
                        label="SKU"
                        placeholder="Eg.Rp.18000"
                        single-line
                        type="number"
                        prefix="Rp"
                        dense
                        filled
                        outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <p class="app-title-small ma-0">Stock/day</p>
                    <v-text-field
                        label="price"
                        placeholder="Eg. 200"
                        suffix="/Day"
                        single-line
                        dense
                        filled
                        outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
          <v-alert
          v-if="switch1 === true"
          dense
          color="rgba(253, 181, 38, 0.1)"
          class="mt-5"><p><b>Pro tips:</b> Learn how to use ingredient for tracking your product’s stock <v-icon size="14" class="cursor-pointer">mdi-launch</v-icon></p></v-alert>
          <div>
            <p class="text-blood mt-5">Others</p>
            <div>
              <p class="app-title-small ma-0">Tax</p>
              <v-select
              dense
              :items="TaxList"
              outlined
              ></v-select>
            </div>
          </div>
          <div>
              <p class="app-title-small ma-0">Product’s Tags</p>
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
        </v-col>
      </v-row>
    </v-card>
    <!-- modal -->
    <v-dialog v-model="dialog" persistent max-width="450">
      <v-card class="pa-2">
        <v-card-title class="text-blood pl-0 pt-1 pr-0 pb-3">Add Modifier
          <v-spacer></v-spacer>
          <v-icon class="float-right"
          @click.prevent="dialog = false">mdi-close</v-icon>
        </v-card-title>
        <div>
          <p class="text-blood-sm">Search toppings or modifier</p>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Eg: Egg"
            color="#fdb526"
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
            <span class="text-capitalize">Add Modifier</span>
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
      page: 1,
      pageCount: 0,
      itemsPerPage: 1000,
      search: '',
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
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'avatar'
        },
        { text: '', value: 'other', sortable: false }
      ],
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
      this.VariantDynamic.push([i])
      this.productDynamic.push([i])
    },
    removeConfigurationRow: function (index) {
      this.VariantDynamic.splice(index, 1)
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
