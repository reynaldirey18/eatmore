<template>
  <div>
    <v-row>
      <v-col cols="6" class="mr-12">
        <h1 class="title">Inventories</h1>
      </v-col>
      <v-col cols="auto" class="text-blue">
        <p class="pt-2 cursor-pointer">Download Excel Sample Format</p>
      </v-col>
      <v-col cols="auto">
        <v-btn
          @click.prevent="handleFormSubmit"
          color="#333333" class="text-center"
          dark>
          <span class="text-capitalize">Upload Excel File</span>
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Add New Inventory</span>
        </v-btn>
      </v-col>
    </v-row>

    <v-card class="mt-5" style="height:auto;">
      <div class="pa-10 text-center center" v-if="desserts.length < 1">
        <v-img
            class="center"
            :src="eatmoreLogo"
            width="303.27px"
            height="202px"
        />
        <p class="text-blood">No Inventory In Here</p>
        <p>Start to adding your inventory to track your bussiness</p>
      </div>
      <div v-if="desserts.length > 1">
        <v-data-table
          :headers="headers"
          :items="desserts"
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
          <template v-slot:item.stock="{item}">
            <div>
              <div class="text-green" v-if="item.stock == 'In Stock'">{{item.stock}}</div>
              <div class="text-grey-sm" v-else-if="item.stock == 'Untracked'">{{item.stock}}</div>
              <div class="text-red" v-else-if="item.stock == 'Out Of Stock'">{{item.stock}}</div>
              <div class="text-yellow" v-else-if="item.stock == 'Warning'">{{item.stock}}</div>
            </div>
          </template>
          <template v-slot:item.actions>
            <div class="pt-4"><p class="text-blue cursor-pointer"  @click="dialog = true">Quick Edit</p></div>
          </template>
          <template v-slot:item.other>
            <v-btn icon @click="goToEdit()">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4">
          Show {{itemsPerPage}} of {{desserts.length}} Inventories
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
  </div>
</template>

<script>
export default {
  name: 'product',
  components: {
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
      dropdown_font: false,
      headers: [
        {
          text: 'Product Name',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Type', value: 'type' },
        { text: 'In Stock', value: 'inStock' },
        { text: 'Unit', value: 'unit' },
        { text: 'Stock', value: 'stock' },
        { text: '', value: 'actions', sortable: false },
        { text: '', value: 'other', sortable: false }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          number: 'NDXA-123-k',
          type: 'Raw',
          inStock: '42',
          unit: 'Kilogram (Kg)',
          stock: 'In Stock'
        },
        {
          name: 'Frozen Yogurt',
          number: 'NDXA-123-k',
          type: 'Raw',
          inStock: '42',
          unit: 'Kilogram (Kg)',
          stock: 'In Stock'
        },
        {
          name: 'Frozen Yogurt',
          number: 'NDXA-123-k',
          type: 'Raw',
          inStock: '42',
          unit: 'Kilogram (Kg)',
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
    gotoAdd () {
      setTimeout(() => {
        this.$router.push('/inventories/add-inventory')
      }, 1000)
    },
    goToEdit () {
      setTimeout(() => {
        this.$router.push('/inventories/edit-inventory')
      }, 1000)
    }
  }
}
</script>
