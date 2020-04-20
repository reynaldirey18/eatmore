<template>
  <div>
    <h1 class="app-title mb-5">Business Profile</h1>

    <v-card>
      <v-toolbar style="box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.05);" height="52" dense short flat color="white">
        <v-toolbar-title class="app-subtitle" style="
            background-color: #FBFBFB;
            height: 52px;
            line-height: 52px;
            margin-left: -16px;
            padding-left: 16px;
            width: 299px;
            box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.07);
        ">Menu</v-toolbar-title>
        <v-toolbar-title class="pl-3 app-subtitle">Report</v-toolbar-title>
        </v-toolbar>
        <v-tabs hide-slider background-color="#FBFBFB" color="dark" vertical>
          <v-tab
            v-for="(tabItem, i) in menuItems"
            :key="i"
            @click="tabActive = i"
            style="
              width: 299px;
              justify-content: flex-start;
              padding: 30px 00px;
            "
          >
            <v-list-item two-line class="py-1" :style="tabActive === i  ? 'background-color: #F2F2F2' : ''">
                <v-list-item-content>
                    <v-list-item-title class="text-start text-capitalize app-title-small">{{tabItem.title}}</v-list-item-title>
                    <v-list-item-subtitle class="text-start text-capitalize app-subtitle-small">{{tabItem.subtitle}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
          </v-tab>
          <v-tab-item>
            <SalesSumary />
          </v-tab-item>
          <v-tab-item>
            <GrossProfit />
          </v-tab-item>
          <v-tab-item>
            <Sales />
          </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import {
  SalesSumarry,
  GrossProfit,
  Sales
} from './components'
export default {
  name: 'Report',
  components: {
    SalesSumary: SalesSumarry,
    GrossProfit,
    Sales
  },
  data () {
    return {
      tabActive: 0,
      menuItems: [
        {
          title: 'Sales Summary',
          subtitle: 'All your seles activity'
        },
        {
          title: 'Gross Profit',
          subtitle: 'Specificity your gross profit’s report'
        },
        {
          title: 'Product Sell',
          subtitle: 'Specificity of your product sell’s report'
        }
      ]
    }
  }
}
</script>
