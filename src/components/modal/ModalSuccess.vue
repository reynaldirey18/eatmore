<template>
  <div>
    <v-dialog v-model="showModal"
      :button-close-hidden="false"
      persistent max-width="350">
      <v-card class="pa-8 pb-10 d-flex flex-column justify-center">
        <img src="../../assets/img/success.png" alt="success" class="mx-auto">
        <v-card-title class="title-card mx-auto">{{title}}</v-card-title>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            color="#FDB526" class="mt-3 w-full"
            width="100%"
            @click="showModal = false"
            dark>
            <span class="text-capitalize">Okay</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: 'popup-success',
  props: ['title', 'dialog'],
  data () {
    return {
      showModal: false
    }
  },
  mounted () {
    this.showModal = this.dialog
  }
}
</script>
