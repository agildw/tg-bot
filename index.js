const { Telegraf } = require('telegraf');
const fs = require('fs');
require('dotenv').config();

const tiktok = require('./tiktok')

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => {
    ctx.reply('/tiktok tiktok downloader using watermark')
});




bot.launch();
console.log('Bot started!')