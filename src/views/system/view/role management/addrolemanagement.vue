<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
        <h1 class="title">Add New Role</h1>
      <div class="action-add d-flex flex-row">
        <v-btn
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Save Role</span>
        </v-btn>
      </div>
    </div>

    <v-card class="mt-5" style="height:auto;">
      <v-row>
        <v-col cols="12" style="max-height: 52px;">
          <div class="app-box">
            <p class="text-blood pl-3 pb-2">Role Information</p>
          </div>
        </v-col>

        <v-col cols="12">
          <div class="px-3">
            <p class="app-title-small">Role Name</p>
            <v-text-field
              v-model="unit"
              placeholder="Eg: floor or floor for cafe & resto"
              color="#fdb526"
              disabled
              single-line
              dense
              filled
              outlined
              hide-details
            ></v-text-field>
          </div>
          <div class="px-3 mt-5">
            <v-data-table
              :headers="headers"
              :items="poslist"
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
              <template v-slot:item.view="{item}" class="text-center" style="width:100%">
                <div class="text-center mb-5" style="width:100%">
                  <v-checkbox
                    v-model="item.view"
                    hide-details
                  ></v-checkbox>
                </div>
              </template>
              <template v-slot:item.add="{item}" class="text-center" style="width:100%">
                <div class="text-center mb-5" style="width:100%">
                  <v-checkbox
                    v-model="item.add"
                    hide-details
                  ></v-checkbox>
                </div>
              </template>
              <template v-slot:item.edit="{item}" class="text-center" style="width:100%">
                <div class="text-center mb-5" style="width:100%">
                  <v-checkbox
                    v-model="item.edit"
                    hide-details
                  ></v-checkbox>
                </div>
              </template>
              <template v-slot:item.delete="{item}" class="text-center" style="width:100%">
                <div class="text-center mb-5" style="width:100%">
                  <v-checkbox
                    v-model="item.delete"
                    hide-details
                  ></v-checkbox>
                </div>
              </template>
              <template v-slot:item.all="{item}" class="text-center" style="width:100%">
                <div class="text-center mb-5" style="width:100%">
                  <v-checkbox
                    v-model="item.all"
                    hide-details
                  ></v-checkbox>
                </div>
              </template>
              <template v-slot:item.other>
                <div class="pt-4"><p class="text-red cursor-pointer"   @click="goToPreview()">Delete</p></div>
              </template>
            </v-data-table>
          </div>

          <div class="px-3 mt-10">
            <v-data-table
              :headers="headersManag"
              :items="managList"
              :search="search"
              :page.sync="page"
              :items-per-page="itemsPerPage"
              hide-default-footer
              class="elevation-1"
              @page-count="pageCount = $event"
            >
              <template v-slot:item.name="{item}">
                <div>
                  <p class="pt-4 pr-0 mr-0 text-blood-sm">{{item.name}}</p>
                </div>
              </template>
              <template v-slot:item.view="{item}" class="text-center" style="width:100%">
                <div class="text-center mb-5" style="width:100%">
                  <v-checkbox
                    v-model="item.view"
                    hide-details
                  ></v-checkbox>
                </div>
              </template>
              <template v-slot:item.add="{item}" class="text-center" style="width:100%">
                <div class="text-center mb-5" style="width:100%">
                  <v-checkbox
                    v-model="item.add"
                    hide-details
                  ></v-checkbox>
                </div>
              </template>
              <template v-slot:item.edit="{item}" class="text-center" style="width:100%">
                <div class="text-center mb-5" style="width:100%">
                  <v-checkbox
                    v-model="item.edit"
                    hide-details
                  ></v-checkbox>
                </div>
              </template>
              <template v-slot:item.delete="{item}" class="text-center" style="width:100%">
                <div class="text-center mb-5" style="width:100%">
                  <v-checkbox
                    v-model="item.delete"
                    hide-details
                  ></v-checkbox>
                </div>
              </template>
              <template v-slot:item.all="{item}" class="text-center" style="width:100%">
                <div class="text-center mb-5" style="width:100%">
                  <v-checkbox
                    v-model="item.all"
                    hide-details
                  ></v-checkbox>
                </div>
              </template>
              <template v-slot:item.other>
                <div class="pt-4"><p class="text-red cursor-pointer"   @click="goToPreview()">Delete</p></div>
              </template>
            </v-data-table>
          </div>
        </v-col>
      </v-row>
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
      return require('@/assets/img/NotFound.png')
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
        { text: 'Role Access', value: 'name' },
        { text: 'View', value: 'view', align: 'start', sortable: false },
        { text: 'Add', value: 'add', align: 'start', sortable: false },
        { text: 'edit', value: 'edit', align: 'start', sortable: false },
        { text: 'delete', value: 'delete', align: 'start', sortable: false },
        { text: 'All', value: 'all', align: 'start', sortable: false }
      ],
      poslist: [
        {
          name: 'Can Access POS',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
        },
        {
          name: 'Product',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
        },
        {
          name: 'Kitchen',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
        },
        {
          name: 'Cashier',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
        },
        {
          name: 'Setting',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
        },
        {
          name: 'Payroll',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
        },
        {
          name: 'Payment',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
        },
        {
          name: 'Employee',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
        },
        {
          name: 'Access POINT',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
        }
      ],
      headersManag: [
        { text: 'Management Access', value: 'name' },
        { text: 'View', value: 'view', align: 'start', sortable: false },
        { text: 'Add', value: 'add', align: 'start', sortable: false },
        { text: 'edit', value: 'edit', align: 'start', sortable: false },
        { text: 'delete', value: 'delete', align: 'start', sortable: false },
        { text: 'All', value: 'all', align: 'start', sortable: false }
      ],
      managList: [
        {
          name: 'Accounting',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
        },
        {
          name: 'Table Management',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
        },
        {
          name: 'Promo',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
        },
        {
          name: 'Inventory',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
        },
        {
          name: 'Customer',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
        },
        {
          name: 'Systems',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
        },
        {
          name: 'Products',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
        },
        {
          name: 'Employees',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
        },
        {
          name: 'Reimbursement',
          view: false,
          add: false,
          edit: false,
          delete: false,
          all: false
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
