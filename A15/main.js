const lightbulb = document.getElementById('lightbulb');
const lightswitch = document.getElementById('lightswitch');
const stsua = document.getElementById('statusOfswitch');

let isLightOn =false;

lightswitch.addEventListener('click' , function() {
    if(isLightOn) {
        lightbulb.src ="lightOff.png"; 
        lightswitch.src = "switchOff.png"
        status.textcontent ="TURN ON THE LIGHT.";
    }else{
        lightbulb.src ="lightOn.png";
        lightswitch.src = "switchOn.png"
        status.textcontent = "you DID IT Now turn OFF the Lights"
    }
    isLightOn = !isLightOn;{

    } 
});