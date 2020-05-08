<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
        <h1 class="title">Role Management</h1>
      <div class="action-add d-flex flex-row">
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Add New Role</span>
        </v-btn>
      </div>
    </div>

    <v-card class="mt-5" style="height:auto;">
      <div class="pa-10 text-center center" v-if="roleList.length < 1">
        <v-img
            class="center"
            :src="eatmoreLogo"
            width="303.27px"
            height="202px"
        />
        <p class="text-blood">You Don't Have Any Division</p>
        <p class="text-grey-sm">Go make some division right now</p>
      </div>
      <div v-if="roleList.length >= 1">
        <v-data-table
          :headers="headers"
          :items="roleList"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.name="{item}">
            <div>
              <p class="pt-4 text-blood-sm">{{item.name}}</p>
            </div>
          </template>
          <template v-slot:item.actions>
            <div class="pt-4"><p class="text-blue cursor-pointer"   @click="goToPreview()">Edit</p></div>
          </template>
          <template v-slot:item.other>
            <div class="pt-4"><p class="text-red cursor-pointer"   @click="goToPreview()">Delete</p></div>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4">
          Show {{itemsPerPage}} of {{roleList.length}} Role Management
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
  name: 'product',
  components: {
  },
  computed: {
    eatmoreLogo () {
      return require('@/assets/img/employee_not_found.png')
    }
  },
  data () {
    return {
      search: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      dropdown_font: null,
      headers: [
        { text: 'Devision Name', value: 'name' },
        { text: 'Super Admin', align: 'center', value: 'admin' },
        { text: '', value: 'actions', align: 'end', sortable: false },
        { text: '', value: 'other', align: 'start', sortable: false }
      ],
      roleList: [
        {
          name: 'Manager',
          admin: 'Yes'
        },
        {
          name: 'Cashier',
          admin: 'Yes'
        },
        {
          name: 'Marketing',
          admin: 'Yes'
        }
      ]
    }
  },
  watch: {
  },
  methods: {
    gotoAdd () {
      setTimeout(() => {
        this.$router.push('/systems/add-role-management')
      }, 1000)
    }
  }
}
</script>
