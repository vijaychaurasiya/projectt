

const resistanceconstance=[
    {
        alpha:" 0.00392",
        temperature_range: " -200&#8451; to 850&#8451;"
    },
    {
        alpha:" 0.0038",
        temperature_range:" -200&#8451; to 260&#8451;"
    },
    {
        alpha:" 0.00672",
        temperature_range:" -80&#8451; to 260&#8451;"
    },
    {
        alpha:" 0.0041",
        temperature_range:" -200&#8451; to 500&#8451;"
    }
]

const data11=[];
const data12=[];


function change(){
    const selecter=document.getElementById("material").value ;

      if(selecter=="0"){
       const alphaconstant= document.getElementById("alphavalue").innerHTML="Alpha(α):" + resistanceconstance[0].alpha;
       document.getElementById("temp").innerHTML="Temperature Range:" + resistanceconstance[0].temperature_range;
      } else if(selecter==="1"){
        const alphaconstant= document.getElementById("alphavalue").innerHTML="Alpha(α):"   + resistanceconstance[1].alpha;
         document.getElementById("temp").innerHTML="Temperature Range:" + resistanceconstance[1].temperature_range;
      } else if(selecter==="2"){
        const alphaconstant= document.getElementById("alphavalue").innerHTML="Alpha(α):" + resistanceconstance[2].alpha;
         document.getElementById("temp").innerHTML="Temperature Range:" + resistanceconstance[2].temperature_range;
      } else if(selecter==="3"){
        const alphaconstant= document.getElementById("alphavalue").innerHTML="Alpha(α):" + resistanceconstance[3].alpha;
         document.getElementById("temp").innerHTML="Temperature Range:" + resistanceconstance[3].temperature_range;
      }
    
}
   
function response(){
    const selecter=document.getElementById("material").value ;
    const re=resistanceconstance[selecter].alpha
    const Ratzero=document.getElementById("ratzero").value;
    const temper=document.getElementById("inputtemp").value;
    const R= Ratzero*(1 + re*(temper-0));
    const roundoffR=R.toFixed(4);
    document.getElementById("rt").value=roundoffR;
    var feed={Rt:roundoffR, temp:temper};
         data11.push(feed.Rt);
         data12.push(feed.temp);
        
 
    var para = document.createElement("h6");
    var node = document.createTextNode("Temp.= "+ feed.temp+"," );
     para.appendChild(node);

    var node = document.createTextNode( " Rt= "+ feed.Rt);
     para.appendChild(node);

    var element = document.getElementById("div1");
     element.appendChild(para);

     
}


// for right exp

const data21=[];
const data22=[];

function change2(){
    const selecter2=document.getElementById("material2").value ;

      if(selecter2==="0"){
       const alphaconstant= document.getElementById("alphavalue2").innerHTML="Iron(+)Versus Constantan(-)";
    
      } else if(selecter2==="1"){
          const alphaconstant= document.getElementById("alphavalue2").innerHTML="Iron(+)Versus Constantan(-)";
          
      } else if(selecter2==="2"){
        const alphaconstant= document.getElementById("alphavalue2").innerHTML="Iron(+)Versus Constantan(-)";
         
      } else if(selecter2==="3"){
        const alphaconstant= document.getElementById("alphavalue2").innerHTML="Iron(+)Versus Constantan(-)";
         
      }else if(selecter2==="4"){
        const alphaconstant= document.getElementById("alphavalue2").innerHTML="Iron(+)Versus Constantan(-)";
         
      }
    
}
   
function response2(){
    const selecter=document.getElementById("material2").value ;
    const re=resistanceconstance[selecter].alpha
    const Ratzero2=document.getElementById("ratzero2").value;
    const temper2=document.getElementById("inputtemp2").value;
    const R2=Ratzero2*(1+ re*(temper2 - 0));
    const roundoffR2=R2.toFixed(4);
    const mVinput=document.getElementById("rt2").value;
    var feed2={Rt2:mVinput, temp2:temper2};
         data21.push(feed2.Rt2);

         console.log(data21)

         data22.push(feed2.Rt2);
         console.log(data22)

    var para = document.createElement("h6");
    var node = document.createTextNode("Temp.= "+ feed2.temp2+"," );
     para.appendChild(node);

    var node = document.createTextNode( " Value(mV)= "+ feed2.Rt2);
     para.appendChild(node);

    var element = document.getElementById("div2");
     element.appendChild(para);

     
}





































function reset(){
    document.getElementById("myForm").reset();
    
     
}








