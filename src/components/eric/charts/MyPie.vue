<template>
  <div>
    <!-- 口味取向 -->
    <apexchart width="100%" height="500" type="donut" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        labels: ['梅粉', '秘粉', '椒鹽', '不辣', '要辣',],
        plotOptions: {
          pie: {
            customScale: 1,
          }
        },
        theme: {
          palette: 'palette3'
        },
        legend: {
          position: 'bottom'
        }
      },
      series: [],
    };
  },
  mounted() {
    this.$axios.get('/orders')
      .then(res => {
        let one = 0
        let two = 0
        let three = 0
        let four = 0
        let five = 0
        res.data.forEach(element => {
          if (element.flavor == 1) {
            one++
          } else if (element.flavor == 2) {
            two++
          } else if (element.flavor == 3) {
            three++
          }
          if (element.spicy == 1) {
            four++
          } else {
            five++
          }
        })
        this.series[0] = one
        this.series[1] = two
        this.series[2] = three
        this.series[3] = four
        this.series[4] = five
      })
  }
};
</script>
