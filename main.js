var url = "http://192.168.0.2/api/ZBmlmu00Kpy23xBCjtLQCCinBYJaqjeULVNEWAmB/lights/1/state"

const switchURL = () => {
    var switcher = document.getElementById("room-switch").checked

    if(switcher){
        console.log("checkbox is true")
        url = "http://192.168.0.2/api/ZBmlmu00Kpy23xBCjtLQCCinBYJaqjeULVNEWAmB/lights/2/state"
    }
    else {
        url = "http://192.168.0.2/api/ZBmlmu00Kpy23xBCjtLQCCinBYJaqjeULVNEWAmB/lights/1/state"
    }
}


function turnLightOff() {
    
    var params = {
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({on:false}),
        method:"PUT"}
    fetch(url, params)
    .then(data=>{console.log(data)})
    .catch(error=>console.log(error))
}

function turnLightOn() {
    var params = {
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({
            on:true,
            bri:255
        }),
        method:"PUT"}
    fetch(url, params)
    .then(data=>{console.log("haha")})
    .catch(error=>console.log(error))
}

function dimLight() {
    var params = {
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({
            on:true,
            bri:100
        }),
        method:"PUT"}
    fetch(url, params)
    .then(data=>{console.log("haha")})
    .catch(error=>console.log(error))
}

function setBrightness(brightness) {
    var brightness = parseInt(brightness)
    var params = {
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({
            on:true,
            bri:brightness
        }),
        method:"PUT"}
    fetch(url, params)
    .then(data=>{console.log("haha")})
    .catch(error=>console.log(error))

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