<template>
  <div>
    <!-- 時段訂單 -->
    <apexchart width="100%" height="300" type="radialBar" :options="chartOptions" :series="series"></apexchart>
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
        labels: ['午餐', '下午茶', '晚餐', '宵夜'],
        plotOptions: {
          radialBar: {
            dataLabels: {
              total: {
                show: true,
                label: 'TOTAL'
              }
            }
          }
        },
      },
      series: [],
    };
  },
  mounted() {
    this.$axios.get('/orders')
      .then(res => {
        let lunch = 0
        let dessert = 0
        let dinner = 0
        let supper = 0
        res.data.forEach(element => {
          if (11 <= parseInt(element.pickTime.split(":")[0]) && parseInt(element.pickTime.split(":")[0]) <= 13) {
            lunch += 5;
          } else if (14 <= parseInt(element.pickTime.split(":")[0]) && parseInt(element.pickTime.split(":")[0]) <= 17) {
            dessert += 5;
          } else if (18 <= parseInt(element.pickTime.split(":")[0]) && parseInt(element.pickTime.split(":")[0]) <= 21) {
            dinner += 5;
          } else if (22 <= parseInt(element.pickTime.split(":")[0]) && parseInt(element.pickTime.split(":")[0]) <= 24) {
            supper += 5;
          }
        })
        this.series[0] = lunch
        this.series[1] = dessert
        this.series[2] = dinner
        this.series[3] = supper
      })
  }
};
</script>
