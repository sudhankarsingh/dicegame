

var name =prompt("enter player name");

document.querySelector(".player1").textContent=name;

document.querySelector(".roll").addEventListener("click",function(){
    var random1=Math.random()*6;


    random1=Math.floor(random1)+1;
    var img1="images/"+"dice"+random1+".png";
    document.querySelector(".img1").setAttribute("src",img1);
    
    
    var random2=Math.random()*6;
    random2=Math.floor(random2)+1;
    var img2="images/"+"dice"+random2+".png";
    document.querySelector(".img2").setAttribute("src",img2);
    
    document.querySelector("h1").style.fontSize="3rem";
    
    if(random1===random2){
         document.querySelector("h1").textContent="ohhh!!!   it's a tie😲😲";
    }else if(random2>random1){
          document.querySelector("h1").textContent="COMPUTER  !!won  💻💻💻";
    }else{
        document.querySelector("h1").textContent=(name+"   won 🤩🤩🤩");
    }
});