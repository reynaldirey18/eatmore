<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">New Promo</h1>
      <div class="action-add">
        <v-btn color="#3D87F4" text small class="mr-6">Save as Draft</v-btn>
        <v-btn color="#FDB526" dark small width="160px">Publish Promo</v-btn>
      </div>
    </div>
    <v-card class="pa-4 pt-2 mt-4" outlined>
      <div class="form-input">
        <p class="label-form">Type Promo</p>
        <v-select
          :items="type"
          v-model="selectedType"
          outlined
          dense
        ></v-select>
        <p class="label-form">Title Promo</p>
        <v-form ref="form">
          <v-text-field
            v-model="title"
            placeholder="Eg. Special Offer Holiday"
            outlined
            dense
          >
          </v-text-field>
        </v-form>
        <v-row>
          <v-col cols="6" v-if="selectedType == 1">
            <app-file-upload
              height="212px"
              @onFileChange="onFileChange"
              :value="image"
            ></app-file-upload>
            <v-btn @click="handleTriggerUpload" block><span class="blue2">Upload Image</span></v-btn>
            <input class="d-none" type="file" @change="handleFileChange" :accept="accept" ref="file" />
          </v-col>
          <v-col cols="3" v-if="selectedType == 1">
            <p class="text-grey-light">Maximum size 3 mb</p>
            <p>Pro tips: Use photo Banner with high resolution</p>
          </v-col>
          <v-col cols="3" v-if="selectedType == 1"></v-col>
          <v-col cols="6">
            <div>
              <p class="label-form">Start Promo</p>
              <v-dialog
                ref="dialog"
                v-model="startTime.visible"
                :return-value.sync="startTime.datetime"
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="startTime.datetime"
                    outlined
                    dense
                    readonly
                    v-on="on"
                  >
                  <template v-slot:prepend-inner>
                    <div class="icon-input">
                      <v-icon size="20" color="#FDB526">mdi-calendar-month</v-icon>
                    </div>
                  </template>
                  </v-text-field>
                </template>
                <v-time-picker
                  v-if="startTime.showTime"
                  v-model="startTime.time"
                  full-width
                  color="#FDB526"
                >
                  <v-btn text color="#FDB526" @click="handleStartTimeSubmit" class="center">OK</v-btn>
                </v-time-picker>
                <v-date-picker v-else no-title v-model="startTime.date" color="#FDB526">
                  <v-btn text color="#FDB526" @click="handleStartTimeNext" class="center">Next</v-btn>
                </v-date-picker>
              </v-dialog>
            </div>
          </v-col>
          <v-col cols="6">
            <div>
              <p class="label-form">End Promo</p>
              <v-dialog
                ref="dialog"
                v-model="startTime.visible"
                :return-value.sync="startTime.datetime"
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="startTime.datetime"
                    outlined
                    dense
                    readonly
                    v-on="on"
                  >
                  <template v-slot:prepend-inner>
                    <div class="icon-input">
                      <v-icon size="20" color="#FDB526">mdi-calendar-month</v-icon>
                    </div>
                  </template>
                  </v-text-field>
                </template>
                <v-time-picker
                  v-if="startTime.showTime"
                  v-model="startTime.time"
                  full-width
                  color="#FDB526"
                >
                  <v-btn text color="#FDB526" @click="handleStartTimeSubmit" class="center">OK</v-btn>
                </v-time-picker>
                <v-date-picker v-else no-title v-model="startTime.date" color="#FDB526">
                  <v-btn text color="#FDB526" @click="handleStartTimeNext" class="center">Next</v-btn>
                </v-date-picker>
              </v-dialog>
            </div>
          </v-col>
        </v-row>
        <v-row class="condition">
          <v-col cols="4">
            <p class="label-form">Promo Conditional</p>
            <v-select
              :items="condition"
              v-model="selectedCondition"
              outlined
              dense
            ></v-select>
          </v-col>
          <v-col cols="4" v-if="selectedCondition == 1">
            <p class="label-form">Minimum Purchase</p>
            <v-row>
              <v-col cols="2" class="label-currency pa-0 pl-3">
                <div class="rupiah d-flex">
                  <p>Rp</p>
                </div>
              </v-col>
              <v-col cols="10" class="input-currency pa-0">
                <v-form ref="form">
                  <v-text-field
                    v-model="purchase"
                    placeholder="Eg. 17.000"
                    outlined
                    dense
                  >
                  </v-text-field>
                </v-form>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" v-if="selectedCondition == 1">
            <p class="label-form">Promo Based</p>
            <v-row>
              <v-col cols="2" class="label-currency pa-0 pl-3">
                <div class="rupiah d-flex">
                  <p>Rp</p>
                </div>
              </v-col>
              <v-col cols="10" class="input-currency pa-0 pr-2">
                <v-form ref="form">
                  <v-text-field
                    v-model="promoBased"
                    placeholder="Eg. 17.000"
                    outlined
                    dense
                  >
                  </v-text-field>
                </v-form>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" v-if="selectedCondition == 2">
            <p class="label-form">Discount</p>
            <v-row>
              <v-col cols="2" class="label-currency pa-0 pl-3">
                <div class="rupiah d-flex">
                  <p>Rp</p>
                </div>
              </v-col>
              <v-col cols="10" class="input-currency pa-0">
                <v-form ref="form">
                  <v-text-field
                    v-model="discount"
                    placeholder="Eg. 17.000"
                    outlined
                    dense
                  >
                  </v-text-field>
                </v-form>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <p class="label-form">Promo Terms</p>
        <v-textarea
        outlined
        dense
        placeholder="Eg. Minimum Order Rp. 150.000"
        ></v-textarea>
      </div>
      <div class="inform pa-4 pb-1" v-if="selectedCondition == 1">
        <p class="app-subtitle-small">If the merchant uses a promo based on a minimum transaction, then automatically all products will be deducted according to the transaction filled by the merchant</p>
      </div>
      <div class="products" v-if="selectedCondition == 2 && selectedProducts.length > 0">
        <div class="form-input">
          <p class="label-form">Products</p>
        </div>
        <div class="prod-items mt-4 d-flex flex-row" v-for="prod in selectedProducts" :key="prod">
          <img :src="prod.image" alt="Image Product">
          <div class="detail-prod ml-3">
            <p class="app-title-small mb-1 mt-1">{{prod.name}}</p>
            <p class="mb-1">{{prod.price}}</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <v-btn
        block
        @click="dialog = true"
        class="mt-2"
        color="#FAFAFA"
        dark
        v-if="selectedCondition == 2"
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
import AppFileUpload from '@/components/AppFileUpload'

export default {
  name: 'Add Promo',
  components: {
    AppFileUpload
  },
  data () {
    return {
      dialog: false,
      selectedType: 1,
      type: [
        {
          text: 'Premium',
          value: 1
        },
        {
          text: 'Regular',
          value: 2
        }
      ],
      selectedCondition: 1,
      condition: [
        {
          text: 'Promo By Minimum Transaction',
          value: 1
        },
        {
          text: 'Promo By Each Product',
          value: 2
        }
      ],
      title: null,
      image: null,
      startTime: {
        date: null,
        time: null,
        datetime: '',
        showTime: false,
        visible: false
      },
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
  },
  watch: {
    selectedProducts (newVal) {
      console.log(newVal)
      console.log(this.selectedProducts)
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
      this.image = file
    },
    handleStartTimeNext () {
      this.startTime.showTime = true
      this.$nextTick(() => {
      })
    },
    handleStartTimeSubmit () {
      this.startTime.showTime = false
      this.$nextTick(() => {
        const formatedDate = this.startTime.date + ' / ' + this.startTime.time
        this.$refs.dialog.save(formatedDate)
        this.startTime.datetime = formatedDate
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.condition {
  margin-top: -30px;
  margin-bottom: -20px;
}
.inform {
  background-color: #F5F5F5;
}
.rupiah {
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 45px;
  height: 40px;
  border-radius: 4px 0 0 4px;
  p {
    margin: auto;
  }
}
.label-currency {
  z-index: 1;
}
.input-currency {
  margin-left: -4px;
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
}
</style>
