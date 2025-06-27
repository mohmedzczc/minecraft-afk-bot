// afkBot.js
const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Blacko7.aternos.me', // حط هنا عنوان السيرفر بتاعك
    port:    64385,
    username: 'AFK_BOT'
  })

  bot.on('spawn', () => {
    console.log('Bot spawned and is AFK now.')
    bot.setControlState('jump', true) // يتحرك كل شوية
    setInterval(() => {
      bot.chat('/ping') // لو حبيت تبين إنه شغال
    }, 60000)
  })

  bot.on('end', () => {
    console.log('Bot was kicked, reconnecting...')
    setTimeout(createBot, 5000) // يرجع تاني لو اترفد
  })
}

createBot()
