console.log(x);
function plot(){
data1y=[];
data1x=[];

data1y.push.apply(data1y, data11);

var yaxis1= data1y.sort(function(a, b){return a-b});


data1x.push.apply(data1x, data12);
 var xaxis1= data1x.sort(function(a, b){return a-b});


let myChart=document.getElementById("myChart").getContext("2d");

let lineChart= new Chart(myChart,{
  type:"line",
  data:{
    labels:xaxis1,
    datasets:[{
      label:"Temperature",
      data:yaxis1,
     
      borderWidth:4,
      borderColor:"red",
      hoverBorderWidth:10,
      hoverBorderColor:"blue"
    }]
  },
  options:{
    title:{
      display:true,
      text:"Tempertature VS Resistance"
    }
  }
});
}


function plot2(){
  data2y=[];
  data2x=[];
  
  data2y.push.apply(data2y, data21);
  
  var yaxis2= data2y.sort(function(a, b){return a-b});
 // console.log(data2y);
  
  data2x.push.apply(data2x, data22);
   var xaxis2= data2x.sort(function(a, b){return a-b});
 // console.log(data2x);
  
  let myChart2=document.getElementById("myChart2").getContext("2d");
  
  let lineChart= new Chart(myChart2,{
    type:"line",
    data:{
      labels:xaxis2,
      datasets:[{
        label:"Temperature",
        data:yaxis2,
       
        borderWidth:4,
        borderColor:"red",
        hoverBorderWidth:10,
        hoverBorderColor:"blue"
      }]
    },
    options:{
      title:{
        display:true,
        text:"Tempertature VS Resistance"
      }
    }
  });
  }
  