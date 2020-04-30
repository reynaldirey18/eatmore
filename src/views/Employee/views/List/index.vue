<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">Employee List</h1>
      <v-btn color="#FDB526" dark small width="160px" @click="goToAdd">Add New Employee</v-btn>
    </div>
    <v-card class="pa-6 mt-6 d-flex" outlined min-height="400px" v-if="employee.length < 1">
      <div class="not-found d-flex flex-column">
        <img src="@/assets/img/employee_not_found.png" alt="Employee Not Found">
        <p class="text-bold">You Don't Have Any Employees</p>
        <p>Add some employee to make your business grow</p>
      </div>
    </v-card>
    <v-card class="mt-6" outlined v-else>
      <div class="table">
        <v-data-table
          :headers="headers"
          :items="employee"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.name="{item}">
            <div class="d-flex flex-row align-center">
              <div class="photo mr-4">
                <img :src="item.photo" alt="Photo">
              </div>
              <div>
                <p class="text-blood-sm mb-1">{{item.name}}</p>
                <p class="mb-1">{{item.dateHire}}</p>
              </div>
            </div>
          </template>
          <template v-slot:item.pin="{item}">
            <v-text-field
              :value="item.pin"
              :append-icon="item.showPin ? 'mdi-eye' : 'mdi-eye-off'"
              :type="item.showPin ? 'text' : 'password'"
              name="input-10-1"
              @click:append="item.showPin = !item.showPin"
              readonly
            ></v-text-field>
          </template>
          <template v-slot:item.actions="{item}">
            <div class="d-flex flex-row align-center justify-end">
              <v-btn text color="#3D87F4" small @click="goToEdit(item)" class="mr-1">Quick Edit</v-btn>
              <v-btn icon color="#CCCCCC" @click="goToEdit(item)">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </div>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4" v-if="itemsPerPage >= employee.length">
            Show {{employee.length}} of {{employee.length}} Employee
          </div>
          <div class="ma-4" v-else>
            Show {{itemsPerPage}} of {{employee.length}} Employee
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
      show1: false,
      headers: [
        { text: 'Employee Name', value: 'name', width: '20%' },
        { text: 'Email', value: 'email', sortable: false },
        { text: 'Phone', value: 'phone', sortable: false, width: '10%' },
        { text: 'Username', value: 'username' },
        { text: 'PIN', value: 'pin', sortable: false, width: '10%' },
        { text: 'Division', value: 'division' },
        { text: 'Level', value: 'level' },
        { text: '', align: 'right', value: 'actions', sortable: false }
      ],
      employee: [
        {
          id: 1,
          name: 'Steve Rogers',
          photo: 'https://a.wattpad.com/cover/178234521-352-k914764.jpg',
          dateHire: '1 Year 10 Month',
          email: 'max.hoffman@example.com',
          phone: '(229) 555-0109',
          username: 'lazymeercat616',
          pin: '1234',
          showPin: false,
          division: 'Cashier',
          level: 'Staff'
        },
        {
          id: 2,
          name: 'Guy Fisher',
          photo: 'https://lh3.googleusercontent.com/proxy/eWeWi3SSFat5wvP4lEW8ncZOxUBlX7nSv_zyCiougXuutrYZYvoeFxC6c2tXCqg2FcuV1JDL7rzdn5BS1yIp8beOI6GW1G_FTXquBQFu0C2-dqFd5Evt88JyuYoCtSoJhbST-JY',
          dateHire: '1 Year 10 Month',
          email: 'max.hoffman@example.com',
          phone: '(229) 555-0109',
          username: 'lazymeercat616',
          pin: '1234',
          showPin: false,
          division: 'Cashier',
          level: 'Staff'
        },
        {
          id: 1,
          name: 'Zack Hawkins',
          photo: 'https://d3n8a8pro7vhmx.cloudfront.net/durhampa/pages/2432/attachments/original/1523133917/29662672_1655054771230251_12544381065322135_o.png?1523133917',
          dateHire: '1 Year 10 Month',
          email: 'max.hoffman@example.com',
          phone: '(229) 555-0109',
          username: 'lazymeercat616',
          pin: '1234',
          showPin: false,
          division: 'Cashier',
          level: 'Staff'
        }
      ]
    }
  },
  methods: {
    goToAdd () {
      this.$router.push('/employee/add-employee')
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
.photo {
  width: 48px;
  height: 48px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 4px;
    object-fit: cover;
  }
}
</style>
