<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <v-form @submit.prevent="handleSubmit(submitForm)">
        <div class="mt-4 d-flex flex-row justify-space-between">
          <h1 class="app-title mb-5">Add New Product</h1>
          <div class="action-add d-flex flex-row">
            <v-btn
               type="submit"
              :loading="loading"
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
                  <p class="text-grey-light">Maximum size 3 mb </p>
                  <p class="text-regular text-left">Pro tips: Use photo product with high resolution</p>
                  <v-btn @click="handleTriggerUpload"
                  color="#FAFAFA" class="text-center w-full">
                    <span class="text--primary">Upload Image</span>
                  </v-btn>
                  <input class="d-none" type="file" @change="handleFileChange" ref="file" />
                </v-col>
                <!-- product Information -->
                <v-col cols="9" class="pr-7">
                  <div>
                    <p class="app-title-small ma-0">Product Name</p>
                    <ValidationProvider v-slot="{ errors }" name="Username" rules="required">
                    <v-text-field
                        label="Product Name"
                        placeholder="Eg. Tandoori Chicken"
                        :error-messages="errors"
                        v-model="productName"
                        single-line
                        dense
                        filled
                        outlined
                    ></v-text-field>
                    </ValidationProvider>
                  </div>
                  <div>
                    <v-row>
                      <v-col cols="6">
                        <p class="app-title-small ma-0">Product Category</p>
                        <ValidationProvider v-slot="{ errors }" name="Prodyct Category" rules="required">
                        <v-select
                        dense
                        :items="ProductCatList"
                        :error-messages="errors"
                        :reduce="text => text.value"
                        v-model="category"
                        outlined
                        ></v-select>
                        </ValidationProvider>
                      </v-col>
                      <v-col cols="6">
                        <p class="app-title-small ma-0">Product Unit</p>
                        <ValidationProvider v-slot="{ errors }" name="Product Unit" rules="required">
                        <v-select
                        dense
                        v-model="unit"
                        :items="ProductUnitList"
                        :error-messages="errors"
                        :reduce="text => text.value"
                        outlined
                        ></v-select>
                        </ValidationProvider>
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
                          <ValidationProvider v-slot="{ errors }" name="Variant Name" rules="required">
                          <v-text-field
                              label="Variant Name"
                              placeholder="Eg. Baso"
                              :error-messages="errors"
                              v-model="name[index]"
                              single-line
                              dense
                              filled
                              outlined
                          ></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="3">
                          <p class="app-title-small ma-0">Product SKU / Product ID</p>
                          <ValidationProvider v-slot="{ errors }" name="Product SKU" rules="required">
                          <v-text-field
                              label="SKU"
                              placeholder="Eg. SKU-092-ff"
                              :error-messages="errors"
                              v-model="sku[index]"
                              single-line
                              dense
                              filled
                              outlined
                          ></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="4">
                          <p class="app-title-small ma-0">Product Price</p>
                          <ValidationProvider v-slot="{ errors }" name="Product Price" rules="required">
                          <v-text-field
                              label="price"
                              placeholder="Eg. 17.000"
                              v-model="price[index]"
                              :error-messages="errors"
                              prefix="Rp"
                              single-line
                              dense
                              filled
                              outlined
                          ></v-text-field>
                          </ValidationProvider>
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
                            <v-list-item-avatar class="img-popup mt-7" v-if="item.product_image !== null">
                              <v-img :src="item.product_image"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-avatar class="img-popup mt-7" v-else>
                              <v-img src="https://thefittingsource.com/wp-content/uploads/2017/12/temp-inventory-landing.jpg"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content class="py-5">
                              <v-list-item-title v-html="item.product_name"></v-list-item-title>
                              <v-list-item-subtitle v-html="item.product_id"></v-list-item-subtitle>
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
                      @click="modifierShow()"
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
                        <v-btn color="#F32626" text>Disabled</v-btn>
                      </div>
                      <div class="mt-0 pt-0" v-else>
                        <v-btn color="#1DBA81" text>Enabled</v-btn>
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
                          <v-col cols="3">
                            <p class="app-title-small ma-0">Product Name </p>
                            <v-text-field
                                v-model="name[index]"
                                single-line
                                disabled
                                readonly
                                dense
                                filled
                                outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="3">
                            <p class="app-title-small ma-0">Product Cost</p>
                            <v-text-field
                                label="SKU"
                                v-model="cost[index]"
                                placeholder="Eg.Rp.18000"
                                single-line
                                type="number"
                                prefix="Rp"
                                dense
                                filled
                                outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="3">
                            <p class="app-title-small ma-0">Qty/day</p>
                            <v-text-field
                                label="price"
                                placeholder="Eg. 200"
                                v-model="qty[index]"
                                suffix="/Day"
                                single-line
                                dense
                                filled
                                outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="3">
                            <p class="app-title-small ma-0">Min Qty</p>
                            <v-text-field
                                label="price"
                                placeholder="Eg. 200"
                                v-model="min[index]"
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
                      v-model="taxData"
                      :reduce="text => text.value"
                      outlined
                      ></v-select>
                    </div>
                  </div>
                  <div>
                      <p class="app-title-small ma-0">Product’s Tags {{tags}}</p>
                      <ValidationProvider v-slot="{ errors }" name="Product Tags number" rules="required">
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
                          :error-messages="errors"
                      ></v-autocomplete>
                      </ValidationProvider>
                      <p class="black20">This tag will help customer to find your restaurant</p>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-form>
        </ValidationObserver>
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
            :items="resmodifier"
            :search="search"
            :items-per-page="itemsPerPage"
            hide-default-header
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
          >
            <template v-slot:item.avatar="{item}">
              <v-row>
                <v-col cols="2" class="pa-1" v-if="item.product_image !== null">
                  <v-img :src="item.product_image" style="width:120px; height:48px; border-radius: 4px;" aspect-ratio="1.7"></v-img>
                </v-col>
                <v-col cols="10">
                  <span class="text-blood">{{item.product_name}}</span><br>
                  <span>{{item.product_id}}</span>
                </v-col>
              </v-row>
            </template>
            <template v-slot:item.outher="{item}">
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
    <ModalSuccess  :title="'Product Success Added'" :dialog="popupSuccess"  @close="popupSuccess = false">
      <div v-slot.v-card-actions>
        <v-btn
          color="#FDB526" class="mt-3 w-full"
          width="100%"
          @click="goToNavigate()"
          dark>
          <span class="text-capitalize">Okaay</span>
        </v-btn>
      </div>
    </ModalSuccess>
  </div>
</template>

<script>
import AppFileUpload from '@/components/AppFileUpload'
import ModalSuccess from '@/components/modal/ModalSuccess'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('product')
export default {
  name: 'AddProduct',
  components: {
    AppFileUpload,
    ModalSuccess
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
      loading: false,
      tagList: ['JunkFood', 'Chicken', 'Contain Park'],
      tagInputValue: '',
      headers: [
        {
          text: '',
          align: 'start',
          value: 'product_name'
        },
        { text: '', value: 'outher', sortable: false }
      ],
      TaxList: [],
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
      VariantDynamic: [0],
      popupSuccess: false,
      // models
      productName: null,
      category: null,
      unit: null,
      taxData: null,
      taxActive: false,
      tags: null,
      name: [],
      sku: [],
      price: [],
      qty: [],
      min: [],
      cost: []
    }
  },
  computed: {
    ...mapState([
      'resmodifier',
      'tax'
    ])
  },
  mounted () {
    this.$store.commit('product/SET_Page', 1)
    this.$store.commit('product/SET_pageSize', 100)
    this.$store.dispatch('product/modifier')
    this.$store.dispatch('product/taxs')
  },
  watch: {
    tax (newval) {
      newval.forEach((item, index) => {
        var taxjoin = item.tax_name.concat(' (' + item.tax_value + '%)')
        this.TaxList.push({
          text: taxjoin,
          value: item.tax_id
        })
      })
      console.log(this.TaxList)
    },
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
    modifierShow () {
      // this.$store.dispatch('product/modifier')
      this.dialog = true
    },
    goToNavigate () {
      this.popupSuccess = false
    },
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
      console.log(this.topingsList)
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
    },
    // submit

    closeAndNavigate () {
      setTimeout(() => {
        this.$router.push('/products')
      }, 200)
    },
    submitForm () {
      this.loading = true
      var tempProduct = {}
      if (this.tax !== null) {
        this.taxActive = true
      } else {
        this.taxActive = false
      }
      if (this.switch1 === true) {
        this.recipe = true
      } else {
        this.recipe = true
      }
      // tempProduct.product_image = this.ProductImage
      tempProduct.product_name = this.productName
      tempProduct.product_category_id = this.category
      tempProduct.unit_id = this.unit
      tempProduct.recipe_stock_cost_tracker = this.recipe
      tempProduct.tax = this.taxActive
      tempProduct.tax_id = this.taxData
      this.tags.forEach((element, index) => {
        var tags = 'product_tags[' + index + ']'
        tempProduct[tags] = element
      })
      this.topingsList.forEach((element, index) => {
        var toping = 'product_modifiers[' + index + '][modifier_id]'
        tempProduct[toping] = element.product_id
      })
      this.name.forEach((element, index) => {
        var vname = 'product_variants[' + index + '][variant_name]'
        tempProduct[vname] = element
      })
      this.sku.forEach((data, index) => {
        var vsku = 'product_variants[' + index + '][variant_sku]'
        tempProduct[vsku] = data
      })
      this.price.forEach((element, index) => {
        var vsell = 'product_variants[' + index + '][variant_sell_price]'
        tempProduct[vsell] = element
      })
      this.cost.forEach((element, index) => {
        var vbuy = 'product_variants[' + index + '][variant_buy_price]'
        tempProduct[vbuy] = element
      })
      this.qty.forEach((element, index) => {
        var vmin = 'product_variants[' + index + '][variant_qty_perday]'
        tempProduct[vmin] = element
      })
      this.min.forEach((element, index) => {
        var vmin = 'product_variants[' + index + '][variant_min_qty]'
        tempProduct[vmin] = element
      })

      var formData = new FormData()
      for (var key in tempProduct) {
        formData.append(key, tempProduct[key])
      }
      this.$store.commit('product/set_addProduct', formData)
      this.$store.dispatch('product/sendAddProduct')
        .then(response => {
          console.log(response)
          const res = response.data
          if (res.status) {
            this.loading = false
            this.popupSuccess = true
            this.closeAndNavigate()
          } else {
            this.loading = false
            this.popupSuccess = true
            console.log(res.errors)
          }
          this.popupSuccess = true
          this.closeAndNavigate()
        }).catch((error) => {
          const message = error.response.data.message
          if (error.response.status === 400) {
            // this.$refs.form.setErrors({
            //   Email: [message],
            //   Username: [message]
            // })
            this.loading = false
          } else {
            this.errorMessage = message
            this.dialog2 = true
            this.loading = false
          }
        })
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
