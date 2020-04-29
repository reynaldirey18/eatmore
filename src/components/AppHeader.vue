<template>
  <div>
     <v-app-bar
      app
      dense
      color="white"
      style="height:56px;border: 1px solid rgba(0, 0, 0, 0.05)"
      elevation="0"
      flat
    >
      <v-toolbar-title style="
        dispay: block;
        width: 200px;
        height: 63px;
      ">
        <v-overflow-btn
          class="my-2"
          :items="dropdown_font"
          label="Outlet"
          target="#dropdown-example"
          background-color="white"
          :elevation="0"
          shaped
          style="border-radius: 0;border-right:1px solid rgba(0, 0, 0, 0.05)"
        ></v-overflow-btn>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      account: null,
      dropdown_font: ['Outlet 1', 'Outlet 2']
    }
  }
}
</script>
