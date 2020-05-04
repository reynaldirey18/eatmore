<template>
  <div>
    <div>
      <h1 class="app-title">New Promo</h1>
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
      <div class="subtitle mt-8">
        <span class="app-subtitle-small">Description</span>
      </div>
      <div class="description pa-4 mt-4 d-flex flex-column">
        <span class="app-subtitle-small">Benefit For Merchant</span>
        <span>Dengan Join Promo Eatmore, maka merchant mendapatkan benefit dari promo tersebut yang berupa :</span>
        <span>- Produk dari merchant akan di tampilkan pada menu teratas<br>- Merchant tidak dikenakan biaya pajak<br>- Merchant mendapatkan untung dari promo<br>- Merchant mendapatkan bagi hasil dari promo sebesar 20%</span>
        <span class="app-subtitle-small mt-4">Promo Terms</span>
        <span>Promo ini mempunyai syarat dan ketentuan untuk Merchant dan Customer :</span>
        <span>- Promo ini hanya berlaku untuk take away<br>- Produk yang sudah terpilih tidak dapat di hapus<br>- Setelah join promo, Eatmore akan me-review produk anda apakah layak untuk di publish atau tidak<br>- Merchant mendapatkan bagi hasil dari promo sebesar 20%</span>
      </div>
      <v-btn color="#FDB526" dark block large class="mt-4">BUY - Rp.15.000</v-btn>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.picture {
  height: 249px;
  background-color: #F4F5F6;
}
.detail-promo {
  background-color: #FFF8E9;
  .app-subtitle {
    font-weight: bold;
  }
  .app-subtitle-small {
    font-weight: bold;
    color: #21201E;
    font-size: 14px;
  }
}
.subtitle {
  .app-subtitle-small {
    font-weight: bold;
  }
}
.description {
  background-color: #FAFAFA;
  line-height: 33px;
  .app-subtitle-small {
    font-weight: bold;
    font-size: 14px;
  }
}
</style>
