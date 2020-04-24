<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="title">Modifiers
          <v-btn
            @click.prevent="gotoAdd()"
            color="#FDB526" class="text-center float-right"
            dark>
            <span class="text-capitalize">Add New Topping</span>
          </v-btn>
        </h1>
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
        <p class="text-blood">No Modifier In Here</p>
        <p>Add Modifier, so Your Product has more chooises</p>
      </div>
      <div v-if="product.length > 1">
        <v-simple-table fixed-header height="auto">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left" style="background-color: rgba(253, 181, 38, 0.1);"><div class="text-orange">Recipe Name</div></th>
                <th class="text-center" style="background-color: rgba(253, 181, 38, 0.1);"><div class="text-orange">Price</div></th>
                <th class="text-center" style="background-color: rgba(253, 181, 38, 0.1);"><div class="text-orange">Ingredient Amount</div></th>
                <th class="text-center" style="background-color: rgba(253, 181, 38, 0.1);"><div class="text-orange">Ingredient Stock</div></th>
                <th class="text-center" style="background-color: rgba(253, 181, 38, 0.1);"></th>
                <th class="text-center" style="background-color: rgba(253, 181, 38, 0.1);"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in product" :key="data.id">
                <td>
                  <v-row>
                    <v-col cols="2">
                      <v-img src="https://cdn.popbela.com/content-images/post/20191203/untitled-design-16-2f73e051e25e4e34e4278b2254445e90_750x500.jpg" style="width:90px; height:48px" aspect-ratio="1.7"></v-img>
                    </v-col>
                    <v-col cols="10">
                      <span class="text-blood">{{data.name}}</span><br>
                      <span>{{data.number}}</span>
                    </v-col>
                  </v-row>
                </td>
                <td class="text-center">{{data.price}}</td>
                <td class="text-center">{{data.amount}}</td>
                <td class="text-green text-center" v-if="data.stock == 'In Stock'">{{data.stock}}</td>
                <td class="text-grey-sm text-center" v-else-if="data.stock == 'Untracked'">{{data.stock}}</td>
                <td class="text-red text-center" v-else-if="data.stock == 'Out Of Stock'">{{data.stock}}</td>
                <td class="text-yellow text-center" v-else-if="data.stock == 'Warning'">{{data.stock}}</td>
                <td class="pt-4 text-right"><p class="text-blue cursor-pointer"  @click="goToEdit()">Edit</p></td>
                <td class="cursor-pointer">
                  <v-btn icon @click="goToEdit()">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
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
      page: 1,
      docExcel: null,
      dialog: false,
      product: [
        {
          id: 1,
          name: 'Fried Rice Chiken Noya',
          number: 'NS-256-raw',
          price: 'Rp 1.000.000',
          amount: '4',
          stock: 'In Stock'
        },
        {
          id: 2,
          name: 'Rendang',
          number: 'NS-256-raw',
          price: 'Rp 9.999.999',
          amount: '7',
          stock: 'In Stock'
        },
        {
          id: 3,
          name: 'Rujak Cikur',
          number: 'NS-256-raw',
          price: 'Rp 1.330.000',
          amount: '4',
          stock: 'In Stock'
        },
        {
          id: 4,
          name: 'Pepes Lauk',
          number: 'NS-256-raw',
          price: 'Rp 5.000.000',
          amount: '4',
          stock: 'In Stock'
        },
        {
          id: 5,
          name: 'Ayam Lado Merah',
          number: 'NS-256-raw',
          price: 'Rp 6.000.000',
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
    gotoAdd () {
      setTimeout(() => {
        this.$router.push('/products/add-modifiers')
      }, 1000)
    }
  }
}
</script>
