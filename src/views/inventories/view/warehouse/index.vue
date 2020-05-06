<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
        <h1 class="title">Warehouse</h1>
      <div class="action-add d-flex flex-row">
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Add New Warehouse</span>
        </v-btn>
      </div>
    </div>

    <v-card class="mt-5" style="height:auto;">
      <div class="pa-10 text-center center" v-if="warehouseList.length < 1">
        <v-img
            class="center"
            :src="eatmoreLogo"
            width="303.27px"
            height="202px"
        />
        <p class="text-blood">No Warehouse</p>
        <p class="text-grey-sm">Add warehouse as recipient address when you purchase order</p>
      </div>
      <div v-if="warehouseList.length >= 1">
        <v-data-table
          :headers="headers"
          :items="warehouseList"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.contact="{item}">
              <p class="text-grey-14 pt-4">{{item.contact}}</p>
          </template>
          <template v-slot:item.name="{item}">
              <p class="pt-4 text-blood-sm">{{item.name}}</p>
          </template>
          <template v-slot:item.actions>
            <div class="pt-4"><p class="text-blue cursor-pointer"   @click="goToEdit()">Edit</p></div>
          </template>
          <template v-slot:item.other>
            <v-btn icon @click="goToPreview()">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4">
          Show {{itemsPerPage}} of {{warehouseList.length}} Warehouse
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
        { text: 'Product Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Contact', value: 'contact' },
        { text: 'Address', value: 'address' },
        { text: '', value: 'actions', align: 'center', sortable: false },
        { text: '', value: 'other', align: 'end', sortable: false }
      ],
      warehouseList: [
        {
          id: 1,
          name: 'Warehouse Surapati',
          email: 'sukor@garuda.id',
          contact: '(022)78966123',
          address: 'Jl AHA nasution no 1 bandung jawabarat 1'
        }
      ]
    }
  },
  watch: {
  },
  methods: {
    gotoAdd () {
      setTimeout(() => {
        this.$router.push('/inventories/add-warehouse')
      }, 1000)
    },
    goToEdit () {
      setTimeout(() => {
        this.$router.push('/inventories/edit-warehouse')
      }, 1000)
    }
  }
}
</script>
