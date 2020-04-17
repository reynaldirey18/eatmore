<template>
  <v-card
        class="mx-auto mt-3"
        outlined
    >
      <div class="d-flex">
        <v-tabs height="112" slider-color="#FDB526">
          <v-tab class="tab-card-chart">
            <p class="text-capitalize">Unique Customer</p>
            <p class="bold">780</p>
            <p class="green">+240 (+20%)</p>
          </v-tab>
          <v-tab class="tab-card-chart">
            <p class="text-capitalize">Total Customer</p>
            <p class="bold">820</p>
            <p class="green">+340 (+40%)</p>
          </v-tab>
          <div class="d-flex align-self-center" style="position: absolute; right: 24px">
            <v-btn outlined color="#E6E6E6" class="mr-6">
              <div class="d-flex justify-space-between">
                <span class="black60 text-capitalize">Monthly</span>
                <v-icon class="ml-3" color="#FDB526" small>mdi-radiobox-marked</v-icon>
              </div>
            </v-btn>
            <v-btn outlined color="#E6E6E6">
              <div class="d-flex justify-space-between">
                <span class="black60 text-capitalize">Yearly</span>
                <v-icon class="ml-3" small>mdi-radiobox-blank</v-icon>
              </div>
            </v-btn>
          </div>
          <v-tab-item>
            <chart-customer-growth-monthly></chart-customer-growth-monthly>
          </v-tab-item>
          <v-tab-item>
            <chart-customer-growth-monthly></chart-customer-growth-monthly>
          </v-tab-item>
        </v-tabs>
      </div>
    </v-card>
</template>

<script>
import ChartCustomerGrowthMonthly from '@/views/Customer/components/ChartCustomerGrowthMonthly'
export default {
  name: 'CardCustomerSummary',
  components: {
    ChartCustomerGrowthMonthly
  }
}
</script>

<style lang="scss" scoped>
.tab-card-chart {
    display: block;
    height: 112px;
    width: 239px;
    padding-left: 50px;
    padding-top: 10px;
  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 0px;
    text-align: left;
    color: #000000;
    margin-top: 24px;
  }
  p.bold {
    font-weight: 500;
    font-size: 22px;
  }
  p.green {
    color: #1DBA81;
    background-color: transparent !important;
  }
}
</style>
