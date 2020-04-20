<template>
  <div id="chart">
    <apexchart type="area" style="max-width: 1400px" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
import * as moment from 'moment'
export default {
  components: {
    apexchart: VueApexCharts
  },

  data: function () {
    return {
      moment: null,
      tempDate: [],
      // chart
      series: [
        {
          name: 'Daily Gross Sales Amount',
          data: [null, 10000, 15000, 38000, 30000, 20000, 25000, 21000, 23000, 30000, 25000, 19000, 24000, 38000, 40000, null]
        }
      ],
      chartOptions: {
        chart: {
          type: 'area',
          width: '90%',
          height: 350,
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
          type: 'category',
          labels: {
            format: 'MMM DD'
          },
          title: {
            text: 'Date',
            style: {
              fontSize: '14px',
              fontWeight: 'normal',
              fontFamily: 'Rubik',
              color: '#B4B9BF'
            }
          },
          categories: ['', 'Apr 01', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Today']
        },
        yaxis: {
          title: {
            text: 'Amounts',
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
  mounted () {
    this.dataseries()
  },
  methods: {
    dataseries () {
      this.tempDate.push(
        moment().subtract(13, 'days').format('MMM DD'),
        moment().subtract(12, 'days').format('MMM DD'),
        moment().subtract(11, 'days').format('MMM DD'),
        moment().subtract(10, 'days').format('MMM DD'),
        moment().subtract(9, 'days').format('MMM DD'),
        moment().subtract(8, 'days').format('MMM DD'),
        moment().subtract(7, 'days').format('MMM DD'),
        moment().subtract(6, 'days').format('MMM DD'),
        moment().subtract(5, 'days').format('MMM DD'),
        moment().subtract(4, 'days').format('MMM DD'),
        moment().subtract(3, 'days').format('MMM DD'),
        moment().subtract(2, 'days').format('MMM DD'),
        moment().subtract(1, 'days').format('MMM DD'),
        'Today'
      )
      this.chartOptions.xaxis.categories = this.tempDate
      console.log(this.chartOptions.xaxis.categories)
    }
  }
}
</script>
