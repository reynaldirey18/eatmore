<template>
  <div>
    <div class="mt-4 d-flex flex-row justify-space-between">
      <h1 class="app-title">Promo</h1>
      <v-btn color="#FDB526" dark small width="160px">New Promo</v-btn>
    </div>
    <v-card class="pa-6 mt-6" outlined>
      <span class="app-subtitle-small">Eatmore Promo</span>
      <v-row>
        <v-col cols="4">
          <div class="picture d-flex">
            <v-icon class="align-self-center mx-auto" color="#000000" size="30">mdi-file-image-outline</v-icon>
          </div>
          <div class="detail-promo d-flex flex-column pa-2 mb-2">
            <span class="app-subtitle">PROMO HARKULNAS</span>
            <span>Diskon 50%</span>
            <span>Valid Date 22-11-2020</span>
          </div>
          <v-btn color="#FDB526" dark block>Join Promo</v-btn>
        </v-col>
        <v-col cols="4">
          <div class="picture d-flex">
            <v-icon class="align-self-center mx-auto" color="#000000" size="30">mdi-file-image-outline</v-icon>
          </div>
          <div class="detail-promo d-flex flex-column pa-2 mb-2">
            <span class="app-subtitle">SPECIAL RAMADHAN OFFER</span>
            <span>Potongan Harga Rp. 23.000</span>
            <span>Valid Date 20-11-2020</span>
          </div>
          <v-btn color="#FDB526" dark block>Join Promo</v-btn>
        </v-col>
        <v-col cols="4">
          <div class="picture d-flex">
            <v-icon class="align-self-center mx-auto" color="#000000" size="30">mdi-file-image-outline</v-icon>
          </div>
          <div class="detail-promo d-flex flex-column pa-2 mb-2">
            <span class="app-subtitle">PROMO STAY AT HOME</span>
            <span>Potongan Harga Rp. 23.000</span>
            <span>Valid Date 19-11-2020</span>
          </div>
          <v-btn color="#FDB526" dark block>Join Promo</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.app-subtitle {
  font-weight: bold;
}
.app-subtitle-small {
  font-size: 14px;
}
.picture {
  width: 100%;
  height: 164px;
  background-color: #F4F5F6;
}
.detail-promo {
  background-color: #FFF8E9;
}
</style>
