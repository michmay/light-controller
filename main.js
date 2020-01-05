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
}

var slider = document.getElementById("myRange");

// Update the current slider value (each time you drag the slider handle)
slider.onmouseup = function() {
    console.log(this.value);
    setBrightness(this.value);  
}

slider.oninput = function() {

    var brightness = this.value;
    var opacity = Math.max(Math.floor(brightness/255*100), 10)
    console.log("opacity is " + opacity)
    slider.setAttribute('style', 'opacity: ' + opacity + '%')
}



bedroom_light = document.getElementById("light-icon-bedroom")
console.log(bedroom_light)


bedroom_light.onclick = () => {
    console.log("BR circle clicked!")
    document.getElementById("room-switch").checked = true;
    
    // Switches the current selected light
    setLights();

    livingroom_light_bkgrnd = document.getElementById("light-bkg-livingroom")
    livingroom_light_bkgrnd.setAttribute('style', "fill: #b8b6b6")

    bedroom_light_bkgrnd = document.getElementById("light-bkg-bedroom")
    bedroom_light_bkgrnd.setAttribute('style', "fill: #2196F3")
}


livingroom_light = document.getElementById("light-icon-livingroom")
console.log(livingroom_light)


livingroom_light.onclick = () => {
    console.log("LR circle clicked!")
    document.getElementById("room-switch").checked = false;
    
    // Switches the current selected light
    setLights();

    bedroom_light_bkgrnd = document.getElementById("light-bkg-bedroom")
    bedroom_light_bkgrnd.setAttribute('style', "fill: #b8b6b6")

    livingroom_light_bkgrnd = document.getElementById("light-bkg-livingroom")
    livingroom_light_bkgrnd.setAttribute('style', "fill: #2196F3")
}




setBrightness(50);