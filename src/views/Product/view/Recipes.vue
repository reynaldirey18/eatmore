<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="title">Recipes</h1>
      </v-col>
    </v-row>

    <v-card class="mt-5" style="height:auto;">
      <div class="pa-10 text-center center" v-if="product.length < 1">
        <v-img
            class="center"
            :src="eatmoreLogo"
            width="303.27px"
            height="202px"
        />
        <p class="text-blood">No Recipe In Here</p>
        <p>Add your catalog product and start to selling</p>
      </div>
      <div v-if="product.length > 1">
        <v-data-table
          :headers="headers"
          :items="product"
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
                <v-img src="https://asset.winnetnews.com/image/cache/slide/post/image-doyan-jengkol-ketahui-manfaat-dan-dampak-untuk-kamu.jpg" style="width:90px; height:48px; border-radius: 4px;" aspect-ratio="1.7"></v-img>
              </v-col>
              <v-col cols="10">
                <span class="text-blood">{{item.name}}</span><br>
                <span>{{item.number}}</span>
              </v-col>
            </v-row>
          </template>
          <template v-slot:item.stock="{item}">
            <div>
              <div class="text-green" v-if="item.stock == 'In Stock'">{{item.stock}}</div>
              <div class="text-grey-sm" v-else-if="item.stock == 'Untracked'">{{item.stock}}</div>
              <div class="text-red" v-else-if="item.stock == 'Out Of Stock'">{{item.stock}}</div>
              <div class="text-yellow" v-else-if="item.stock == 'Warning'">{{item.stock}}</div>
            </div>
          </template>
          <template v-slot:item.actions>
            <div class="pt-4"><p class="text-blue cursor-pointer"  @click="goToEdit()">Edit</p></div>
          </template>
          <template v-slot:item.other>
            <v-btn icon @click="goToEdit()">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4">
          Show {{itemsPerPage}} of {{product.length}} Recipes
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
export default {
  name: 'product',
  components: {
    AppFileUpload
  },
  computed: {
    eatmoreLogo () {
      return require('@/assets/img/NotFound.png')
    }
  },
  data () {
    return {
      search: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: 'Product Name', value: 'name' },
        { text: 'Quantity/Unit', align: 'center', value: 'quality' },
        { text: 'Ingredient Amount', align: 'center', value: 'amount' },
        { text: 'Ingredient Stock', align: 'center', value: 'stock' },
        { text: '', value: 'actions', align: 'end', sortable: false },
        { text: '', value: 'other', sortable: false }
      ],
      docExcel: null,
      dialog: false,
      product: [
        {
          id: 1,
          name: 'Fried Rice Chiken Noya',
          number: 'NS-256-raw',
          quality: '1/pcs',
          amount: '4',
          stock: 'In Stock'
        },
        {
          id: 2,
          name: 'Rendang',
          number: 'NS-256-raw',
          quality: 'Multiple Variants',
          amount: 'Multiple Variants',
          stock: 'In Stock'
        },
        {
          id: 3,
          name: 'Rujak Cikur',
          number: 'NS-256-raw',
          quality: '1/pcs',
          amount: '4',
          stock: 'In Stock'
        },
        {
          id: 4,
          name: 'Pepes Lauk',
          number: 'NS-256-raw',
          quality: '1/pcs',
          amount: '4',
          stock: 'In Stock'
        },
        {
          id: 5,
          name: 'Ayam Lado Merah',
          number: 'NS-256-raw',
          quality: '1/pcs',
          amount: '4',
          stock: 'In Stock'
        }
      ]
    }
  },
  watch: {
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
    goToEdit () {
      setTimeout(() => {
        this.$router.push('/products/edit-recipes')
      }, 1000)
    }
  }
}
</script>
