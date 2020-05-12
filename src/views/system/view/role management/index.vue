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
      <div class="pa-10 text-center center" v-if="resdata.length < 1">
        <v-img
            class="center"
            :src="eatmoreLogo"
            width="303.27px"
            height="202px"
        />
        <p class="text-blood">You Don't Have Any Division</p>
        <p class="text-grey-sm">Go make some division right now</p>
      </div>
      <div v-if="roleList.length !== null">
        <v-data-table
          :headers="headers"
          :items="resdata"
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
          <template v-slot:item.role_id="{item}">
            <div class="pt-4" @click.prevent="confrimDeletePOP(item.role_id)"><p class="text-red cursor-pointer">Delete</p></div>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4">
          Show {{itemsPerPage}} of {{resdata.length}} Role Management
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
    <!-- modal Delete -->
    <v-dialog v-model="deleteDialog" persistent max-width="450">
      <v-card class="pa-2">
        <v-card-title class="text-blood pl-2 pt-1 pr-0 pb-3">Delete Role
          <v-spacer></v-spacer>
          <v-icon class="float-right" color="grey"
          @click.prevent="deleteDialog = false">mdi-close</v-icon>
        </v-card-title>
        <div class="text-center pa-3">
          <v-avatar size="142px" class="mb-4">
            <img src="@/assets/img/delete.png">
          </v-avatar>
          <p class="text-blood">You Want To Delete This Role?</p>
        </div>
        <v-card-actions class="py-0 px-10">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="deleteDialog = false"
            width="100%"
            depressed
            color="#F5F5F5"
            block
            dark>
            <span class="text-capitalize text-blue">Close</span>
          </v-btn>
        </v-card-actions>
        <v-card-actions class="py-0 px-10 mt-3 justify-center text-center">
            <v-btn @click.prevent="submitDelete()" text block color="#F32626">Yes! Delete this Role</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import axios from 'axios'
const { mapState } = createNamespacedHelpers('role')
export default {
  name: 'product',
  components: {
  },
  computed: {
    eatmoreLogo () {
      return require('@/assets/img/employee_not_found.png')
    },
    ...mapState([
      'resdata'
    ])
  },
  data () {
    return {
      search: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      dropdown_font: null,
      dialog: false,
      deleteDialog: false,
      tempRoleID: null,
      headers: [
        { text: 'Devision Name', value: 'role_name' },
        { text: 'Super Admin', align: 'center', value: 'role_super_admin' },
        { text: '', value: 'actions', align: 'end', sortable: false },
        { text: '', value: 'role_id', align: 'start', sortable: false }
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
  mounted () {
    this.$store.dispatch('role/getRole')
  },
  methods: {
    gotoAdd () {
      setTimeout(() => {
        this.$router.push('/systems/add-role-management')
      }, 1000)
    },
    confrimDeletePOP (val) {
      this.tempRoleID = val
      this.deleteDialog = true
    },
    submitDelete (val) {
      axios.delete('http://localhost:3001/delete-role-management/' + this.tempRoleID)
        .then(response => {
          const res = response.data
          if (res.status) {
            this.showModal = false
            this.deleteDialog = false
            this.successMessage = 'Deleted'
            this.popupSuccess = true
            this.$store.dispatch('role/getRole')
          } else {
            this.deleteDialog = false
            this.failedMessage = 'System Error'
            this.popupFailed = true
            this.$store.dispatch('role/getRole')
          }
        })
    }
  }
}
</script>
