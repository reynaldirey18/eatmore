<template>
  <div>
    <div class="outlet-regist pt-10 pb-6">
      <img src="@/assets/img/Eatmore logo-01 1.png" alt="Eatmore logo" class="logo">
      <div class="step-1" v-show="step == 1">
        <outlet-detail></outlet-detail>
      </div>
      <div class="step-2" v-show="step == 2">
        <address-section></address-section>
      </div>
    </div>
  </div>
</template>

<script>
import outletDetail from './components/DetailSection'
import addressSection from './components/AddressSection'

export default {
  name: 'outlet-registration',
  components: {
    outletDetail,
    addressSection
  },
  data () {
    return {
      step: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  position: absolute;
  top: 20px;
  left: 50px;
  width: 100px;
}
.outlet-regist {
  background-color: #e5e5e5;
}
</style>
