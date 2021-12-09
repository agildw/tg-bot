const { Telegraf } = require('telegraf');
const fs = require('fs');
require('dotenv').config();

const tiktok = require('./tiktok');
const tiktokwm = require('./tiktokwm');

//your bot token
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply('/tiktok tiktok downloader without watermark\n/tiktokwm tiktok downloader with watermark')
});

bot.command('/tiktok', (ctx) => {
    const getText = ctx.update.message.text.split(' ');
    const tiktokUrl = getText[1];

    if (tiktokUrl !== undefined) {
        tiktok(tiktokUrl)
            .then((response) => {
                ctx.replyWithVideo(response.data.aweme_details[0].video.bit_rate[0].play_addr.url_list[2])
            })
            .catch((error) => {
                console.log(error)
            })
    } else {
        ctx.reply('*invalid command*\n/tiktok video_link', { parse_mode: 'MarkdownV2' })
    }

})

bot.command('/tiktokwm', (ctx) => {
    const getText = ctx.update.message.text.split(' ');
    const tiktokUrl = getText[1];

    if (tiktokUrl !== undefined) {
        tiktokwm(tiktokUrl)
            .then((response) => {
                // console.log(response.data.aweme_details[0].video)
                ctx.replyWithVideo(response.data.aweme_details[0].video.download_addr.url_list[0])
            })
            .catch((error) => {
                console.log(error)
            })
    } else {
        ctx.reply('*invalid command*\n/tiktokwm video_link', { parse_mode: 'MarkdownV2' })
    }
})


bot.launch();
console.log('Bot started!')