const roomName = document.getElementById("room-name");

var url_prefix = "http://192.168.0.2/api/ZBmlmu00Kpy23xBCjtLQCCinBYJaqjeULVNEWAmB/lights/"
var url_postfix = "/state"

var lights = [1];

function makeURL(light) {

    return url_prefix + light.toString() + url_postfix; 
}

document.onkeypress = (e) => {
    if (e.code = "Space"){
        document.getElementById("room-switch").toggle
    }
} 

const setLights = () => {
    var switcher = document.getElementById("room-switch").checked


    if(switcher){
        lights = [2,3]
        roomName.textContent = "BEDROOM";

    }
    else {
        lights = [1]
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
    lights.forEach((light)=>{
        url = makeURL(light);
        console.log(url);
        console.log(payload);
        sendPut(url, payload);
        }
    );
}

function turnLightOn() {
    
    var payload = {
        on:true,
        bri:255
    };
    lights.forEach((light)=>{
        url = makeURL(light);
        sendPut(url, payload);
        }
    );
    
}

function dimLight() {
    var payload = {
        on:true,
        bri:100
    };
    lights.forEach((light)=>{
        url = makeURL(light);
        sendPut(url, payload);
        }
    );

}

function setBrightness(brightness) {
    var brightness = parseInt(brightness)
    var payload = {
        on:true,
        bri:brightness
    };
    lights.forEach((light)=>{
        url = makeURL(light);
        sendPut(url, payload);
        }
    );

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