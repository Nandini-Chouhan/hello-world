const axios = require('axios');

async function makeRequests() {

    let [u1, u2] = await Promise.all([
        axios.get('https://google.com'),
        axios.get('https://yahoo.com')
    ]);

    console.log(`Yahoo: ${u2.status}`);
    console.log(`Google: ${u1.status}`);
   
}

makeRequests();