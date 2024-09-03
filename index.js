function toggleBulb(){
    const bulbImg = document.getElementById("bulb");
    const buttonImg = document.getElementById("switchButton");
    const textContent = document.getElementById("status");

    if(bulbImg.src.includes("bulb-off.jpg")){
        bulbImg.src = "bulb-on.jpg";
        buttonImg.textContent = "Turn Off";
        textContent.textContent = "The bulb is currently on"
    }else{
        bulbImg.src = "bulb-off.jpg";
        buttonImg.textContent = "Turn On";
        textContent.textContent = "The bulb is currently off"
    }
}