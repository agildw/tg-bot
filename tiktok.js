const axios = require('axios');


module.exports = function tiktok(url) {
    const config = {
        url: 'https://masgimenz.my.id/tiktok/',
        method: 'GET',
        params: {
            url: url
        }
    }

    return new Promise((resolve, reject) => {
        axios(config)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
    })
}