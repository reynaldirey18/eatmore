<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="title">Edit Recipes</h1>
      </v-col>
    </v-row>
    <v-card class="ml-3">
      <v-row>
        <v-col cols="3" class="app-box-grey"><p class="app-sub pb-0 mb-0">Product Variants</p></v-col>
        <v-col cols="9" class="app-box"><p class="app-sub pb-0 mb-0">Product Information</p></v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="app-box-grey">
          <div>
            <v-tabs hide-slider background-color="#FBFBFB" color="dark" vertical>
              <v-tab
                v-for="(tabItem, i) in resVariant"
                :key="i"
                @click="tabActive = i"
                style="
                  width: 100%;
                  justify-content: flex-start;
                  padding: 30px 00px;
                "
              >
                <v-list-item @click="menuchanges(tabItem)" two-line class="py-1" :style="tabActive === i  ? 'background-color: #F2F2F2' : ''">
                    <v-list-item-content class="d-flex">
                      <div class="text pr-4">
                        <div>
                        <v-list-item-title class="text-start text-capitalize app-title-small">{{tabItem.variant_name}}</v-list-item-title>
                        <v-list-item-subtitle class="text-start text-capitalize app-subtitle-small">{{tabItem.variant_sku}}</v-list-item-subtitle>
                        </div>
                        <!-- <v-badge
                          v-if="tabItem.status === 'warning'"
                          color="#FDB526"
                          dot
                        >
                        </v-badge>
                        <v-badge
                          v-else-if="tabItem.status === 'danger'"
                          color="#F32626"
                          dot
                        >
                        </v-badge> -->
                      </div>
                    </v-list-item-content>
                </v-list-item>
              </v-tab>
            </v-tabs>
          </div>
            <div class="pa-2 text-center center" v-if="resVariant.length < 1">
              <v-img
                  class="center"
                  :src="eatmoreLogo"
                  width="100%"
                  height="100%"
              />
              <p class="text-grey pb-0 mb-0">There is no product variants. Add product variant to make a variety of products.</p>
              <v-btn
                @click.prevent="handleFormSubmit"
                text
                color="#FDB526" class="text-center pa-0 ma-0"
                dark>
                <span class="text-capitalize">Learn More</span>
              </v-btn>
            </div>
        </v-col>
        <v-col cols="9">
          <div>
            <v-col cols="12" class="d-flex flex-row">
              <div class="pt-1">
              <app-file-upload
                  height="102px"
                  width="92px"
                  @onFileChange="onFileChange"
                  :value="ProductImage">
              </app-file-upload>
              </div>
              <div class="pa-2">
                <p class="text-bold-xl pb-0 mb-1">{{name.product_name}}</p>
                <p class="text-bold pb-0 mb-1">{{titlee}}</p>
                <p class="text-grey pb-0 mb-0">{{subtitlee}}</p>
              </div>
            </v-col>
            <v-col cols="12" class="mb-0 pb-0">
              <p class="text-blood-sm">Recipes Description</p>
              <v-textarea
               class="mb-0 pb-0"
                filled
                outlined
                single-line
                counter
                v-model="description"
                :rules="rules"
                name="input-7-4"
                label="Eg. All floor smoking area"
              ></v-textarea>
            </v-col>
            <v-col cols="12" class="mt-0 pt-0">
              <p class="text-blood-sm">Recipe Quantity</p>
              <v-text-field
                label="Eg: 1"
                suffix="Pcs"
                single-line
                dense
                v-model="recipeQty"
                filled
                outlined
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <div>
                <p class="text-blood">Ingredients</p>
                <div
                :key="index.id"
                v-for="(row, index) in IngrediantsDy">
                  <v-row>
                    <v-col cols="4">
                      <p class="app-title-small ma-0">Inventory Name</p>
                      <v-text-field
                          label="Variant Name"
                          placeholder="Eg. Garam"
                          v-model="row.name"
                          single-line
                          dense
                          filled
                          outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <p class="app-title-small ma-0">Quantity</p>
                      <v-text-field
                          label="SKU"
                          placeholder="Eg. 01"
                          v-model="qyt[index]"
                          single-line
                          dense
                          filled
                          outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <p class="app-title-small ma-0">Unit</p>
                      <v-select
                      dense
                      :items="UnitList"
                      outlined
                      ></v-select>
                    </v-col>
                    <v-col cols="auto">
                      <div class="pt-7">
                        <v-icon  @click.prevent="removeConfigurationRow(index)" medium color="red" class="cursor-pointer">mdi-delete</v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <v-btn
                  width="100%"
                  @click.prevent="dialog = true"
                  color="#FAFAFA" class="text-center w-full"
                  dark>
                  <span class="text-blue-sm">Add Ingredients</span>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" class="d-flex flex-row-reverse">
              <v-btn
                color="#FDB526"
                class="text-center float-right"
                dark>
                <span class="text-capitalize">Save Recipes</span>
              </v-btn>
            </v-col>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <!-- modal -->
    <v-dialog v-model="dialog" persistent max-width="450">
      <v-card class="pa-2">
        <v-card-title class="text-blood pl-0 pt-1 pr-0 pb-3">Add Ingrediants
          <v-spacer></v-spacer>
          <v-icon class="float-right"
          @click.prevent="dialog = false">mdi-close</v-icon>
        </v-card-title>
        <div>
          <p class="text-blood-sm">Search toppings or modifier</p>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Eg: Bawang"
            single-line
            dense
            filled
            outlined
            hide-details
          ></v-text-field>
        <div class="my-5" style="max-height: 364px; overflow-x:auto">
          <v-data-table
            :headers="headers"
            :items="toppingsList"
            :search="search"
            :items-per-page="itemsPerPage"
            hide-default-header
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
          >
            <template v-slot:item.avatar="{item}">
              <v-row>
                <v-col cols="2" class="pa-1">
                  <v-img src="https://goodminds.id/handsome/wp-content/uploads/2019/04/18.-Ragam-Menu-Takjil-Buka-Puasa-yang-Praktis-dan-Menyegarkan.jpg" style="width:120px; height:48px; border-radius: 4px;" aspect-ratio="1.7"></v-img>
                </v-col>
                <v-col cols="10">
                  <span class="text-blood">{{item.name}}</span><br>
                  <span>{{item.code}}</span>
                </v-col>
              </v-row>
            </template>
            <template v-slot:item.other="{item}">
              <v-checkbox v-model="selected" :value="item"></v-checkbox>
            </template>
          </v-data-table>
        </div>
        </div>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="addvariant(selected)"
            color="#FDB526" class="text-center mt-3 w-full"
            width="100%"
            dark>
            <span class="text-capitalize">Add Ingrediants</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AppFileUpload from '@/components/AppFileUpload'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('product')
const { mapStateInvent } = createNamespacedHelpers('inventories')
export default {
  name: 'recipes-edit',
  components: {
    AppFileUpload
  },
  computed: {
    eatmoreLogo () {
      return require('@/assets/img/NotFound.png')
    },
    ...mapState([
      'resVariant',
      'resVariantDetail',
      'name'
    ]),
    ...mapStateInvent([
      'resInvent'
    ])
  },
  data () {
    return {
      tabActive: 0,
      search: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: 1000,
      dialog: false,
      title: 'There is no product variants. Add product variant to make a variety of products.',
      subtitle: 'Learn More',
      rules: [v => v.length <= 225 || 'Max 225 characters'],
      ProductImage: null,
      titlee: null,
      subtitlee: null,
      selected: [],
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'avatar'
        },
        { text: '', value: 'name' },
        { text: '', value: 'other', sortable: false }
      ],
      menuItems: [
        {
          title: 'Baso Ayam',
          subtitle: 'XYZ6155',
          status: 'warning'
        },
        {
          title: 'Baso Daging',
          subtitle: 'RSTU766',
          status: 'danger'
        },
        {
          title: 'Baso Daging Tiren',
          subtitle: 'BNIB122',
          status: null
        }
      ],
      UnitList: [
        {
          text: 'Sendok Makan (SDM)',
          value: 1
        }
      ],
      toppingsList: [
        {
          id: 1,
          name: 'Cabe',
          code: 'KZ-276SJ27',
          avatar: 'https://assets.mubicdn.net/images/cast_member/721101/image-original.jpg?1570516226'
        },
        {
          id: 2,
          name: 'Gula',
          code: 'KZ-276SJ34',
          avatar: 'https://asset.winnetnews.com/image/cache/slide/post/image-bukan-janda-ini-status-asli-aurelie-moeremans-1580793251.jpg'
        }
      ],
      IngrediantsDy: [],
      qyt: [],
      unit: [],
      dataPass: [],
      recipeQty: null,
      description: null
    }
  },
  watch: {
    dataPass (val) {
      this.recipeQty = val.ingredient_qty
      this.description = val.ingredient_description
    }
  },
  mounted () {
    this.$store.commit('product/SET_idRecipes', this.$route.params.id)
    this.$store.dispatch('product/getVariantlist')
    this.$store.dispatch('inventories/getInventories')
  },
  methods: {
    menuchanges (val) {
      this.titlee = val.variant_name
      this.subtitlee = val.variant_sku
      this.$store.commit('product/SET_idVatiantDetail', val.ingredient_ids[0])
      this.$store.dispatch('product/getEditRecipes')
      this.dataPass = this.resVariantDetail
    },
    addvariant (val) {
      this.IngrediantsDy = val
      this.dialog = false
    },
    removeConfigurationRow: function (index) {
      this.IngrediantsDy.splice(index, 1)
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
      this.ProductImage = file
    }
  }
}
</script>
<style lang="scss" scoped>
  .text{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .img-popup{
    width: 48px !important;
    height: 100%;
    border-radius: 5px !important;
  }
</style>
