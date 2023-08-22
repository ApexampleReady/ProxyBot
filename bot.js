const mineflayer = require('mineflayer')

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function addBot(){
    var username = 'Nieczlowiek' + getRandomInt(1, 1000)
    console.log(username)
    const bot = mineflayer.createBot({
    host: 'mfs1', // minecraft server ip
    username: username,// minecraft username
    auth: 'offline', // for offline mode servers, you can set this to 'offline',
    uuid: '208d4fefb3684e48b121aa981b9b8be8', // optional for online servers
    port: 25577         // only set if you need a port that isn't 25565
    // version: false,             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
    // password: '12345678'        // set if you want to use password-based auth (may be unreliable)
    })

    bot.on('chat', (username, message) => {
    if (username === bot.username) return
    bot.chat(message)
    })

    // Log errors and kick reasons:
    bot.on('kicked', console.log)
    bot.on('error', console.log)
}
addBot(1)

const intervalId = setInterval(() => addBot(), 1500);

// for (let index = 0; index < 1000; index++) {
//     // Using an IIFE to pass the correct value of i to the addBot function
//     (function (index) {
//         setTimeout(() => addBot(index), 1500 * index); // Delay each bot creation by 1 second
//     })(index);
// }

