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
      series: [
        {
          name: 'Am',
          data: [15000, 25000, 35000, 20300, 35000, 21000, 30000, 10000, 20000, 32000, 33000, 35000]
        },
        {
          name: 'Pm',
          data: [10000, 39000, 40000, 2300, 32000, 18000, 35000, 10000, 23000, 30000, 30000, 34000]
        }
      ],
      chartOptions: {
        chart: {
          type: 'bar',
          height: '350',
          width: '100%'
        },
        colors: ['#DE699A', '#3D87F4'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '35%',
            columnhight: '100%'
          }
        },
        dataLabels: {
          enabled: false,
          style: {
            colors: ['#DE699A', '#3D87F4']
          }
        },
        legend: {
          horizontalAlign: 'left'
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
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
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
