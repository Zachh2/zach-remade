module.exports = function() {

async function BroadCast() {

    try {

        var logger = require('./logger');

            var axios = require('axios');

                var { data } =  await axios.get("https://raw.githubusercontent.com/Anupx0/Anupbot/main/FCA-ANUP.json");

            var random = await data[Math.floor(Math.random() * data.length)] || "Thank You For Using Zach Fca Remade";

        logger(random, "[ ZACH - REMADE ]");

    }	

    catch (e) {

        console.log(e);

        return;

    }

}

setInterval(async function () { await BroadCast() },1800 * 1000);

BroadCast();



}
