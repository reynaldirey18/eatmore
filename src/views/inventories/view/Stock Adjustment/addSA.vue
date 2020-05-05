<template>
  <div>

    <div class="mt-4 d-flex flex-row justify-space-between">
        <h1 class="title">New Stock Adjustment</h1>
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
          <span class="text-capitalize">Save Adjustment</span>
        </v-btn>
      </div>
    </div>
    <v-card class="mt-5" style="height:auto;">
      <v-row>
        <v-col cols="12" style="max-height: 52px;">
          <div class="app-box">
            <p class="text-bold pl-3">Adjustment Form</p>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="px-3">
            <div>
              <p class="app-title-small ma-0">Reason Adjustment</p>
              <v-select
              dense
              :items="reasonlist"
              outlined
              ></v-select>
            </div>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="px-3">
            <p class="text-blood ma-0">Stock Adjust ({{itemDy.length}})</p>
            <div
              :key="index.id"
              v-for="(row, index) in itemDy">
              <v-row>
                <v-col cols="2" class="pr-1 mr-0">
                  <p class="app-title-small ma-0">Inventories Name</p>
                  <v-text-field
                    v-model="row.name"
                    single-line
                    dense
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="1" class="pr-2 ml-0 pl-0">
                  <p class="app-title-small ma-0">Unit</p>
                  <v-text-field
                    v-model="row.code"
                    disabled
                    single-line
                    dense
                    filled
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="auto" class="mx-0 pr-1">
                  <p class="app-title-small ma-0">In Stock</p>
                  <v-text-field
                    single-line
                    dense
                    filled
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="auto" class="mx-0 px-0">
                  <p class="app-title-small ma-0">Remove Stock</p>
                  <v-text-field
                    single-line
                    dense
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="2" class="mr-1 ml-0 pl-1">
                  <p class="app-title-small ma-0">Stock After</p>
                  <v-text-field
                    single-line
                    dense
                    filled
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <p class="app-title-small ma-0">Value</p>
                  <v-text-field
                    single-line
                    dense
                    filled
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="auto">
                    <div class="pt-7 text-red">
                      <v-icon  @click.prevent="removeConfigurationRow(index)" medium color="red" class="cursor-pointer">mdi-delete</v-icon>Delete
                    </div>
                </v-col>
              </v-row>
            </div>
            <v-btn
              width="100%"
              @click="dialog = true"
              color="#FAFAFA" class="text-center pt-0 mt-1"
              dark>
              <span class="text-blue-sm">Add Inventory to Adjust</span>
            </v-btn>
            <div class="py-10">
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
        <v-card-title class="text-blood pl-0 pt-1 pr-0 pb-3">Add Inventory Adjust
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
      reasonlist: [
        {
          text: 'Demage',
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
