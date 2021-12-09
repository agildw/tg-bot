const { Telegraf } = require('telegraf');
const fs = require('fs');
require('dotenv').config();
const tiktok = require('./tiktok');


const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply('/tiktok tiktok downloader using watermark')
});

bot.command('/tiktok', (ctx) => {
    const getText = ctx.update.message.text.split(' ');
    const tiktokUrl = getText[1];

    tiktok(tiktokUrl)
        .then((response) => {
            // console.log(response.data.aweme_details[0].video.bit_rate[0].play_addr.url_list[2])
            // console.log(response.request.res.responseUrl)

            ctx.replyWithVideo(response.data.aweme_details[0].video.bit_rate[0].play_addr.url_list[2])

        })
        .catch((error) => {
            console.log(error)
        })
})



bot.launch();
console.log('Bot started!')