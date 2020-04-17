<template>
  <div class="px-5">
    <apexchart type="bar" style="max-width: 1300px" height="300" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'ChartCustomerGrowthYearly',
  components: {
    apexchart: VueApexCharts
  },
  props: ['options', 'data'],
  data () {
    return {
      series: [
        {
          name: 'Customer Growth',
          data: [7000, 7800, null, null, null, null, null, null, null]
        }
      ],
      chartOptions: {
        chart: {
          type: 'area',
          width: '90%',
          height: 200,
          zoom: {
            enabled: false
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
          categories: [2019, 2020, '', '', '', '', '', '', '']
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
  }
}
</script>
