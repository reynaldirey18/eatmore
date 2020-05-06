<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">Stock Adjustment</h1>
      <v-btn color="#FDB526" dark width="160px" @click="goToAdd">New stockAdjustList</v-btn>
    </div>
    <v-card class="pa-6 mt-6 d-flex flex-column" outlined>
      <div class="d-flex flex-row justify-space-between">
        <div style="width: 258px;">
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
          <template v-slot:activator="{ on }">
            <v-text-field v-model="dateRangeText"
            append-icon="mdi-calendar"
            single-line
            dense
            filled
            outlined
            v-on="on"></v-text-field>
          </template>
            <v-date-picker v-model="dates" @input="dates.length == 1" range></v-date-picker>
          </v-menu>
        </div>

        <v-btn
          @click.prevent="handleFormSubmit"
          color="#333333" class="text-center mx-2"
          text>
          <span class="text-blue"><v-icon>mdi-printer</v-icon> Print This Report Out</span>
        </v-btn>
      </div>
      <div class="header d-flex">
        <div class="image-reimburse align-self-end ml-6">
          <img src="@/assets/img/sa.png" alt="Illustration">
        </div>
        <div class="summary d-flex flex-column pa-6 pl-12 pr-12">
          <div class="pl-10 pb-6 pt-3">
            <span class="text-grey-sm"> {{stockAdjustList.length}} inventories adjusted from {{dateRangeText}}</span>
          </div>
          <div class="summary d-flex flex-row justify-space-between align-end">
            <div class="approved ml-10">
              <p class="app-title-small">Total Adjustment Expenses</p>
              <p class="text-blue-sm"><span class="text-18 mr-1">Rp. -</span></p>
            </div>
            <div class="reimbursed">
              <p class="app-title-small">Total Adjustment Income</p>
              <p class="text-green"><span class="text-18 mr-1">Rp. -</span></p>
            </div>
            <div class="rejected">
              <p class="app-title-small">Adjustment Summary</p>
              <p class="text-red"><span class="text-18 mr-1">Rp. -</span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="not-found d-flex flex-column mt-12 mb-12" v-if="stockAdjustList.length < 1">
        <img src="@/assets/img/NotFound.png" alt="Stock Adjustment Not Found">
        <p class="text-bold mt-4">No Stock Adjustment</p>
        <p class="text-grey-sm">Start to make adjustment stock, <span class="cursor-pointer" style="color: #C5870E">Learn More</span></p>
      </div>
      <div class="table mt-6" else>
        <v-data-table
          :headers="headers"
          :items="stockAdjustList"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.actions="{item}">
            <div class="align-center" v-if="item.status == 'Review'">
              <v-btn color="#FDB526" small dark @click="goToAcc(item)" class="mr-1">Confirm</v-btn>
            </div>
            <div v-else>
              <v-btn color="#999999" small dark class="mr-1">Confirmed</v-btn>
            </div>
          </template>
          <template v-slot:item.reason="{item}">
            <span>{{item.reason}}</span><br>
            <span class="text-red" v-if="item.reason === 'Demage'">{{item.total}}</span>
            <span class="text-green" v-else-if="item.reason === 'Manual Input'">{{item.total}}</span>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4" v-if="itemsPerPage >= stockAdjustList.length">
            Showing {{stockAdjustList.length}} of {{stockAdjustList.length}} Stock Adjustment
          </div>
          <div class="ma-4" v-else>
            Showing {{itemsPerPage}} of {{stockAdjustList.length}} Stock Adjustment
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
  data () {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      dates: ['', ''],
      menu: false,
      headers: [
        { text: 'Date', value: 'date' },
        { text: 'Person In Charge', value: 'charge' },
        { text: 'Adjusted', value: 'adjust' },
        { text: 'Reason', value: 'reason' },
        { text: 'Status', value: 'status' },
        { text: '', align: 'center', value: 'actions', sortable: false }
      ],
      stockAdjustList: [
        {
          id: 1,
          date: 'Mon, 04/04/2020 14:31',
          charge: 'Ronald Steward',
          adjust: '6 Inventories',
          reason: 'Demage',
          total: 'Rp. 20.306.710',
          status: 'Review'
        },
        {
          id: 2,
          date: 'Mon, 04/04/2020 14:31',
          charge: 'Alpin',
          adjust: '6 Inventories',
          reason: 'Manual Input',
          total: 'Rp. 20.306.710',
          status: 'Review'
        },
        {
          id: 3,
          date: 'Mon, 04/04/2020 14:31',
          charge: 'Steve',
          adjust: '6 Inventories',
          reason: 'Demage',
          total: 'Rp. 20.306.710',
          status: 'Confirmed'
        }
      ]
    }
  },
  computed: {
    dateRangeText () {
      return this.dates.join(' ~ ')
    }
  },
  methods: {
    goToAdd () {
      this.$router.push('/inventories/add-stock-adjustment')
    },
    goToAcc () {
      this.$router.push('/inventories/Confirm-stock-adjustment')
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  .not-found {
    margin: auto;
    width: 100%;
    img {
      margin: auto;
      width: 30%;
    }
    p {
      margin: auto;
      color: black;
    }
  }
}
.header {
  width: 100%;
  height: 178px;
  background-color: #F4F5F6;
  border-radius: 4px;
  .image-reimburse {
    img{
      height: 150px;
    }
  }
}
.summary {
  width: 100%;
}
</style>
