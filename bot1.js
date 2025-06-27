const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'SurvivorTown.aternos.me',
      port: 28617,
    username: 'AFK_BOT_1'
  })

  bot.on('spawn', () => {
    console.log('✅ BOT 1 دخل السيرفر!');

    // يسجل أو يعمل login
    setTimeout(() => {
      bot.chat('/login 41284128'); // أو /register لو أول مرة
    }, 5000); // نستنى 5 ثواني علشان البلجن يشتغل الأول
  })

  bot.on('end', () => {
    console.log('❌ BOT 1 خرج، بيحاول يرجع...');
    setTimeout(createBot, 5000)
  })

  bot.on('error', (err) => {
    console.log('❌ حصل Error:', err.message);
    setTimeout(createBot, 10000)
  })
}

createBot()
