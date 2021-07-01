// JavaScript

// Cog functionality
document.querySelector(".style-switcher").addEventListener("click", function(){
  document.querySelector(".mode-switcher").classList.toggle("open");
});

//Light-Dark switch
const bodySkin = document.querySelectorAll(".body-skin"),
    totalBodySkin = bodySkin.length;
    for(let i = 0; i<totalBodySkin; i++){
      bodySkin[i].addEventListener("change",function(){
        if(this.value === "dark"){
          document.body.className="dark";
        }
        else{
          document.body.className="light";
        }
      });
    };
