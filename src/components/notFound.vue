<template>
  <div>
    <div class="pa-10 text-center center">
      <v-img
          class="center"
          :src="logo"
          width="303.27px"
          height="202px"
      />
      <p class="text-blood">{{Title}}</p>
      <p>{{Subtitle}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DataNotFound',
  props: ['Title', 'Subtitle'],
  computed: {
    logo () {
      return require('@/assets/img/NotFound.png')
    }
  },
  data () {
    return {
    }
  }
}
