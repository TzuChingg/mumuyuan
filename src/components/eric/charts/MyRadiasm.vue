<template>
  <div>
    <!-- 目標營業額差距 -->
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
        labels: ["Progress"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: "70%"
            },
            dataLabels: {
              showOn: "always",
              name: {
                offsetY: -10,
                show: true,
                color: "#888",
                fontSize: "13px"
              },
              value: {
                color: "#111",
                fontSize: "30px",
                show: true
              }
            }
          }
        },
        stroke: {
          lineCap: "round",
        },
      },
      series: [],
    };
  },
  mounted() {
    this.$axios.get('/orders')
      .then(res => {
        let total = 0
        res.data.forEach(element => {
          total += element.price
        })
        total = ((total / 100000) * 100).toFixed(2);
        this.series.push(total)
      })
  }
};
</script>
