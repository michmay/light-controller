var url = "http://192.168.0.2/api/ZBmlmu00Kpy23xBCjtLQCCinBYJaqjeULVNEWAmB/lights/1/state"
const roomName = document.getElementById("room-name")

const switchURL = () => {
    var switcher = document.getElementById("room-switch").checked

    if(switcher){
        console.log("checkbox is true");
        url = "http://192.168.0.2/api/ZBmlmu00Kpy23xBCjtLQCCinBYJaqjeULVNEWAmB/lights/2/state";
        roomName.textContent = "BEDROOM";

    }
    else {
        url = "http://192.168.0.2/api/ZBmlmu00Kpy23xBCjtLQCCinBYJaqjeULVNEWAmB/lights/1/state"
        roomName.textContent = "LIVING";
    }
}

function sendPut(url, payload) {

    var params = {
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(payload),
        method:"PUT"}
    fetch(url, params)
    .then(data=>{console.log(data)})
    .catch(error=>console.log(error))


}

function turnLightOff() {
    
    var payload = {on:false};
    sendPut(url, payload);
}

function turnLightOn() {

    var payload = {
        on:true,
        bri:255
    };
    sendPut(url, payload);
}

function dimLight() {
    var payload = {
        on:true,
        bri:100
    };
    sendPut(url, payload);

}

function setBrightness(brightness) {
    var brightness = parseInt(brightness)
    var payload = {
        on:true,
        bri:brightness
    };
    sendPut(url, payload);

    var opacity = Math.max(Math.floor(brightness/255*100), 10)
    console.log("opacity is " + opacity)
    slider.setAttribute('style', 'opacity: ' + opacity + '%')
}

var slider = document.getElementById("myRange");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    console.log(this.value);
    setBrightness(this.value);

    
}

setBrightness(50);