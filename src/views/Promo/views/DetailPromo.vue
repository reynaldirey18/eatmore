<template>
  <div>
    <div>
      <h1 class="app-title">Detail Promo</h1>
    </div>
    <v-card class="pa-4 mt-6" outlined>
      <div class="picture d-flex">
        <v-icon class="align-self-center mx-auto" color="#000000" size="30">mdi-file-image-outline</v-icon>
      </div>
      <div class="detail-promo d-flex flex-column pa-4 mb-2">
        <span class="app-subtitle mb-2">PROMO STAY AT HOME</span>
        <span class="app-subtitle-small mb-2">Potongan Harga Rp. 23.000</span>
        <span>Valid Date 19-11-2020</span>
      </div>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.app-subtitle {
  font-weight: bold;
}
.app-subtitle-small {
  font-weight: bold;
  color: #21201E;
  font-size: 14px;
}
.picture {
  height: 249px;
  background-color: #F4F5F6;
}
.detail-promo {
  background-color: #FFF8E9;
}
</style>
