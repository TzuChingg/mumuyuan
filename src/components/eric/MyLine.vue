<template>
  <div>
    <apexchart
      width="100%"
      height="350"
      type="bar"
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
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          
        },
        // colors: ['#66DA26'],
        plotOptions: { 
          bar: {
            distributed: true,
          },
        },
        dataLabels: {    //圓柱上的數字
          enabled: false,
        },
      },
      theme: {
        palette: 'palette1' // upto palette10
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
          
        },
        
      ],
      
    };
  },
};
</script>
