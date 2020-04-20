<template>
  <div>
    <v-card class="pb-6" outlined>
      <div class="d-flex">
        <v-card-title class="app-subtitle">Eligible Customer</v-card-title>
        <v-spacer></v-spacer>
        <div class="pa-5">
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :max-width="211"
            offset-y
          >
            <template v-slot:activator="{ on }">
              <v-btn
                color="#FFFFFF"
                v-on="on"
              >
                <span class="text-capitalize">Sorts & Filters</span>
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-card>
              <v-list flat dense subheader>
                <v-subheader>Sort By</v-subheader>
                <v-radio-group v-model="sortBy" color="#FDB526" dense class="pa-0 ma-0">
                  <v-list-item v-for="(option, i) in sortByOption" :key="option.text + i">
                    <template v-slot:default>
                      <v-list-item-action class="pa-0 ma-0 mr-2">
                        <v-radio :value="option.text" color="#FDB526"></v-radio>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>{{option.text}}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-radio-group>

                <v-subheader>Filters</v-subheader>
                <v-radio-group dense v-model="filter" class="pa-0 ma-0">
                  <v-list-item v-for="(option, i) in filterOptions" :key="option.text + i">
                    <template v-slot:default>
                      <v-list-item-action class="pa-0 ma-0 mr-2">
                        <v-radio :value="option.text" color="#FDB526"></v-radio>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>{{option.text}}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-radio-group>
              </v-list>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn text @click="menu = false">Reset</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="menu = false">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
          <v-btn class="ml-5" color="#FDB526" dark><span class="text-capitalize">Export</span></v-btn>
        </div>
      </div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th colspan="5">
                <v-text-field
                  height="50"
                  class="mt-3 justify-end align-center"
                  background-color="#FAFAFA"
                  placeholder="Search"
                  outlined
                  dense
                >
                  <template v-slot:prepend-inner>
                    <div style="margin-top: 7px">
                      <v-icon>mdi-magnify</v-icon>
                    </div>
                  </template>
                </v-text-field>
              </th>
            </tr>
            <tr style="background-color:#FDB52630">
              <th class="text-left py-3" style="color:#FDB526">Name</th>
              <th class="text-left py-3" style="color:#FDB526">Customer ID</th>
              <th class="text-left py-3" style="color:#FDB526">Period</th>
              <th class="text-left py-3" style="color:#FDB526">Reward</th>
              <th class="text-left py-3" style="color:#FDB526">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(customer, i) in eligibleCustomerData" :key="customer.name + i">
              <td class="py-5">
                {{ customer.name }}
              </td>
              <td class="py-5">
                {{ customer.customer_id }}
              </td>
              <td class="py-5">
                {{ customer.period }}
                </td>
              <td class="py-5">
                {{ customer.reward }}
                </td>
              <td class="py-5">
                {{ customer.status }}
                </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
        <div class="d-flex">
          <v-spacer></v-spacer>
          <div>
            <v-pagination
              color="#FDB526"
              v-model="page"
              :length="4"
            ></v-pagination>
          </div>
        </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CardEligibleCustomer',
  data () {
    return {
      page: 1,
      menu: false,
      sortBy: '',
      filter: '',
      sortByOption: [
        {
          text: 'Highest Transaction'
        },
        {
          text: 'Lowest Transaction'
        }
      ],
      filterOptions: [
        {
          text: 'Open'
        },
        {
          text: 'Redeemed'
        },
        {
          text: 'Expired'
        },
        {
          text: 'Vouchers'
        },
        {
          text: 'Promo'
        }
      ],
      eligibleCustomerData: [
        {
          name: 'Fanklin Dawe',
          customer_id: 'mahmud212',
          transaction_amount: 'Rp. 730.013',
          period: '21/02/20 - 22/02/20',
          reward: 'Vocher',
          status: 'Open'
        },
        {
          name: 'Fanklin Dawe',
          customer_id: 'mahmud212',
          transaction_amount: 'Rp. 730.013',
          period: '21/02/20 - 22/02/20',
          reward: 'Vocher',
          status: 'Redeemed'
        },
        {
          name: 'Fanklin Dawe',
          customer_id: 'mahmud212',
          transaction_amount: 'Rp. 730.013',
          period: '21/02/20 - 22/02/20',
          reward: 'Vocher',
          status: 'Expired'
        }
      ]
    }
  }
}
</script>
