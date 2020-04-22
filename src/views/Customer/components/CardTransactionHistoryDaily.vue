<template>
  <div class="px-5">
    <apexchart v-if="showChart" type="bar" style="max-width: 1300px" height="300" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'ChartCustomerTransactionHistoryDaily',
  components: {
    apexchart: VueApexCharts
  },
  props: ['options', 'data'],
  data () {
    return {
      showChart: false,
      series: [
        {
          name: 'Transaction',
          data: [200, 300, 700, 550, 500, 600, 490, 550, 600, 580, 610, 710, 600, 650, 500]
        }
      ],
      chartOptions: {
        chart: {
          type: 'area',
          width: '90%',
          height: 200,
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2, 2, 2],
          curve: 'straight'
        },
        markers: {
          size: 4,
          shape: 'circle',
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          title: {
            text: ''
          },
          type: 'category',
          labels: {
            format: 'MMM DD'
          },
          categories: ['01 Mar', '02 Mar', '03 Mar', '04 Mar', '05 Mar', '06 Mar', '07 Mar', '08 Mar', '09 Mar', '10 Mar', '11 Mar', '12 Mar', '13 Mar', '14 Mar', 'Today']
        },
        yaxis: {
          title: {
            text: 'Customer Growth',
            style: {
              fontSize: '14px',
              fontWeight: 'normal',
              fontFamily: 'Leto',
              color: '#999999'
            }
          }
        },
        legend: {
          horizontalAlign: 'left'
        }
      }
    }
  },
  created () {
    setTimeout(() => {
      this.showChart = true
    }, 100)
  }
}
</script>
