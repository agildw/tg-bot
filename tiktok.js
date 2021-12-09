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
    // axios(config)
    //     .then((response) => {
    //         // console.log(response.data.aweme_details[0].video.bit_rate[0].play_addr.url_list[2])
    //         let downloadLink = response.data.aweme_details[0].video.bit_rate[0].play_addr.url_list[2]
    //         console.log(downloadLink)
    //         return downloadLink
    //     })
    //     .catch((error) => {
    //         // console.log(error.message)
    //     })
}