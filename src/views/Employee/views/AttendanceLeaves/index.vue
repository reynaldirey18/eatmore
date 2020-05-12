<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between align-center">
      <h1 class="app-title">Attendance - Leaves</h1>
      <v-btn color="#FDB526" dark small>Add New Leave</v-btn>
    </div>
    <v-card class="pa-6 mt-6 d-flex" outlined min-height="400px" v-if="attendance.length < 1">
      <div class="not-found d-flex flex-column">
        <img src="@/assets/img/illustration2.png" alt="No Attendance">
        <p class="text-bold mt-2">No Attendance Yet!</p>
      </div>
    </v-card>
    <v-card class="pa-6 mt-6 d-flex flex-column" outlined v-else>
      <div class="header d-flex">
        <div class="image-reimburse align-self-end ml-6">
          <img src="@/assets/img/illustration3.png" alt="Illustration">
        </div>
        <div class="summary d-flex flex-row justify-space-between align-end pa-6 px-12">
          <div class="approved ml-12">
            <p class="app-title-small">Annual Leave</p>
            <p class="text-blue-sm"><span class="text-36 mr-1">0</span>Days</p>
          </div>
          <div class="reimbursed">
            <p class="app-title-small">Other Leave</p>
            <p class="text-green"><span class="text-36 mr-1">0</span>Days</p>
          </div>
          <div class="rejected mr-12">
            <p class="app-title-small">Remaining Leave</p>
            <p class="text-red"><span class="text-36 mr-1">0</span>Days</p>
          </div>
        </div>
      </div>
      <div class="table mt-6">
        <v-data-table
          :headers="headers"
          :items="attendance"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.actions="{item}">
            <v-btn color="#999999" small dark icon class="mr-1" @click="edit(item)">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4" v-if="itemsPerPage >= attendance.length">
            Showing {{attendance.length}} of {{attendance.length}} Entries
          </div>
          <div class="ma-4" v-else>
            Showing {{itemsPerPage}} of {{attendance.length}} Entries
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
      headers: [
        { text: 'Employee', value: 'employee' },
        { text: 'Leave Type', value: 'type' },
        { text: 'Date', value: 'date', sortable: false },
        { text: 'No. of Days', value: 'days', sortable: false },
        { text: 'Reason', value: 'reason' },
        { text: 'Status', value: 'status' },
        { text: 'Approved by', value: 'approvedBy' },
        { text: '', value: 'actions', sortable: false, width: '5%' }
      ],
      attendance: [
        {
          employee: 'John Martin',
          type: 'Casual Leave',
          date: 'Jun 2, 20.20 to Jun 3, 2020',
          days: '5 Days',
          reason: 'Going to school',
          status: 'Requested',
          approvedBy: 'HRD'
        },
        {
          employee: 'Adam Johnson',
          type: 'Medical Leave',
          date: 'Jun 2, 20.20 to Jun 3, 2020',
          days: '5 Days',
          reason: 'Going to hospital',
          status: 'Requested',
          approvedBy: 'HRD'
        },
        {
          employee: 'Harris Borris',
          type: 'Medical Leave',
          date: 'Jun 2, 20.20 to Jun 3, 2020',
          days: '5 Days',
          reason: 'Going to hospital',
          status: 'Requested',
          approvedBy: 'HRD'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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
