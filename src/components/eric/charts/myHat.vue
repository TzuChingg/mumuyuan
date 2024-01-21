<template>
    <div>
      <!-- 產品庫存 -->
      <apexchart
        width="100%"
        height="500"
        type="treemap"
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
            data: [
              {
                x: "New Delhi",
                y: 218,
              },
              {
                x: "Kolkata",
                y: 149,
              },
              {
                x: "Mumbai",
                y: 184,
              },
              {
                x: "Ahmedabad",
                y: 55,
              },
              {
                x: "Bangaluru",
                y: 84,
              },
              {
                x: "Pune",
                y: 31,
              },
              {
                x: "Chennai",
                y: 7,
              }
            ],
          
        }
      ],
    }
  }
};
</script>