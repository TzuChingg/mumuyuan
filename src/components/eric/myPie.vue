<template>
    <div>
      <apexchart
        width="100%"
        height="500"
        type="donut"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </template>

<script>
export default {
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
        
        plotOptions: {
            pie: {
            customScale: 1, // 调整标签的位置，可以根据需要调整这个值
            }
        },
        theme: {
            palette: 'palette3' // upto palette10
        },
        legend: {
            position: 'bottom'
          }
      },

      series: [44, 55, 41, 17, 15],
      
    };
  },
};
</script>