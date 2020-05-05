<template>
  <div>
    <v-row>
      <v-col cols="12" class="mr-12">
        <h1 class="title">Type Inventories</h1>
      </v-col>
    </v-row>
    <v-card class="ml-3">
      <v-row>
        <v-col cols="3" class="app-box-grey"><p class="app-sub pb-0 mb-0">Create Type Inventory</p></v-col>
        <v-col cols="9" class="app-box"><p class="app-sub pb-0 mb-0">Type Inventories</p></v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="app-box-grey">
          <div class="mt-3">
            <p class="app-title-small text-grey-sm ma-0">Type Inventories Title</p>
            <v-text-field
                label="Category Title"
                placeholder="Eg. Fastfood"
                single-line
                dense
                filled
                outlined
            ></v-text-field>
             <v-btn
            width="100%"
            color="#FDB526"
            class="text-centerw-full"
            dark>
            <span>Create New</span>
          </v-btn>
          </div>
        </v-col>
        <v-col cols="9">
          <div class="pa-10 text-center center" v-if="product.length < 1">
            <v-img
                class="center"
                :src="eatmoreLogo"
                width="208.27px"
                height="200px"
            />
            <p class="text-blood"> No Any Categories? Really?</p>
            <p>Add Type Inventories to orgenize your product</p>
          </div>
          <div v-if="product.length > 1">
            <!-- new datatable -->
            <v-data-table
              :headers="headers"
              :items="product"
              :search="search"
              :page.sync="page"
              :items-per-page="itemsPerPage"
              hide-default-footer
              class="elevation-1"
              @page-count="pageCount = $event"
            >
              <template v-slot:item.actions="{item}">
                <v-btn text @click="editCategory(item.name)" color="primary">Edit</v-btn>
              </template>
              <template v-slot:item.other>
                <v-btn @click.prevent="deleteDialog = true" text color="error">Delete</v-btn>
              </template>
            </v-data-table>
            <div class="d-flex justify-space-between mt-3">
              <div class="ma-4">
              Show {{itemsPerPage}} of {{product.length}} Type Inventories
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
        </v-col>
      </v-row>
    </v-card>

    <!-- modal edit -->
    <v-dialog v-model="editCategoryD" persistent max-width="450">
      <v-card class="pa-2">
        <v-card-title class="text-blood app-box  pl-2 pt-1 pr-0 pb-3">Type Inventories Edit
          <v-spacer></v-spacer>
          <v-icon class="float-right" color="grey"
          @click.prevent="editCategoryD = false">mdi-close</v-icon>
        </v-card-title>

        <div class=" pa-3 pb-0 mb-0">
          <p class="app-title-small text-grey-sm ma-0">Type Inventories Title</p>
          <v-text-field
              label="Category Title"
              placeholder="Eg. Fastfood"
              v-model="categoryEdit"
              single-line
              dense
              filled
              outlined
          ></v-text-field>
        </div>

        <v-card-actions class="pt-0 mt-0 pb-3">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="editCategoryD = false"
            width="100%"
            depressed
            color="#FDB526"
            block
            dark>
            <span class="text-capitalize">Save Changes</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- modal Delete -->
    <v-dialog v-model="deleteDialog" persistent max-width="450">
      <v-card class="pa-2">
        <v-card-title class="text-blood pl-2 pt-1 pr-0 pb-3">Delete Type Inventories
          <v-spacer></v-spacer>
          <v-icon class="float-right" color="grey"
          @click.prevent="deleteDialog = false">mdi-close</v-icon>
        </v-card-title>
        <div class="text-center pa-3">
          <v-avatar size="142px" class="mb-4">
            <img src="@/assets/img/delete.png">
          </v-avatar>
          <p class="text-blood">You Want To Delete This Type Inventories?</p>
          <p class="text-grey-sm">Deleting this item will delete the ingredient in it as well</p>
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
            <v-btn @click.prevent="deleteDialog = false" text block color="#F32626">Yes! Delete this Type Inventories</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'product',
  components: {
  },
  computed: {
    eatmoreLogo () {
      return require('@/assets/img/Categories notfound.png')
    }
  },
  data () {
    return {
      docExcel: null,
      dialog: false,
      deleteDialog: false,
      categoryEdit: null,
      editCategoryD: false,
      search: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: 'Type Inventory Title', value: 'name' },
        { text: 'Type Inventories ID', value: 'categoryId' },
        { text: 'Inventory Count', value: 'count' },
        { text: '', value: 'actions', sortable: false },
        { text: '', value: 'other', sortable: false }
      ],
      product: [
        {
          id: 1,
          name: 'Raw',
          categoryId: 42,
          count: 35
        },
        {
          id: 2,
          name: 'Sellable',
          categoryId: 44,
          count: 29
        },
        {
          id: 3,
          name: 'Modifier',
          categoryId: 99,
          count: 12
        },
        {
          id: 4,
          name: 'Must PO',
          categoryId: 11,
          count: 99
        }
      ]
    }
  },
  watch: {
  },
  methods: {
    handleTriggerUpload () {
      this.$refs.file.click()
    },
    handleFileChange (e) {
      const input = e.target || this.$refs.file
      const file = input.files ? input.files[0] : null

      this.onFileChange(file)
    },
    onFileChange (file) {
      this.docExcel = file
    },
    editCategory (val) {
      console.log(val)
      this.categoryEdit = val
      this.editCategoryD = true
    },
    goToEdit () {
      setTimeout(() => {
        this.$router.push('/products/edit-product')
      }, 1000)
    }
  }
}
</script>
