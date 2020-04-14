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
            <v-card flat>
            <v-card-text>
                <p>
                Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                </p>

                <p>
                Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
                </p>

                <p class="mb-0">
                Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
                </p>
            </v-card-text>
            </v-card>
        </v-tab-item>
        <v-tab-item>
            <v-card flat>
            <v-card-text>
                <p>
                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                </p>

                <p>
                Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                </p>

                <p>
                Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
                </p>

                <p>
                Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                </p>

                <p class="mb-0">
                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                </p>
            </v-card-text>
            </v-card>
        </v-tab-item>
        <v-tab-item>
            <v-card flat>
            <v-card-text>
                <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                </p>

                <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                </p>
            </v-card-text>
            </v-card>
        </v-tab-item>
        </v-tabs>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AppRestaurant',
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
