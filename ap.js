function toBlink(){
  let titleBlink = document.getElementById("blink");
    if (titleBlink.style.visibility=="hidden"){
      titleBlink.style.visibility="visible";
    }else{
      titleBlink.style.visibility="hidden";
    }
  
}

window.setInterval(toBlink,900);


let adminMain;
let nameUser;
nameUser = "Jon";
adminMain = nameUser;
alert(adminMain);
