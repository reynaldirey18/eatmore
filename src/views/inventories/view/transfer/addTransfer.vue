<template>
  <div>

    <div class="mt-4 d-flex flex-row justify-space-between">
        <h1 class="title">New Transfer Inventories</h1>
      <div class="action-add d-flex flex-row">
        <v-btn
          color="#FDB526" class="text-center w-full"
          text>
          <span class="text-red">Delete</span>
        </v-btn>
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Save Transfer Infentories</span>
        </v-btn>
      </div>
    </div>
    <v-card class="mt-5" style="height:auto;">
      <v-row>
        <v-col cols="12" style="max-height: 52px;">
          <div class="app-box">
            <p class="text-bold pl-3">Tranfer Information</p>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="px-3">
            <v-row>
              <v-col cols="4">
                <div>
                  <p class="app-title-small ma-0">Tranfer To &nbsp; <v-chip class="pa-1 cursor-pointer" color="#FDB526" x-small>?</v-chip></p>
                  <v-select
                  dense
                  :items="outletList"
                  outlined
                  ></v-select>
                </div>
              </v-col>
              <v-col cols="4">
                <div>
                  <p class="app-title-small ma-0">Transfer Date &nbsp; <v-chip class="pa-1 cursor-pointer" color="#FDB526" x-small>?</v-chip>
                  </p>
                  <v-menu
                    v-model="menu"
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
                        append-icon="mdi-calendar"
                        readonly
                        single-line
                        dense
                        filled
                        outlined
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
                  </v-menu>
                </div>
              </v-col>
              <v-col cols="4">
                <div>
                  <p class="app-title-small ma-0">Tranfer Number &nbsp; <v-chip class="pa-1 cursor-pointer" color="#FDB526" x-small>?</v-chip></p>
                  <v-text-field
                    disabled
                    class="pb-0 mb-0"
                    style="height: 40px;"
                    single-line
                    dense
                    filled
                    outlined
                  ></v-text-field>
                  <p class="text-grey-sm pt-0 mt-0">Fill blank to auto generate Transfer Number</p>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="px-3">
            <p class="app-title ma-0">Inventories ({{itemDy.length}})</p>
            <div
              :key="index.id"
              v-for="(row, index) in itemDy">
              <v-row>
                <v-col cols="2" class="pr-1">
                  <p class="app-title-small ma-0">Inventories Name</p>
                  <v-text-field
                    v-model="row.name"
                    single-line
                    disabled
                    filled
                    dense
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="1" class="px-1">
                  <p class="app-title-small ma-0">Quality</p>
                  <v-text-field
                    placeholder="Eg. 5"
                    single-line
                    dense
                    filled
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col width="15%" class="px-1">
                  <p class="app-title-small ma-0">Unit/Ratio</p>
                  <v-select
                  dense
                  :items="unitList"
                  outlined
                  ></v-select>
                </v-col>
                <v-col cols="2" class="px-1">
                  <p class="app-title-small ma-0">AVG Price/Unit</p>
                  <v-text-field
                    single-line
                    prefix="Rp"
                    disabled
                    filled
                    placeholder="123.000"
                    dense
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="1" class="px-1">
                  <p class="app-title-small ma-0">Discount</p>
                  <v-text-field
                    single-line
                    dense
                    placeholder="100"
                    suffix="%"
                    filled
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col width="12%" class="px-1">
                  <p class="app-title-small ma-0">Tax</p>
                  <v-select
                  dense
                  :items="taxList"
                  outlined
                  ></v-select>
                </v-col>
                <v-col cols="2" class="px-1">
                  <p class="app-title-small ma-0">Total</p>
                  <v-text-field
                    single-line
                    prefix="Rp"
                    disabled
                    placeholder="1.000.000"
                    dense
                    filled
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="auto">
                    <div class="pt-7 text-red cursor-pointer"   @click.prevent="removeTopings(index)">
                      <v-icon medium color="red" class="cursor-pointer">mdi-delete</v-icon>
                    </div>
                </v-col>
              </v-row>
            </div>
            <v-btn
              width="100%"
              @click="dialog = true"
              color="#FAFAFA" class="text-center pt-0 mt-1"
              dark>
              <span class="text-blue-sm">+ Add Inventories</span>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="px-3">
            <v-row>
              <v-col cols="6">
                <div>
                  <v-row>
                    <v-col cols="6">
                      <p class="app-title-small ma-0">Delivery Cost &nbsp; <v-chip class="pa-1 cursor-pointer" color="#FDB526" x-small>?</v-chip></p>
                      <v-text-field
                        single-line
                        prefix="Rp"
                        disabled
                        filled
                        placeholder="123.000"
                        dense
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <p class="app-title-small ma-0">Total Discount &nbsp; <v-chip class="pa-1 cursor-pointer" color="#FDB526" x-small>?</v-chip></p>
                      <v-text-field
                        single-line
                        prefix="Rp"
                        disabled
                        filled
                        placeholder="123.000"
                        dense
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
              <v-col cols="6">
                <div>
                  <v-row>
                    <v-col cols="5"></v-col>
                    <v-col cols="3" class="text-right" style="font-size: 14px; color: #333333;">Sub Total</v-col>
                    <v-col cols="4" class="text-right text-blood-sm" style="font-size: 14px; color: #333333;">Rp.20.010.000</v-col>

                    <v-col cols="5"></v-col>
                    <v-col cols="3" class="text-right" style="font-size: 14px; color: #333333;">Total Discount</v-col>
                    <v-col cols="4" class="text-right" style="font-size: 14px; color: #333333;">-</v-col>

                    <v-col cols="5"></v-col>
                    <v-col cols="3" class="text-right" style="font-size: 14px; color: #333333;">Delivery Cost</v-col>
                    <v-col cols="4" class="text-right" style="font-size: 14px; color: #333333;">Rp.2.000.000</v-col>

                    <v-col cols="4"></v-col>
                    <v-col cols="4" class="text-right text-blood" style="font-weight: 500;">Total Income</v-col>
                    <v-col cols="4" class="text-right text-blood" style="font-weight: 500;">Rp.21.810.000</v-col>

                  </v-row>
                </div>
              </v-col>
            </v-row>
            <div class="py-2">
              <p class="text-blood ma-0">Notes</p>
              <v-textarea
              outlined
              filled
              dense
              placeholder="Eg. All floor smoking area"
              ></v-textarea>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <!-- modal -->
    <v-dialog v-model="dialog" persistent max-width="450">
      <v-card class="pa-2">
        <v-card-title class="text-blood pl-0 pt-1 pr-0 pb-3">Add Inventory to Transfer
          <v-spacer></v-spacer>
          <v-icon class="float-right"
          @click.prevent="dialog = false">mdi-close</v-icon>
        </v-card-title>
        <div>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search Inventory"
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
            <span class="text-capitalize">Add</span>
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
    eatmoreLogo () {
      return require('@/assets/img/NotFound.png')
    },
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
      itemDy: [],
      dialog: false,
      selected: [],
      menu: null,
      date: null,
      outletList: [
        {
          text: 'Outlet 1',
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
          code: 'Kilogram (Kg)',
          avatar: 'https://assets.mubicdn.net/images/cast_member/721101/image-original.jpg?1570516226'
        },
        {
          id: 2,
          name: 'Cheese',
          code: 'KLiter (L)',
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
    }
  }
}
</script>
