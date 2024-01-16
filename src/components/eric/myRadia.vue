<template>
    <div>
      <apexchart
        width="100%"
        height="300"
        type="radialBar"
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
           
            labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D'],

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

        series: [67, 84, 97, 61],
    };
},
};
</script>