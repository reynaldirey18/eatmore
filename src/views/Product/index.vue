<template>
  <div>
    <v-row>
      <v-col cols="7">
        <h1 class="title">Dashboard</h1>
      </v-col>
      <v-col cols="2" class="text-blue">
        <p class="pt-2 cursor-pointer">Download Excel Sample Format</p>
      </v-col>
      <v-col cols="1/2">
        <v-btn
          @click.prevent="handleFormSubmit"
          color="#333333" class="text-center"
          dark>
          <span class="text-capitalize">Upload Excel File</span>
        </v-btn>
      </v-col>
      <v-col cols="1/2">
        <v-btn
          @click.prevent="handleFormSubmit"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Add New Product</span>
        </v-btn>
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
        <p class="text-blood">No Product? What Are You Want To Sell?</p>
        <p>Add your catalog product and start to selling</p>
        <v-btn
          @click.prevent="handleFormSubmit"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Add New Floor</span>
        </v-btn>
      </div>
      <div v-if="product.length > 1">
        <v-simple-table fixed-header height="auto">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);">Product Name</th>
                <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);">Price</th>
                <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);">Category</th>
                <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);">Variant</th>
                <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);">Tax</th>
                <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);">Stock</th>
                <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);"></th>
                <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in product" :key="data.id">
                <td>
                  <v-row>
                    <v-col cols="2">
                      <v-img src="https://asset.winnetnews.com/image/cache/slide/post/image-doyan-jengkol-ketahui-manfaat-dan-dampak-untuk-kamu.jpg" style="width:90px; height:48px" aspect-ratio="1.7"></v-img>
                    </v-col>
                    <v-col cols="10">
                      <span class="text-blood">{{data.name}}</span><br>
                      <span>{{data.number}}</span>
                    </v-col>
                  </v-row>
                </td>
                <td class="">Rp.1.000.000</td>
                <td class="">{{data.category}}</td>
                <td>{{data.variant}}</td>
                <td class="">10%</td>
                <td class="text-green" v-if="data.stock == 'In Stock'">{{data.stock}}</td>
                <td class="text-grey-sm" v-else-if="data.stock == 'Untracked'">{{data.stock}}</td>
                <td class="text-red" v-else-if="data.stock == 'Out Of Stock'">{{data.stock}}</td>
                <td class="text-yellow" v-else-if="data.stock == 'Warning'">{{data.stock}}</td>
                <td class="pt-4"><p class="text-blue cursor-pointer">Quick Edit</p></td>
                <td class="cursor-pointer" @click="dialog = true"><v-icon>mdi-dots-horizontal</v-icon></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-row>
          <v-col cols="8">
          </v-col>
          <v-col cols="4">
            <v-pagination
              v-model="page"
              :length="5"
              color="#FDB526"
            ></v-pagination>
          </v-col>
        </v-row>
      </div>
    </v-card>
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card class="pa-2">
        <v-card-title class="headline text-blood-xs pl-0 pb-5">Upload Product Excel</v-card-title>
        <app-file-upload
            description="Maximum size 2 mb"
            @onFileChange="onFileChange"
            :value="docExcel">
        </app-file-upload>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="dialog = false"
            color="#FDB526" class="text-center w-full"
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
      page: 1,
      docExcel: null,
      dialog: false,
      product: [
        {
          id: 1,
          name: 'Semur Jengkol',
          number: 'NS-256-raw',
          category: 'Appetaizer',
          variant: '-',
          stock: 'In Stock'
        },
        {
          id: 2,
          name: 'Rendang',
          number: 'NS-256-raw',
          category: 'Main-dish',
          variant: '2',
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
    }
  }
}
</script>
