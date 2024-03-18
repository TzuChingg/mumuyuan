<template>
  <div>
    <!-- 產品庫存 -->
    <apexchart width="100%" height="500" type="treemap" :options="chartOptions" :series="series"></apexchart>
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
        treemap: {
          colorScale: {
            ranges: [
              {
                from: -6,
                to: 0,
                color: '#CD363A'
              },
              {
                from: 0.001,
                to: 6,
                color: '#52B12C'
              }
            ]
          }
        }
      },
      series: [
        {
          data: [],
        }
      ],
    }
  },
  mounted() {
    this.$axios.get('/products')
      .then(res => {
        res.data.forEach(element => {
          this.series[0].data.push({
            x: element.productName,
            y: element.count
          })
        })
      })
  }
};
</script>
