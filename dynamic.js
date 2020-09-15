var x="5";

const resistanceconstance=[
    {
        alpha:" 0.00392",
      
    },
    {
        alpha:" 0.0038",
       
    },
    {
        alpha:" 0.00672",
        
    },
    {
        alpha:" 0.0041",
    
    }
]

const data=[];


function change11(){
    const selecter11=document.getElementById("barematerial").value ;

      if(selecter11==="0"){
       const alphaconstant= document.getElementById("baretimeconstant").innerHTML="Time Constant(τ):" + resistanceconstance[0].alpha;
       
      } else if(selecter11==="1"){
        const alphaconstant= document.getElementById("baretimeconstant").innerHTML="Time Constant(τ):"   + resistanceconstance[1].alpha;
         
      } else if(selecter11==="2"){
        const alphaconstant= document.getElementById("baretimeconstant").innerHTML="Time Constant(τ):" + resistanceconstance[2].alpha;
         
      } else if(selecter11==="3"){
        const alphaconstant= document.getElementById("baretimeconstant").innerHTML="Time Constant(τ):" + resistanceconstance[3].alpha;
         
      }
    
}

function change12(){
  const selecter12=document.getElementById("withseaththickness").value ;

  if(selecter12=="0"||selecter12=="1"||selecter12=="2"||selecter12=="3"||selecter12==""){
    const alphaconstant= document.getElementById("withseathtimeconstant").innerHTML="Time Constant(τ):" + "";
    
   }
}

function change13(){
  const selecter13=document.getElementById("thermowellfilling").value ;

  if(selecter13=="0"||selecter13=="1"||selecter13=="2"||selecter13=="3"||selecter13==""){
    const alphaconstant= document.getElementById("thermowelltimeconstant").innerHTML="Time Constant(τ):" + "";
    
   }
}


   
function response(){
    const selecter=document.getElementById("barematerial").value ;
    const re=resistanceconstance[selecter].alpha
    const Ratzero=document.getElementById("ratzero").value;
    const temper=document.getElementById("inputtemp").value;
    const R=Ratzero*(1+ re*(temper - 0));
    const roundoffR=R.toFixed(4);
    document.getElementById("rt").value=roundoffR;
    var feed={Rt:roundoffR, temp:temper};
         data.push(feed);

    var para = document.createElement("h6");
    var node = document.createTextNode("Temp.= "+ feed.temp+"," );
     para.appendChild(node);

    var node = document.createTextNode( " Rt= "+ feed.Rt);
     para.appendChild(node);

    var element = document.getElementById("div1");
     element.appendChild(para);

     
}


// for right exp

const data2=[];


function change21(){
  const selecter=document.getElementById("barematerial2").value ;

    if(selecter=="0"){
     const alphaconstant= document.getElementById("baretimeconstant2").innerHTML="Time Constant(τ):" + resistanceconstance[0].alpha;
     
    } else if(selecter==="1"){
      const alphaconstant= document.getElementById("baretimeconstant2").innerHTML="Time Constant(τ):"   + resistanceconstance[1].alpha;
       
    } else if(selecter==="2"){
      const alphaconstant= document.getElementById("baretimeconstant2").innerHTML="Time Constant(τ):" + resistanceconstance[2].alpha;
       
    } else if(selecter==="3"){
      const alphaconstant= document.getElementById("baretimeconstant2").innerHTML="Time Constant(τ):" + resistanceconstance[3].alpha;
       
    }
  
}

function change22(){
  const selecter=document.getElementById("withseaththickness2").value ;

  if(selecter=="0"||selecter=="1"||selecter=="2"||selecter=="3"||selecter==""){
    const alphaconstant= document.getElementById("withseathtimeconstant2").innerHTML="Time Constant(τ):" + "";
    
   }
}

function change23(){
  const selecter=document.getElementById("thermowellfilling2").value ;

  if(selecter=="0"||selecter=="1"||selecter=="2"||selecter=="3"||selecter==""){
    const alphaconstant= document.getElementById("thermowelltimeconstant2").innerHTML="Time Constant(τ):" + "";
    
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
         data2.push(feed2);

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








