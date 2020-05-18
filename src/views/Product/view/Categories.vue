<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="title">Categories</h1>
      </v-col>
    </v-row>
    <v-card class="ml-3">
      <v-row>
        <v-col cols="3" class="app-box-grey"><p class="app-sub pb-0 mb-0">Create Product Category</p></v-col>
        <v-col cols="9" class="app-box"><p class="app-sub pb-0 mb-0">Product Categories</p></v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="app-box-grey">
          <div class="mt-3">
            <ValidationObserver ref="form" v-slot="{ handleSubmit }">
              <v-form @submit.prevent="handleSubmit(submitForm)">
                <p class="app-title-small text-grey-sm ma-0">Category Title</p>
                <ValidationProvider v-slot="{ errors }" name="Category" rules="required">
                  <v-text-field
                      label="Category Title"
                      placeholder="Eg. Fastfood"
                      :error-messages="errors"
                      v-model="categoryTitle"
                      single-line
                      dense
                      filled
                      outlined
                  ></v-text-field>
                </ValidationProvider>
                <v-btn
                width="100%"
                color="#FDB526"
                class="text-centerw-full"
                type="submit"
                :loading="loading"
                dark>
                <span>Create New</span>
                </v-btn>
              </v-form>
            </ValidationObserver>
          </div>
        </v-col>
        <v-col cols="9">
          <div class="pa-10 text-center center" v-if="categories.length < 1">
            <v-img
                class="center"
                :src="eatmoreLogo"
                width="208.27px"
                height="200px"
            />
            <p class="text-blood"> No Any Categories? Really?</p>
            <p>Add category to orgenize your product</p>
          </div>
          <div v-if="categories.length > 1">
            <!-- new datatable -->
            <v-data-table
              :headers="headers"
              :items="categories"
              :search="search"
              :page.sync="page"
              :items-per-page="itemsPerPage"
              hide-default-footer
              class="elevation-1"
              @page-count="pageCount = $event"
            >
              <template v-slot:item.actions="{item}">
                <v-btn text @click="editCategory(item)" color="primary">Edit</v-btn>
              </template>
              <template v-slot:item.other="{item}">
                <v-btn @click.prevent="showDelete(item)" text color="error">Delete</v-btn>
              </template>
            </v-data-table>
            <div class="d-flex justify-space-between mt-3">
              <div class="ma-4">
              Show {{itemsPerPage}} of {{categories.length}} Categories
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
        <v-card-title class="text-blood app-box  pl-2 pt-1 pr-0 pb-3">Category Edit
          <v-spacer></v-spacer>
          <v-icon class="float-right" color="grey"
          @click.prevent="editCategoryD = false">mdi-close</v-icon>
        </v-card-title>

        <div class=" pa-3 pb-0 mb-0">
          <p class="app-title-small text-grey-sm ma-0">Category Title</p>
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
            @click.prevent="submitEdit"
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
        <v-card-title class="text-blood pl-2 pt-1 pr-0 pb-3">Delete Category
          <v-spacer></v-spacer>
          <v-icon class="float-right" color="grey"
          @click.prevent="deleteDialog = false">mdi-close</v-icon>
        </v-card-title>
        <div class="text-center pa-3">
          <v-avatar size="142px" class="mb-4">
            <img src="@/assets/img/delete.png">
          </v-avatar>
          <p class="text-blood">You Want To Delete This Category?</p>
          <p class="text-grey-sm">Deleting this item will delete the ingredient in it as well</p>
        </div>
        <v-card-actions class="py-0 px-10">
          <v-spacer></v-spacer>
          <v-btn
            width="100%"
            depressed
            color="#F5F5F5"
            @click="deleteDialog = false"
            block
            dark>
            <span class="text-capitalize text-blue">Close</span>
          </v-btn>
        </v-card-actions>
        <v-card-actions class="py-0 px-10 mt-3 justify-center text-center">
            <v-btn
            :loading="loadingDel"
            @click="submitDelete"
            text block color="#F32626">Yes! Delete this Category</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- dialog success -->
    <v-dialog v-model="dialogSuccess" persistent max-width="350">
      <v-card class="pa-8 pb-10 d-flex flex-column justify-center">
        <img src="@/assets/img/success.png" alt="success" class="mx-auto">
        <v-card-title class="title-card mx-auto text-center">{{label}}</v-card-title>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="closeAndNavigate"
            color="#FDB526" class="mt-3 w-full"
            width="100%"
            dark>
            <span class="text-capitalize">Okay</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- dialog failed -->
    <v-dialog v-model="dialogFailed" persistent max-width="350">
      <v-card class="pa-8 pb-10 d-flex flex-column justify-center">
        <v-icon color="#F32626" size="100px">mdi-alert-circle-outline</v-icon>
        <v-card-title class="title-card mx-auto">Add Product Failed</v-card-title>
        <p class="mx-auto">{{ errorMessage }}</p>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="dialogFailed = false"
            color="#FDB526" class="mt-3 w-full"
            width="100%"
            dark>
            <span class="text-capitalize">Okay</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('product')

export default {
  name: 'product',
  components: {
  },
  mounted () {
    this.$store.commit('product/SET_Page', 1)
    this.$store.commit('product/SET_pageSize', 100)
    this.$store.dispatch('product/getCategories')
  },
  computed: {
    eatmoreLogo () {
      return require('@/assets/img/Categories notfound.png')
    },
    ...mapState([
      'categories'
    ])
  },
  data () {
    return {
      docExcel: null,
      loadingDel: false,
      label: null,
      loading: false,
      dialog: false,
      dialogFailed: false,
      dialogSuccess: false,
      deleteDialog: false,
      categoryEdit: null,
      editCategoryD: false,
      search: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      categoryTitle: null,
      idDeleteCate: null,
      errorMessage: null,
      headers: [
        { text: 'Category Title', value: 'category_name' },
        { text: 'Category ID', value: 'category_id' },
        { text: 'Product Count', value: 'product_count' },
        { text: '', value: 'actions', sortable: false },
        { text: '', value: 'other', sortable: false }
      ],
      product: [
        {
          id: 1,
          name: 'FastFood',
          categoryId: 42,
          count: 35
        },
        {
          id: 2,
          name: 'Heltier Food',
          categoryId: 44,
          count: 29
        },
        {
          id: 3,
          name: 'Pork',
          categoryId: 99,
          count: 12
        },
        {
          id: 4,
          name: 'Halal',
          categoryId: 11,
          count: 99
        }
      ]
    }
  },
  watch: {
  },
  methods: {
    closeAndNavigate () {
      this.dialogSuccess = false
      this.categoryTitle = null
      this.$store.dispatch('product/getCategories')
    },
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
      this.idDeleteCate = val.category_id
      this.categoryEdit = val.category_name
      this.editCategoryD = true
    },
    showDelete (val) {
      this.idDeleteCate = val.category_id
      this.deleteDialog = true
    },
    submitDelete () {
      console.log(this.idDeleteCate)
      this.$store.commit('product/SET_idCategory', this.idDeleteCate)
      this.$store.dispatch('product/deleteCategory')
        .then(response => {
          console.log(response)
          const res = response.data
          if (res.status === true) {
            this.deleteDialog = false
            this.label = 'Category has been Deleted'
            this.dialogSuccess = true
          } else {
            this.deleteDialog = false
            this.dialogFailed = true
            console.log(res.errors)
          }
        }).catch((error) => {
          const message = error.response.data.message
          if (error.response.status === 400) {
            // this.$refs.form.setErrors({
            //   Email: [message],
            //   Username: [message]
            // })
            this.deleteDialog = false
          } else {
            this.errorMessage = message
            this.deleteDialog = true
          }
        })
    },
    submitEdit () {
      var tempPost = {
        category_name: this.categoryEdit
      }

      this.$store.commit('product/SET_idCategory', this.idDeleteCate)
      this.$store.commit('product/SET_categoryEdit', tempPost)
      this.$store.dispatch('product/editCategory')
        .then(response => {
          console.log(response)
          const res = response.data
          if (res.status === true) {
            this.editCategoryD = false
            this.label = 'Update Category Success'
            this.dialogSuccess = true
          } else {
            this.editCategoryD = false
            this.dialogFailed = true
            console.log(res.errors)
          }
        }).catch((error) => {
          const message = error.response.data.message
          if (error.response.status === 400) {
            // this.$refs.form.setErrors({
            //   Email: [message],
            //   Username: [message]
            // })
            this.editCategoryD = false
          } else {
            this.errorMessage = message
            this.editCategoryD = true
          }
        })
    },
    submitForm () {
      this.loading = true
      var tempPost = {
        category_name: this.categoryTitle
      }

      this.$store.commit('product/SET_DataCategories', tempPost)
      this.$store.dispatch('product/postCategories')
        .then(response => {
          console.log(response)
          const res = response.data
          if (res.status === true) {
            this.loading = false
            this.label = 'Add Product Success'
            this.dialogSuccess = true
          } else {
            this.loading = false
            this.dialogFailed = true
            console.log(res.errors)
          }
        }).catch((error) => {
          const message = error.response.data.message
          if (error.response.status === 400) {
            // this.$refs.form.setErrors({
            //   Email: [message],
            //   Username: [message]
            // })
            this.loading = false
          } else {
            this.errorMessage = message
            this.dialog2 = true
            this.loading = false
          }
        })
    }
  }
}
</script>
