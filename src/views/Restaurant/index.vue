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
        <v-toolbar-title class="pl-3 app-subtitle">Information</v-toolbar-title>
        </v-toolbar>
        <v-tabs hide-slider background-color="#FBFBFB" color="dark" vertical>
          <v-tab
            v-for="(tabItem, i) in menuItems"
            :key="i"
            style="
              width: 299px;
              justify-content: flex-start;
              padding: 30px 00px;
            "
          >
              <v-list-item two-line class="py-5">
                  <v-list-item-content>
                      <v-list-item-title class="text-start text-capitalize app-title-small">{{tabItem.title}}</v-list-item-title>
                      <v-list-item-subtitle class="text-start text-capitalize app-subtitle-small">{{tabItem.subtitle}}</v-list-item-subtitle>
                  </v-list-item-content>
              </v-list-item>
          </v-tab>
          <v-tab-item>
            <BasicProfile />
          </v-tab-item>
          <v-tab-item>
            <Location />
          </v-tab-item>
          <v-tab-item>
            <BankAccount />
          </v-tab-item>
          <v-tab-item>
            <BusinessHours />
          </v-tab-item>
          <v-tab-item>
            <SpecialBusinessHours />
          </v-tab-item>
          <v-tab-item>
            <Email />
          </v-tab-item>
          <v-tab-item>
            <Gallery />
          </v-tab-item>
          <v-tab-item>
            <Reviews />
          </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import {
  BasicProfile,
  Location,
  BankAccount,
  BusinessHours,
  SpecialBusinessHours,
  Email,
  Gallery,
  Reviews
} from './components'
export default {
  name: 'AppRestaurant',
  components: {
    BasicProfile,
    Location,
    BankAccount,
    BusinessHours,
    SpecialBusinessHours,
    Email,
    Gallery,
    Reviews
  },
  data () {
    return {
      menuItems: [
        {
          title: 'Basic Profile',
          subtitle: 'Set your business basic profile'
        },
        {
          title: 'Location',
          subtitle: 'Set your business location'
        },
        {
          title: 'Gallery',
          subtitle: 'Set your business galley'
        },
        {
          title: 'Business Hours',
          subtitle: 'Set your bussiness hours'
        },
        {
          title: 'Special Business Hours',
          subtitle: 'Able to set special hour when holidays'
        },
        {
          title: 'Reviews',
          subtitle: 'All review from your customer'
        },
        {
          title: 'Email',
          subtitle: 'Set your business email'
        },
        {
          title: 'Bank Account',
          subtitle: 'Set your business bank account'
        },
        {
          title: 'Google Business',
          subtitle: 'Set your Google Business account'
        }
      ]
    }
  }
}
</script>
