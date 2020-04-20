<template>
  <div>
    <h1 class="app-title mb-5">Add New Product
    <v-btn
      @click.prevent="handleFormSubmit"
      color="#FDB526" class="text-center float-right"
      dark>
      <span class="text-capitalize">Save Product</span>
    </v-btn></h1>

    <v-card>
      <v-toolbar class="app-toolbar-menu-2" dense short flat color="white">
        <v-toolbar-title class="app-subtitle app-toolbar-menu-title-2">Photo Product</v-toolbar-title>
        <v-toolbar-title class="pl-3 app-subtitle">Product Information</v-toolbar-title>
      </v-toolbar>
      <v-row class="ml-3">
        <v-col class="app-menu text-center" cols="auto" style="min-width: 311px">
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
        <v-col cols="10" style="max-width: 77% !important" class="">
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
            <div>
              <v-row>
                <v-col cols="4">
                  <p class="app-title-small ma-0">Variant Name</p>
                  <v-text-field
                      label="Variant Name"
                      placeholder="Eg. 17.000"
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
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="auto">
                  <div class="pt-7">
                    <v-icon medium color="red" class="cursor-pointer">mdi-delete</v-icon>
                  </div>
                </v-col>
              </v-row>
            </div>
            <v-btn
              width="100%"
              @click.prevent="handleFormSubmit"
              color="#FAFAFA" class="text-center w-full"
              dark>
              <span class="text-blue-sm">Add Variants</span>
            </v-btn>
          </div>
          <div>
            <p class="text-blood mt-10">Product Price & Variants</p>
            <v-btn
              width="100%"
              @click.prevent="handleFormSubmit"
              color="#FAFAFA" class="text-center w-full"
              dark>
              <span class="text-blue-sm">+Add Toping</span>
            </v-btn>
          </div>
          <div>
            <p class="text-blood mt-10">Recipe, Stock Tracker & Cost (COGS)</p>
            <v-card color="#F5F5F5">
              <v-card-title class="text-blood-sm">Use Recipe As Stock Tracker</v-card-title>
              <v-card-subtitle class="pb-0">
              <p>Enable this setting to add this product to “<b>Recipes</b>” menu</p>
                <v-switch
                  v-model="switch1"
                ></v-switch>
              </v-card-subtitle>
              <v-card-actions class="pt-0">
                <v-btn color="red" text>Disabled</v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-card>
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
      switch1: false,
      ProductImage: null,
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
      ]
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
      this.ProductImage = file
    }
  }
}
</script>
