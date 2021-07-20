const axios = require('axios');

async function makeRequests() {

    let [u1, u2, u3] = await Promise.all([
        axios.get('https://google.com'),
        axios.get('https://yahoo.com'),
        axios.get('https://youtube.com')
    ]);

    console.log(`Google: ${u1.status}`);
    console.log(`Yahoo: ${u2.status}`);
    console.log(`Youtube: ${u3.status}`);
   
}

makeRequests();