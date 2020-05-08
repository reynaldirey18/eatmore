<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
        <h1 class="title">New Stock Opname</h1>
      <div class="action-add d-flex flex-row">
        <v-btn
          color="#FDB526" class="text-center w-full"
          text>
          <span class="text-blue">Discard</span>
        </v-btn>
        <v-btn
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Save</span>
        </v-btn>
      </div>
    </div>

    <v-card class="mt-5" style="height:auto;">
      <v-row>
        <v-col cols="12" style="max-height: 52px;">
          <div class="app-box">
            <p class="text-blood pl-3 pb-2">Stock Opname Information</p>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="px-3">
            <div class="mb-8">
              <p class="text-grey-sm">Lastest Stock Opname 20/04/2020</p>
            </div>

            <p class="app-title-small ma-0">Opname Date &nbsp; <v-chip class="pa-1 cursor-pointer" color="#FDB526" x-small>?</v-chip>
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
              <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
            </v-menu>
          </div>
        </v-col>
<!-- table -->
        <v-col cols="12">
          <div class="px-3">

            <v-data-table
              dense
              disable-sort
              :headers="headers"
              hide-default-footer
              hide-default-header
              show-select
              :items="cars"
              item-key="id"
              group-by="category"
            >
              <template v-slot:group.header="{items}">
                <th colspan="17" style="background: #FFF8E9; box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.05);">
                  <span style="color: #C5870E; font-weight: 500; line-height: 20px;">{{ items[0].category }}</span>
                </th>
              </template>
              <template v-slot:item.name="{item}">
                <div class="" style="width: 200px">
                  <p class="text-blood-sm mt-1 mb-0">{{item.name}}</p>
                  <p class="mb-1">{{item.number}}</p>
                </div>
              </template>
              <template v-slot:item.type="{item}">
                <div>
                  <p class="pt-1 text-blood-sm" style="color: #000000;">{{item.type}}</p>
                </div>
              </template>
              <template v-slot:item.cogs="{item}">
                <div style="width: 100px">
                <p class="text-blood-sm mt-1 mb-0">{{item.cogs}}</p>
                <p class="mb-1">{{item.unit}}</p>
                </div>
              </template>
              <template v-slot:item.priceGap="{item}">
                <div style="width: 80px" v-if="item.priceGap === ''">
                  <p class="pt-1">-</p>
                </div>
                <div style="width: 80px" v-else>
                  <p class="pt-1">{{item.priceGap}}</p>
                </div>
              </template>
              <template v-slot:item.Notes>
                <div style="width: 100px">
                </div>
              </template>
              <template v-slot:item.data-table-select="{item}">
                <div class="d-flex flex-row justify-space-between" style="width: 30px">
                  <img @click="dialog = true" width="50px" class="pt-1 cursor-pointer" src="@/assets/icon/edit.png" alt />
                  <div class="pt-2 pl-2">
                    <v-badge v-if="item.status === 'Active'" color="#1DBA81" class="pt-1" dot></v-badge>
                    <v-badge v-else color="#C4C4C4" class="pt-1" dot></v-badge>
                  </div>
                </div>
              </template>

              <template v-slot:header>
                <thead class="v-data-table-header">
                  <tr>
                    <th colspan="4" class="text-center parent-header">
                      Inventory Information
                    </th>
                    <th colspan="2" class="text-center parent-header">
                      Initial Stock
                    </th>
                    <th colspan="2" class="text-center parent-header">
                      Ordered
                    </th>
                    <th colspan="2" class="text-center parent-header">
                      Used
                    </th>
                    <th colspan="2" class="text-center parent-header">
                      System Stock
                    </th>
                    <th colspan="2" class="text-center parent-header">
                      Actual Stock
                    </th>
                    <th colspan="2" class="text-center parent-header">
                      Gap
                    </th>
                    <th class="text-center parent-header">
                    </th>
                  </tr>
                  <tr>
                    <th class="text-center child-header"></th>
                    <th class="text-center child-header">
                      <div style="width: 200px">
                        Name
                      </div>
                    </th>
                    <th class="text-center child-header">
                      Type
                    </th>
                    <th class="text-center child-header">
                      <div style="width: 100px">
                        COGS/Unit
                      </div>
                    </th>
                    <th class="text-center child-header">
                      Qty
                    </th>
                    <th class="text-center child-header">
                      Price
                    </th>
                    <th class="text-center child-header">
                      Qty
                    </th>
                    <th class="text-center child-header">
                      Price
                    </th>
                    <th class="text-center child-header">
                      Qty
                    </th>
                    <th class="text-center child-header">
                      Price
                    </th>
                    <th class="text-center child-header">
                      Qty
                    </th>
                    <th class="text-center child-header">
                      Total Price
                    </th>
                    <th class="text-center child-header">
                      Qty
                    </th>
                    <th class="text-center child-header">
                      Total Price
                    </th>
                    <th class="text-center child-header">
                      Qty
                    </th>
                    <th class="text-center child-header">
                      Total Price
                    </th>
                    <th class="text-left child-header"  style="width: 100px">
                      Notes
                    </th>
                  </tr>
                </thead>
              </template>
            </v-data-table>

          </div>
        </v-col>
        <v-col cols="12">
          <div class="px-3">
            <p class="app-title-small ma-0">Notes</p>
            <v-textarea
            outlined
            filled
            dense
            placeholder="Eg. All floor smoking area"
            ></v-textarea>

            <div class="mt-5">
              <p class="text-grey-sm">There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun. The truth is the universe is a constantly changing, moving, some would say "living" thing because you just never know what you are going to see on any given night of stargazing.simultaneously a bad joke but an accurate depiction of how astronomy fans view them. Unlike suns, planets and moons, asteroids are on the move, ever changing and, if they appear in the night sky, exciting and dynamic. <span class="text-blue-sm cursor-pointer">contact@earmore.id</span></p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <!-- modal -->
    <v-dialog v-model="dialog" persistent max-width="450">
      <v-card class="pa-2">
        <v-card-title class="text-blood pl-0 pt-1 pr-0 pb-3">Edit Physical Stock
          <v-spacer></v-spacer>
          <v-icon class="float-right"
          @click.prevent="dialog = false">mdi-close</v-icon>
        </v-card-title>
        <div class="px-3">
          <v-row>
            <v-col cols="2" class="pa-1">
              <v-img src="https://goodminds.id/handsome/wp-content/uploads/2019/04/18.-Ragam-Menu-Takjil-Buka-Puasa-yang-Praktis-dan-Menyegarkan.jpg" style="width:120px; height:48px; border-radius: 4px;" aspect-ratio="1.7"></v-img>
            </v-col>
            <v-col cols="10">
              <span class="text-blood">Telur</span><br>
              <span>ndxa-123</span>
            </v-col>
          </v-row>
          <div>
            <v-row>
              <v-col cols="6">
                <p class="text-blood-sm">Actual Quantity</p>
                <v-text-field
                  v-model="qty"
                  label="Eg: 3"
                  color="#fdb526"
                  single-line
                  dense
                  outlined
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <p class="text-blood-sm">Unit</p>
                <v-text-field
                  v-model="unit"
                  label="Eg: Egg"
                  color="#fdb526"
                  disabled
                  single-line
                  dense
                  filled
                  outlined
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
          <div>
            <p class="app-title-small ma-0">Total Price</p>
            <v-text-field
              label="Amount/Actual Unit"
              placeholder="Eg. 0"
              prefix="Rp"
              single-line
              dense
              filled
              outlined
          ></v-text-field>
          </div>
          <div>
            <p class="app-title-small ma-0">Note</p>
            <v-textarea
            outlined
            dense
            placeholder="Eg. there is error while taking notes"
            ></v-textarea>
          </div>
        </div>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="dialog = false"
            color="#FDB526" class="text-center mt-3 w-full"
            width="100%"
            dark>
            <span class="text-capitalize">save</span>
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
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      headers: [
        { text: '', value: 'name' },
        { text: '', value: 'type' },
        { text: '', value: 'cogs' },
        { text: '', value: 'qtyInit' },
        { text: '', value: 'priceInit' },
        { text: '', value: 'qtyOrdered' },
        { text: '', value: 'priceOrdered' },
        { text: '', value: 'qtyUsed' },
        { text: '', value: 'priceUsed' },
        { text: '', value: 'qtyStock' },
        { text: '', value: 'totalStock' },
        { text: '', value: 'qtyAct' },
        { text: '', value: 'priceAct' },
        { text: '', value: 'qtyGap' },
        { text: '', value: 'priceGap' },
        { text: '', value: 'Notes' }
      ],
      cars: [
        {
          id: 1,
          name: 'Bawang Berem',
          number: 'NS-256-raw',
          type: 'raw',
          cogs: 'Rp.9000',
          unit: '@ Kilogram (kg)',
          qtyInit: '62',
          priceInit: 'Rp.1.223.000',
          qtyOrdered: '32',
          priceOrdered: 'Rp.23.000',
          qtyUsed: '39',
          priceUsed: 'Rp.23.000',
          qtyStock: '42',
          totalStock: 'Rp.23.000',
          qtyAct: '39',
          priceAct: 'Rp.23.000',
          qtyGap: 'o',
          priceGap: '',
          Notes: '',
          status: 'Active',
          category: 'B'
        },
        {
          id: 2,
          name: 'Bawang Putih',
          number: 'NS-256-raw',
          type: 'raw',
          cogs: 'Rp.9000',
          unit: '@ Kilogram (kg)',
          qtyInit: '62',
          priceInit: 'Rp.1.223.000',
          qtyOrdered: '32',
          priceOrdered: 'Rp.23.000',
          qtyUsed: '39',
          priceUsed: 'Rp.23.000',
          qtyStock: '42',
          totalStock: 'Rp.23.000',
          qtyAct: '39',
          priceAct: 'Rp.23.000',
          qtyGap: 'o',
          priceGap: '',
          Notes: '',
          status: '',
          category: 'B'
        },
        {
          id: 3,
          name: 'Cabe-cabean',
          number: 'NS-256-raw',
          type: 'raw',
          cogs: 'Rp.9000',
          unit: '@ Kilogram (kg)',
          qtyInit: '62',
          priceInit: 'Rp.1.223.000',
          qtyOrdered: '32',
          priceOrdered: 'Rp.23.000',
          qtyUsed: '39',
          priceUsed: 'Rp.23.000',
          qtyStock: '42',
          totalStock: 'Rp.23.000',
          qtyAct: '39',
          priceAct: 'Rp.23.000',
          qtyGap: 'o',
          priceGap: '',
          Notes: '',
          status: '',
          category: 'C'
        },
        {
          id: 4,
          name: 'Mayonaise',
          number: 'NS-256-raw',
          type: 'raw',
          cogs: 'Rp.9000',
          unit: '@ Kilogram (kg)',
          qtyInit: '62',
          priceInit: 'Rp.1.223.000',
          qtyOrdered: '32',
          priceOrdered: 'Rp.23.000',
          qtyUsed: '39',
          priceUsed: 'Rp.23.000',
          qtyStock: '42',
          totalStock: 'Rp.23.000',
          qtyAct: '39',
          priceAct: 'Rp.23.000',
          qtyGap: 'o',
          priceGap: '',
          Notes: '',
          status: '',
          category: 'M'
        }
      ]
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>
<style scoped>
  td {
    width: 200px;
  }
  .parent-header{
    background: #fff7e9;
  }
</style>
