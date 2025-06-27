const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Blacko7.aternos.me', // ✏️ غيّر ده لاسم السيرفر بتاعك
    port: 64385,
    username: 'AFK_BOT_1'
  });

  bot.on('spawn', () => {
    console.log('✅ BOT دخل السيرفر بدون تسجيل!');

    // يتحرك للأمام كل 15 ثانية
    setInterval(() => {
      bot.setControlState('forward', true);
      setTimeout(() => {
        bot.setControlState('forward', false);
      }, 1000);
    }, 15000);

    // يقفز كل دقيقة
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => {
        bot.setControlState('jump', false);
      }, 500);
    }, 60000);
  });

  bot.on('end', () => {
    console.log('❌ BOT خرج، بيحاول يرجع...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => {
    console.log('❌ Error:', err.message);
    setTimeout(createBot, 10000);
  });
}

createBot();
