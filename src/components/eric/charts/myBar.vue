<template>
  <div>
    <!-- 產品銷售排名 -->
    <apexchart
      width="100%"
      height="500"
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
          categories: [],
          
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
        theme: {
        palette: 'palette6' // upto palette10
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

  mounted(){
    this.$axios.get('/orders')
    .then(res=>{
      let use=[]
      res.data.forEach(element=>{
        element.product.forEach((q,index)=>{
          if(!this.chartOptions.xaxis.categories.includes(q.name)){
            this.chartOptions.xaxis.categories.push(q.name) 
          }
          use.push({
            x:q.name,
            y:q.quantity
          })
        })
      })
      
      let x = 0;
      let push = 0;
      while (use.length > 0) {
          let z = use[x].x;
          push = use.reduce((accumulator, item) => {
              if (z === item.x) {
                  return accumulator + item.y;
              } else {
                  return accumulator;
              }
          }, 0);
          use = use.filter((item) => item.x !== z);
          this.series[0].data.push(push);
          push = 0;
      }
    })
  }
};
</script>
