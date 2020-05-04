<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
        <h1 class="title">Create Received Order</h1>
      <div class="action-add d-flex flex-row">
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Save & Add To Inventory</span>
        </v-btn>
      </div>
    </div>

    <v-card class="mt-5" style="height:auto;">
      <v-row>
        <v-col cols="12" style="max-height: 52px;">
          <div class="app-box">
            <p class="text-bold pl-3 pb-2">Received Order Information</p>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="px-3">
            <v-row>
              <v-col cols="4">
                <p class="app-title-small ma-0 text-white">Received Date &nbsp; <v-chip class="pa-1 cursor-pointer" color="#FDB526" x-small>?</v-chip>
                </p>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="computedDateFormattedMomentjs"
                      :value="computedDateFormattedMomentjs"
                      label="Eg. 20/04/2020"
                      placeholder="Eg. 20/04/2020"
                      append-icon="mdi-calendar"
                      readonly
                      single-line
                      dense
                      filled
                      outlined
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="4">
                <p class="app-title-small ma-0">Received Number &nbsp; <v-chip class="pa-1 cursor-pointer" color="#FDB526" x-small>?</v-chip></p>
                <v-text-field
                  label="Amount/Actual Unit"
                  placeholder="Eg. RE-2526-001"
                  single-line
                  dense
                  filled
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <p class="app-title-small ma-0">PO Number &nbsp; <v-chip class="pa-1 cursor-pointer" color="#FDB526" x-small>?</v-chip></p>
                <v-text-field
                  placeholder="Eg. PO-1527-001"
                  single-line
                  dense
                  filled
                  outlined
                >
                <img slot="append" class="pt-1" src="@/assets/icon/phone-book.png" alt />
                </v-text-field>
              </v-col>
            </v-row>
          </div>
          <div class="px-3">
            <v-row>
              <v-col cols="6">
                <p class="app-title-small ma-0">Supplier Invoice Number &nbsp; <v-chip class="pa-1 cursor-pointer" color="#FDB526" x-small>?</v-chip></p>
                <v-text-field
                  placeholder="Eg. RE-2526-001"
                  single-line
                  dense
                  filled
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <p class="app-title-small ma-0">Supplier</p>
                <v-text-field
                  placeholder="Eg. PT. Cahaya Indah Amarta"
                  disabled
                  single-line
                  dense
                  filled
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
          <div class="px-3">
            <p class="text-blood ma-0">items ({{itemDy.length}})</p>
            <div
            :key="index.id"
            v-for="(row, index) in itemDy">
             <v-row>
               <v-col cols="4">
                 <p class="text-blood pa-5">{{row.name}}</p>
               </v-col>
               <v-col cols="3">
                <p class="app-title-small ma-0">Supplier</p>
                <v-text-field
                  placeholder="Eg. PT. Cahaya Indah Amarta"
                  disabled
                  single-line
                  dense
                  filled
                  outlined
                ></v-text-field>
               </v-col>
               <v-col cols="3">
                <p class="app-title-small ma-0">Supplier</p>
                <v-text-field
                  placeholder="Eg. PT. Cahaya Indah Amarta"
                  disabled
                  single-line
                  dense
                  filled
                  outlined
                ></v-text-field>
               </v-col>
               <v-col cols="auto">
                 <div class="pa-7">
                    <v-icon  @click.prevent="removeTopings(index)" medium color="red" class="cursor-pointer">mdi-delete</v-icon> <span class="text-red"> Delete</span>
                 </div>
               </v-col>
             </v-row>
            </div>
            <v-btn
              width="100%"
              @click="dialog = true"
              color="#FAFAFA" class="text-center pt-0 mt-1"
              dark>
              <span class="text-blue-sm">Add New Items</span>
            </v-btn>
          </div>
          <div class="px-3 py-10">
            <p class="text-blood ma-0">Notes</p>
            <v-textarea
            outlined
            filled
            dense
            placeholder="Eg. All floor smoking area"
            ></v-textarea>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <!-- modal -->
    <v-dialog v-model="dialog" persistent max-width="450">
      <v-card class="pa-2">
        <v-card-title class="text-blood pl-0 pt-1 pr-0 pb-3">Add Items
          <v-spacer></v-spacer>
          <v-icon class="float-right"
          @click.prevent="dialog = false">mdi-close</v-icon>
        </v-card-title>
        <div>
          <p class="text-blood-sm">Search Item</p>
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
            <span class="text-capitalize">Add Items</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import * as moment from 'moment'
export default {
  name: 'product',
  components: {
  },
  computed: {
    computedDateFormattedMomentjs () {
      return this.date ? moment(this.date).format('DD/MM/YYYY') : ''
    }
  },
  data () {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 1000,
      search: '',
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
      itemDy: [],
      dialog: false,
      selected: [],
      deliveryList: [
        {
          text: 'outlet 1',
          value: 1
        }
      ],
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'avatar'
        },
        { text: '', value: 'other', sortable: false }
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
      ]
    }
  },
  watch: {
  },
  methods: {
    addToping (val) {
      this.itemDy = val
      this.dialog = false
    },
    removeTopings: function (index) {
      this.itemDy.splice(index, 1)
    },
    gotoAdd () {
      setTimeout(() => {
        this.$router.push('/inventories/add-purchase-order')
      }, 1000)
    },
    goToEdit () {
      setTimeout(() => {
        this.$router.push('/inventories/edit-supplier')
      }, 1000)
    }
  }
}
</script>
