const axios = require('axios');

async function makeRequest() {

    const config = {
        method: 'get',
        url: 'http://google.com'
    }

    let res = await axios(config)

    console.log(res.status);
}

makeRequest();