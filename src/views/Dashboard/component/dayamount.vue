<template>
   <div id="chart">
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
// import * as moment from 'moment'
export default {
  components: {
    apexchart: VueApexCharts
  },

  data: function () {
    return {
      moment: null,
      series: [{
        name: 'Net Profit',
        data: [15000, 25000, 35000, 20300, 35000, 21000, 30000]
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '35%'
          }
        },
        dataLabels: {
          enabled: false,
          style: {
            colors: ['#3D87F4']
          }
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          title: {
            text: 'Date',
            style: {
              fontSize: '14px',
              fontWeight: 'normal',
              fontFamily: 'Rubik',
              color: '#B4B9BF'
            }
          },
          categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        yaxis: {
          title: {
            text: 'Amounts'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      }
    }
  }
}
</script>
