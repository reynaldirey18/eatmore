<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">New Promo</h1>
      <div class="action-add">
        <v-btn color="#3D87F4" text small class="mr-6">Save as Draft</v-btn>
        <v-btn color="#FDB526" dark small width="160px">Publish Promo</v-btn>
      </div>
    </div>
    <v-card class="pa-4 mt-6" outlined>
      <div class="picture d-flex">
        <v-icon class="align-self-center mx-auto" color="#000000" size="30">mdi-file-image-outline</v-icon>
      </div>
      <div class="detail-promo d-flex flex-column pa-4 mb-2">
        <span class="app-subtitle mb-2">PROMO STAY AT HOME</span>
        <span class="app-subtitle-small mb-2">Potongan Harga Rp. 23.000</span>
        <span>Valid Date 19-11-2020</span>
      </div>
      <div class="subtitle mt-8">
        <span class="app-subtitle-small">Description</span>
      </div>
      <div class="description pa-4 mt-4 d-flex flex-column">
        <span class="app-subtitle-small">Benefit For Merchant</span>
        <span>Dengan Join Promo Eatmore, maka merchant mendapatkan benefit dari promo tersebut yang berupa :</span>
        <span>- Produk dari merchant akan di tampilkan pada menu teratas<br>- Merchant tidak dikenakan biaya pajak<br>- Merchant mendapatkan untung dari promo<br>- Merchant mendapatkan bagi hasil dari promo sebesar 20%</span>
        <span class="app-subtitle-small mt-4">Promo Terms</span>
        <span>Promo ini mempunyai syarat dan ketentuan untuk Merchant dan Customer :</span>
        <span>- Promo ini hanya berlaku untuk take away<br>- Produk yang sudah terpilih tidak dapat di hapus<br>- Setelah join promo, Eatmore akan me-review produk anda apakah layak untuk di publish atau tidak<br>- Merchant mendapatkan bagi hasil dari promo sebesar 20%</span>
      </div>
      <div class="products mt-4">
        <div class="form-input">
          <p class="label-form">Products</p>
        </div>
        <div v-if="selectedProducts.length < 1">
          <p>You haven't added any products yet</p>
        </div>
        <div class="prod-items mt-4 d-flex flex-row" v-for="prod in selectedProducts" :key="prod">
          <img :src="prod.image" alt="Image Product">
          <div class="detail-prod ml-3">
            <p class="app-title-small mb-0">{{prod.name}}</p>
            <p class="mb-1 text-grey-sm">{{prod.price}}</p>
            <p class="text-green mb-0">Rp. 120.000</p>
            <p class="mt-1">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <v-btn
        block
        @click="dialog = true"
        class="mt-2"
        color="#FAFAFA"
        dark
      >
        <span class="text-blue-sm">Add Products</span>
      </v-btn>
    </v-card>
    <!-- modal -->
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card class="pa-4">
        <div class="title-modal">
          <v-card-title class="text-blood pl-0 pt-1 pr-0 pb-3">
            Add Products
            <v-spacer></v-spacer>
            <v-icon class="float-right"
            @click.prevent="dialog = false">mdi-close</v-icon>
          </v-card-title>
        </div>
        <div>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            class="mt-4"
            placeholder="Search Product.."
            single-line
            dense
            filled
            outlined
            hide-details
          ></v-text-field>
          <p class="mt-1">Discount Rp.12.000</p>
          <div class="my-5" style="max-height: 300px; overflow-x:auto">
            <v-data-table
              :headers="headers"
              :items="products"
              :search="search"
              :items-per-page="itemsPerPage"
              hide-default-header
              hide-default-footer
              class="elevation-1"
              @page-count="pageCount = $event"
            >
              <template v-slot:item.name="{item}">
                <div class="d-flex flex-row">
                  <div class="image-products mr-4">
                    <img :src="item.image" alt="Image Product">
                  </div>
                  <div>
                    <p class="app-title-small mb-1 mt-1">{{item.name}}</p>
                    <p class="mb-1">{{item.price}}</p>
                  </div>
                </div>
              </template>
              <template v-slot:item.other="{item}">
                <v-checkbox v-model="selectedProducts" :value="item" class="float-right"></v-checkbox>
              </template>
            </v-data-table>
          </div>
        </div>
        <v-card-actions class="pa-0">
          <v-btn block @click="dialog = false" class="pt-0 mt-1" color="#FDB526" dark>
            Add Products
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Edit Eatmore Promo',
  data () {
    return {
      dialog: false,
      search: null,
      page: 1,
      pageCount: 0,
      itemsPerPage: 1000,
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        {
          text: '',
          value: 'other',
          align: 'center',
          sortable: false
        }
      ],
      selectedProducts: [],
      products: [
        {
          id: 1,
          name: 'Strawberry Jam',
          price: 'Rp. 130.000',
          image: 'https://danbeasleyharling-wordpress.s3.eu-west-2.amazonaws.com/2019/07/strawberry-jam-square.jpg'
        },
        {
          id: 2,
          name: 'Bobba',
          price: 'Rp. 70.000',
          image: 'https://i.pinimg.com/originals/e4/88/4b/e4884b7c8c96236fd20350b85a2a8cd8.jpg'
        },
        {
          id: 3,
          name: 'Fried Rice Chicken Noya',
          price: 'Rp. 43.000',
          image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/3/29/0/RX-Kraft_Chicken-Fried-Rice-Sticks_s4x3.jpg.rend.hgtvcom.826.620.suffix/1522358458773.jpeg'
        },
        {
          id: 4,
          name: 'Lobster Abi Cocktail',
          price: 'Rp. 32.000',
          image: 'https://www.recipetineats.com/wp-content/uploads/2017/12/Prawn-Dipping-Sauces-7-1.jpg'
        },
        {
          id: 5,
          name: 'Green Salad',
          price: 'Rp. 127.280',
          image: 'https://www.eatingsimpledish.com/wp-content/uploads/2019/05/green-salad-2.jpg'
        },
        {
          id: 6,
          name: 'Curry Rice Soup',
          price: 'Rp. 35.750',
          image: 'https://thevegan8.com/wp-content/uploads/2016/10/1-pot-curry-rice-soup-500x500.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.picture {
  height: 249px;
  background-color: #F4F5F6;
}
.detail-promo {
  background-color: #FFF8E9;
  .app-subtitle {
    font-weight: bold;
  }
  .app-subtitle-small {
    font-weight: bold;
    color: #21201E;
    font-size: 14px;
  }
}
.subtitle {
  .app-subtitle-small {
    font-weight: bold;
  }
}
.description {
  background-color: #FAFAFA;
  line-height: 33px;
  .app-subtitle-small {
    font-weight: bold;
    font-size: 14px;
  }
}
.title-modal {
  border-bottom: 1px solid rgb(212, 212, 212);
}
.app-title-small {
  font-weight: bold;
}
.image-products {
  width: 48px;
  height: 48px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 4px;
    object-fit: cover;
  }
}
.products {
  .form-input {
    margin-top: 0;
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 4px;
    object-fit: cover;
  }
  .text-grey-sm {
    text-decoration-line: line-through;
  }
  .text-green {
    font-size: 14px;
  }
}
</style>
