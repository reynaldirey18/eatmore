<template>
  <div>

    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="title">Products</h1>
      <div class="action-add d-flex flex-row">
        <v-btn
          @click.prevent="handleFormSubmit"
          class="text-center mx-2"
          text>
          <span class="text-blue">Download Excel Sample Format</span>
        </v-btn>
        <v-btn
          @click.prevent="handleFormSubmit"
          color="#333333" class="text-center mx-2"
          dark>
          <span class="text-capitalize">Upload Excel File</span>
        </v-btn>
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-white"
          dark>Add New Product
        </v-btn>
      </div>
    </div>

    <v-card class="mt-5" style="height:auto;">
      <div class="pa-10 text-center center" v-if="resdata.length < 1">
        <v-img
            class="center"
            :src="eatmoreLogo"
            width="303.27px"
            height="202px"
        />
        <p class="text-blood">No Product? What Are You Want To Sell?</p>
        <p>Add your catalog product and start to selling</p>
        <v-btn
          @click.prevent="handleFormSubmit"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Add New Floor</span>
        </v-btn>
      </div>
      <div v-if="resdata.length > 1">
        <v-data-table
          :headers="headers"
          :items="resdata"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.name="{item}">
            <v-row>
              <v-col cols="2" class="pa-1">
                <v-img :src="item.product_image" style="width:120px; height:48px; border-radius: 4px;" aspect-ratio="1.7"></v-img>
              </v-col>
              <v-col cols="10">
                <span class="text-blood">{{item.product_name}}</span><br>
                <span>{{item.number}}</span>
              </v-col>
            </v-row>
          </template>

          <template v-slot:item.stock="{item}">
            <div>
              <div class="text-green" v-if="item.stock == 'available'">{{item.stock}}</div>
              <div class="text-grey-sm" v-else-if="item.stock == 'Untracked'">{{item.stock}}</div>
              <div class="text-red" v-else-if="item.stock == 'Out Of Stock'">{{item.stock}}</div>
              <div class="text-yellow" v-else-if="item.stock == 'Warning'">{{item.stock}}</div>
            </div>
          </template>
          <template v-slot:item.actions>
            <div class="pt-4"><p class="text-blue cursor-pointer"  @click="dialog = true">Quick Edit</p></div>
          </template>
          <template v-slot:item.other={item}>
            <v-btn icon @click="goToEdit(item)">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4">
          Show {{itemsPerPage}} of {{resdata.length}} Products
          </div>
          <div>
          <v-pagination
            v-model="page"
            color="#FDB526"
            :length="pageCount">
          </v-pagination>
          </div>
        </div>
      </div>
    </v-card>
    <v-dialog v-model="dialog" persistent max-width="350">
      <v-card class="pa-2">
        <v-card-title class="text-blood pl-0 pt-1 pr-0 pb-3">Upload Product Excel
          <v-spacer></v-spacer>
          <v-icon class="float-right"
          @click.prevent="dialog = false">mdi-close</v-icon>
        </v-card-title>
        <app-file-upload
            description="Maximum size 2 mb"
            @onFileChange="onFileChange"
            :value="docExcel">
              <template v-slot:innerDescription>
                <div class="d-flex flex-column justify-center">
                  <v-icon class="align-self-center mb-2" style="font-size">mdi-file-excel</v-icon>
                  <p class="app-subtitle text-center">Upload Spreedsheet Document</p>
                  <p class="text-center">Document format can be .xls, .xlt, .xm</p>
                </div>
              </template>
        </app-file-upload>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="dialog = false"
            color="#FDB526" class="text-center mt-3 w-full"
            width="100%"
            dark>
            <span class="text-capitalize">Upload Document</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AppFileUpload from '@/components/AppDocUpload'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('product')

export default {
  name: 'product',
  components: {
    AppFileUpload
  },
  computed: {
    eatmoreLogo () {
      return require('@/assets/img/NotFound.png')
    },
    ...mapState([
      'resdata'
    ])
  },
  data () {
    return {
      search: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      docExcel: null,
      dialog: false,
      headers: [
        {
          text: 'Product Name',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Price', value: 'price' },
        { text: 'Category', value: 'category' },
        { text: 'Variant', value: 'variant_count' },
        { text: 'Tax', value: 'tax_value' },
        { text: 'Stock', value: 'stock' },
        { text: '', value: 'actions', sortable: false },
        { text: '', value: 'other', sortable: false }
      ],
      product: [
        {
          id: 1,
          name: 'ES Serut',
          number: 'NS-256-raw',
          category: 'Appetaizer',
          variant: '-',
          tax: '3',
          stock: 'In Stock'
        },
        {
          id: 2,
          name: 'Rendang',
          number: 'NS-256-raw',
          category: 'Main-dish',
          variant: '2',
          tax: '3',
          stock: 'Untracked'
        },
        {
          id: 3,
          name: 'Rujak Cikur',
          number: 'NS-256-raw',
          category: 'Side-dish',
          variant: '-',
          stock: 'In Stock'
        },
        {
          id: 4,
          name: 'Pepes Lauk',
          number: 'NS-256-raw',
          category: 'Main-dish',
          variant: '-',
          stock: 'Out Of Stock'
        },
        {
          id: 5,
          name: 'Ayam Lado Merah',
          number: 'NS-256-raw',
          category: 'Appetizer',
          variant: '4',
          stock: 'Warning'
        }
      ]
    }
  },
  watch: {
  },
  mounted () {
    this.$store.dispatch('product/getProduct')
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
      this.docExcel = file
    },
    gotoAdd () {
      setTimeout(() => {
        this.$router.push('/products/add-product')
      }, 1000)
    },
    goToEdit (item) {
      setTimeout(() => {
        this.$router.push('/products/edit-product')
      }, 1000)
    }
  }
}
</script>
