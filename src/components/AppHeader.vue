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
      <v-spacer></v-spacer>
      <v-avatar size="36">
        <img
          src="https://vignette.wikia.nocookie.net/narutofanon/images/9/9f/Smallnaruto.png/revision/latest?cb=20170816170540"
          alt="Naruto"
        >
      </v-avatar>
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

<style lang="scss" scoped>
.v-avatar {
  border: 1px solid #FDB526;
  box-sizing: border-box;
  background-blend-mode: normal;
}
</style>
