const request = require('request');


const options = {
    url: 'http://192.168.0.2/api',
    method: 'POST',
    headers: {
        'Accept': 'application/json',
    },
    body: {"devicetype":"hehe"}
};

request(options, function(err, res, body) {
    let json = JSON.parse(body);
    console.log(json);
});