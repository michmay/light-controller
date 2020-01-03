const http = require('request');

console.log("hello")

const request = new Request('http://192.168.0.2/api', {method: 'POST', body: '{"devicetype":"hehe"}'});
 

fetch(request)
  .then(response => {
    if (response.status === 200) {
        console.log(response.json());
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    console.debug(response);
    // ...
  }).catch(error => {
    console.error(error);
  });