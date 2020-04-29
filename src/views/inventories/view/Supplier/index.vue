<template>
  <div>
    <v-row>
      <v-col cols="6">
        <h1 class="title">Supplier</h1>
      </v-col>
      <v-col cols="auto" class="text-blue">
        <p class="pt-2 cursor-pointer">Download Excel Sample Format</p>
      </v-col>
      <v-col cols="auto">
        <v-btn
          @click.prevent="handleFormSubmit"
          color="#333333" class="text-center"
          dark>
          <span class="text-capitalize">Upload Excel File</span>
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          @click.prevent="gotoAdd()"
          color="#FDB526" class="text-center w-full"
          dark>
          <span class="text-capitalize">Add New Supplier</span>
        </v-btn>
      </v-col>
    </v-row>

    <v-card class="mt-5" style="height:auto;">
      <div class="pa-10 text-center center" v-if="Supplierlist.length < 1">
        <v-img
            class="center"
            :src="eatmoreLogo"
            width="303.27px"
            height="202px"
        />
        <p class="text-blood">No Supplier In Here</p>
      </div>
      <div v-if="Supplierlist.length >= 1">
        <v-data-table
          :headers="headers"
          :items="Supplierlist"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.name="{item}">
              <p class="text-blood mb-0 mt-5">{{item.name}}</p>
              <p>{{item.number}}</p>
          </template>
          <template v-slot:item.actions>
            <div class="pt-4"><p class="text-blue cursor-pointer"  @click="dialog = true">Quick Edit</p></div>
          </template>
          <template v-slot:item.other>
            <v-btn icon @click="goToEdit()">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <div class="d-flex justify-space-between mt-3">
          <div class="ma-4">
          Show {{itemsPerPage}} of {{Supplierlist.length}} Products
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
        { text: 'Category', value: 'category' },
        { text: 'Address', value: 'address' },
        { text: 'email', value: 'email' },
        { text: '', value: 'actions', align: 'end', sortable: false },
        { text: '', value: 'other', sortable: false }
      ],
      Supplierlist: [
        {
          name: 'PT Akur Pratama Yogya group',
          number: 'SL-256-raw',
          category: 'Meet',
          address: 'JL. yang memBINGUNGKAN No.1',
          email: 'akur@gmail.co.id'
        },
        {
          name: 'PT Amelia',
          number: 'SL-256-raw',
          category: 'Meet',
          address: 'JL. bayangkara no 1',
          email: 'akur@gmail.co.id'
        },
        {
          name: 'PT Amelia',
          number: 'SL-256-raw',
          category: 'Meet',
          address: 'JL. bayangkara no 1',
          email: 'akur@gmail.co.id'
        },
        {
          name: 'PT Amelia',
          number: 'SL-256-raw',
          category: 'Meet',
          address: 'JL. bayangkara no 1',
          email: 'akur@gmail.co.id'
        },
        {
          name: 'PT Amelia',
          number: 'SL-256-raw',
          category: 'Meet',
          address: 'JL. bayangkara no 1',
          email: 'akur@gmail.co.id'
        }
      ]
    }
  },
  watch: {
  },
  methods: {
    gotoAdd () {
      setTimeout(() => {
        this.$router.push('/inventories/add-inventory')
      }, 1000)
    },
    goToEdit () {
      setTimeout(() => {
        this.$router.push('/inventories/edit-inventory')
      }, 1000)
    }
  }
}
</script>
