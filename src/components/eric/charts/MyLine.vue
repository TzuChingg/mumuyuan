<template>
  <div>
    <!-- 當月營業額 -->
    <apexchart width="100%" height="500" type="line" :options="chartOptions" :series="series"></apexchart>
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
        xaxis: {
          categories: [1, 5, 10, 15, 20, 25, 30],
        },
      },
      series: [
        {
          name: "series-1",
          data: [],
        },
      ],
    };
  },
  mounted() {
    this.$axios.get('/orders')
      .then(res => {
        res.data.forEach(element => {
          this.series[0].data.push(element.price)
        })
      })
  }
};
</script>
