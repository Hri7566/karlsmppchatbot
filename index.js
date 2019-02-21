// Import Client.js
const MPPClient = require("./client.js");

// Creation of the bot that will connect to MPP
client = new MPPClient('ws://multiplayerpiano.com', undefined);

// Start of the bot
client.start();

// When the bot is connected...
client.on("hi", () => {
    // Log a message in the console
    console.log("Online");

    // Go into a channel
    var home = " Karl's room";
    client.setChannel("Karl's Room");

    // Showing that the bot is ready
    setTimeout(() => {
        client.sendArray([{ m:'userset', set:{name:"Ṃᾄʀẋ☭Bot ❤"} }]);
        client.sendArray([{ m:'a', message:"Connected" }]);
    }, 100)
});
// Start of bot

var lock = false;

if (Object.keys(client.ppl).length > 20) {
    sendchat("Exceded 20 users, room is locked.");
    lock = true;
};

function kickban(id, ms) {
    MPP.client.sendArray([{m: "kickban", _id: id, ms: ms}]);
};

// Error catch
var fs = require('fs');
 fs.writeFile("Index.js", "TEST", function(err) {
      if(err) {
           return console.log(err);
         } console.log("The file was saved!");
    });



// I'll just add a random comment
client.on("a", (msg) => {
    if(msg.a.toLowerCase() == "ping"){
        client.sendArray([{ m:'a', message:"pooooong" }]);
    }
});



// Uptime
String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
}

// Math.js
const Math = require('mathjs')



// Karl's Project
// ==UserScript==
// @name         Chatbot Main
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Chat Bot
// @author       ✿🌿❤ ๖ۣۜḰᾄʀł☭Ṃᾄʀẋ ❤🌾✿
// @match        http://www.multiplayerpiano.com/*
// @match        http://ourworldofpixels.com/piano/*
// @grant        none
// ==/UserScript==
function sendchat(string){
    client.sendArray([{ m:'a', message:string }]);
}


var Kings = [client.getOwnParticipant()._id,
    "0236f354fc5685c5bd18f152", // Karl Marx
    "470ba9eaa66583fb5ee24f67" // hri
]

var Nobles = [
    "f5d6d1fe98b1b415b15890cb", // Pg
    "4095db71ba743d3e3da00f4a", // Karma 
    "94ad18f384333e29978e33e4" // Charly
]

var Knights = [

]

var blacklist = [
]

var chatbot = true;

function removeFromArray(array, value) {
    var idx = array.indexOf(value);
    if (idx !== -1) {
        array.splice(idx, 1);
    }
    return array;
}
function getPart(boop) {
    for (const id in client.ppl) {
        let part = client.ppl[id];
        if (part.name.toLowerCase().indexOf(boop.toLowerCase()) !== -1) {
            return part;
            break;
        }
    }
}
client.on('a', msg => {
    let args = msg.a.split(' ');
    let cmd = args[0].toLowerCase();
    let argcat = msg.a.substring(cmd.length).trim();
    let part = getPart(argcat);
    var isKing = (Kings.indexOf(msg.p._id) !== -1);
    var isNoble = (Nobles.indexOf(msg.p._id) !== -1);
    var isKnight = (Knights.indexOf(msg.p._id) !== -1);
    var isBlocked = (blacklist.indexOf(msg.p._id) !== -1);
    // bot toggle
    if (cmd == "/chatbot") {
        if (isKing) {
            if (chatbot == true) {
                chatbot = false
                sendchat("The chat-bot is now off");
            } else if (chatbot == false) {
                chatbot = true
                sendchat("The chat-bot is now on.");
            }
        }
    } else if (cmd == "/goto") {
        if (isKing) {
            sendchat("Moving to room: \"" + argcat + "\"");
            client.setChannel(argcat);
            home = argcat;
        } else {
            sendchat("You can't use this command. Use /rank for more information.");
        }
    } else if (cmd == "/getcrown") {
        if (isKing) {
            if (client.isOwner()) {
                sendchat("Giving ownership to " + msg.p.name);
                client.sendArray([{ m: "chown", id: msg.p.id }]);
            } else {
                sendchat("I don't have the crown.");
            }
        } else {
            sendchat("You can't use this command. Use/rank for more information");
        }
    } else if (cmd == '/kings+') { // add id to Kings
        if (isKing) {
            var id2Kings = args[1];
            Kings.push(id2Kings);
            sendchat("Kinged _id: " + id2Kings);
        }
    } else if (cmd == '/kings-') { // remove id from Kings
        if (isKing) {
            var id2unKings = args[1];
            removeFromArray(Kings, id2unKings);
            sendchat("Un-Kings _id: " + id2unKings);
        }
    } else if (cmd == '/nobles+') { // add id to Nobles
        if (isKing) {
            var id2Nobles = args[1];
            Nobles.push(id2Nobles);
            sendchat("Nobled _id: " + id2Nobles);
        }
    } else if (cmd == '/nobles-') { // remove id from Nobles
        if (isKing) {
            var id2unNobles = args[1];
            removeFromArray(Kings, id2unNobles);
            sendchat("Un-Noble _id: " + id2unNobles);
        }
    } else if (cmd == '/knights+') { // add id to Knights
        if (isKing) {
            var id2Knights = args[1];
            Knights.push(id2Knights);
            sendchat("Knighted _id: " + id2Knights);
        }
    } else if (cmd == '/knights-') { // remove id from Knights
        if (isKing) {
            var id2unKnights = args[1];
            removeFromArray(Knights, id2unKnights);
            sendchat("Un-Knighted _id: " + id2unKnights);
        }
    } else if (cmd == '/blist+') { // add id to Knights
        if (isKing) {
            var id2Blacklist = args[1];
            blacklist.push(id2Blacklist);
            sendchat("Command blocked _id: " + id2Blacklist);
        }
    } else if (cmd == '/blist-') { // remove id from Knights
        if (isKing) {
            var id2unBlacklist = args[1];
            removeFromArray(blacklist, id2unBlacklist);
            sendchat("Un-blocked _id: " + id2Blacklist);
        }
    } else if (chatbot == true) {
        if (!isBlocked) {
            // Help, art list, and info
            if (cmd == "/help") {
                if (isKing) {
                    sendchat("Commands are listed to fit your rank. Use /rank to learn more. Commands: /help | /test | /about | /rip | /quote | /test | /fact | /loss | /eat | /tickle | /roast | /kill | /stab | /hug | /shoot | /slap | /cuddle | /rape | /friendzone | /fight | /rps | /poke | /rank | /art | /math | /clearchat | /boom | /kickban | /wave | /chatbot | /goto | /getcrown");
                } else if (isNoble) {
                    sendchat("Commands are listed to fit your rank. Use /rank to learn more. Commands: /help | /test | /about | /rip | /quote | /test | /fact | /loss | /eat | /tickle | /roast | /kill | /stab | /hug | /shoot | /slap | /cuddle | /rape | /friendzone | /fight | /rps | /poke | /rank | /art | /math | /clearchat | /boom | /kickban | /wave ");
                } else if (isKnight) {
                    sendchat("Commands are listed to fit your rank. Use /rank to learn more. Commands: /help | /test | /about | /rip | /quote | /test | /fact | /loss | /eat | /tickle | /roast | /kill | /stab | /hug | /shoot | /slap | /cuddle | /rape | /friendzone | /fight | /rps | /poke | /rank | /art | /math ");
                } else {
                    sendchat("Commands are listed to fit your rank. Use /rank to learn more. Commands: /help | /test | /about | /rip | /quote | /test | /fact | /loss | /eat | /tickle | /roast | /kill | /stab | /hug | /shoot | /slap | /cuddle | /rape | /friendzone | /fight | /rps | /poke | /rank | /art. | /math ");
                }
            } else if (cmd == "/art") {
                if (isKing) {
                    sendchat("Lennys: /lenny | /guns | /bear2 | /army | /hug2 | /magic | /sneak | /table | /table2 | /hearteyes | /trump | /butterfly | /wink | /blush | /smile | /smile2 | /smile3 | /smile4 | /dance || Small Art: /piano | /hateme | /sunglasses | /tank | /bear | /cat | /gun | /music");
                    sendchat("|| Large Arts (Crown needed): /scream | /fuckmyass | /home |, /largelenny | /pinkiepie | /rarity | /applejack | /fluttershy | /rainbowdash | /twilightsparkle (down for fixing) | /rose | /dinkaleberg | /pikachu | /cat2 | /shibe | /butterfly2 | /elk | /mario.");
                } else if (isNoble) {
                    sendchat("Lennys: /lenny | /guns | /bear2 | /army | /hug2 | /magic | /sneak | /table | /table2 | /hearteyes | /trump | /butterfly | /wink | /blush | /smile | /smile2 | /smile3 | /smile4 | /dance || Small Art: /piano | /hateme | /sunglasses | /tank | /bear | /cat | /gun | /music");
                    sendchat("|| Large Arts (Crown needed): /scream | /fuckmyass | /home |, /largelenny | /pinkiepie | /rarity | /applejack | /fluttershy | /rainbowdash | /twilightsparkle (down for fixing) | /rose | /dinkaleberg | /pikachu | /cat2 | /shibe | /butterfly2 | /elk | /mario.");
                } else if (isKnight) {
                    sendchat("Lennys: /lenny | /guns | /bear2 | /army | /hug2 | /magic | /sneak | /table | /table2 | /hearteyes | /trump | /butterfly | /wink | /blush | /smile | /smile2 | /smile3 | /smile4 | /dance || Small Art: /piano | /hateme | /sunglasses | /tank | /bear | /cat | /gun | /music");
                } else {
                    sendchat("Lennys: /lenny | /guns | /bear2 | /army | /hug2 | /magic | /sneak | /table | /table2 | /hearteyes | /trump | /butterfly | /wink | /blush | /smile | /smile2 | /smile3 | /smile4 | /dance");
                }
            } else if (cmd == "/rank") {
                if (isKing) {
                    sendchat("Ranks are classed into three types, Kings, Nobles, Knights, and Peasants. King being the highest with all commands, and peasants being the lowest with only basic commands. " + msg.p.name + ", your rank is King.")
                } else if (isNoble) {
                    sendchat("Ranks are classed into three types, Kings, Nobles, Knights, and Peasants. King being the highest with all commands, and peasants being the lowest with only basic commands. " + msg.p.name + ", your rank is Noble.")
                } else if (isKnight) {
                    sendchat("Ranks are classed into three types, Kings, Nobles, Knights, and Peasants. King being the highest with all commands, and peasants being the lowest with only basic commands. " + msg.p.name + ", your rank is  Knight.")
                } else {
                    sendchat("Ranks are classed into three types, Kings, Nobles, Knights, and Peasants. King being the highest with all commands, and peasants being the lowest with only basic commands. " + msg.p.name + ", your rank is Peasants.")
                }
                //command [user] stuff
            } else if (cmd == "/eat") {
                try {
                    if (!argcat || part._id == msg.p._id) {
                        sendchat(msg.p.name+ " eats " + FoodArray[Math.floor(Math.random()*FoodArray.length)] + ". It " + TasteArray[Math.floor(Math.random()*TasteArray.length)] + ".");
                    } else if (part) {
                        sendchat(msg.p.name+' cannibalizes '+ client.ppl[part.id].name + '. It '  + TasteArray[Math.floor(Math.random()*TasteArray.length)] + ".");
                    }
                } catch (e) {
                    sendchat(msg.p.name + " ate '"+argcat+"'.  It " + TasteArray[Math.floor(Math.random()*TasteArray.length)] + ".");
                }
            } else if (cmd == "/tickle") {
                try {
                    if (!argcat || part._id == msg.p._id) {
                        sendchat(msg.p.name+ " tickles themself to try and find some joy in their lonely life.");
                    } else if (part) {
                        sendchat(msg.p.name+' tickles '+ client.ppl[part.id].name + '.  They laugh uncontrolably.');
                    }
                } catch (e) {
                    sendchat("The user '"+argcat+"' was not found.  Try using part of their username.");
                }
            } else if (cmd == "/poke") {
                try {
                    if (!argcat || part._id == msg.p._id) {
                        sendchat(msg.p.name+ ", don't poke yourself there, nasty.");
                    } else if (part) {
                        sendchat(msg.p.name+' pokes '+ client.ppl[part.id].name+' in the ' +pokearray[Math.floor(Math.random()*pokearray.length)]);
                    }
                } catch (e) {
                    sendchat("The user '"+argcat+"' was not found.  Try using part of their username.");
                }
            } else if (cmd == "/rps") {
                try {
                    if (!argcat || part._id == msg.p._id) {
                        sendchat(msg.p.name+ " plays rock paper sissors alone.");
                    } else if (part) {
                        sendchat(msg.p.name+': '+rps[Math.floor(Math.random()*rps.length)]+' '+ client.ppl[part.id].name+':' +rps[Math.floor(Math.random()*rps.length)]);
                    }
                } catch (e) {
                    sendchat("The user '"+argcat+"' was not found.  Try using part of their username.");
                }
            } else if (cmd == "/fight") {
                try {
                    if (!argcat || part._id == msg.p._id) {
                        sendchat(msg.p.name+ " said \"Why are you hitting yourself? Why are you hitting yourself? Why are you hitting yourself? Why am I hitting myself?\"");
                    } else if (part) {
                        sendchat(msg.p.name+' got in to a fight with '+ client.ppl[part.id].name+' *Ding Ding Ding* Match over! ' +msg.p.name +' has ' +fights[Math.floor(Math.random()*fights.length)] );
                    }
                } catch (e) {
                    sendchat("The user '"+argcat+"' was not found.  Try using part of their username.");
                }
            } else if (cmd == "/hug") {
                try {
                    if (!argcat || part._id == msg.p._id) {
                        sendchat(msg.p.name+ " gives themself a hug, how lonely.");
                    } else if (part) {
                        sendchat(msg.p.name+' Gives '+ client.ppl[part.id].name+' a big hug. '+ client.ppl[part.id].name +': Help me');
                    }
                } catch (e) {
                    sendchat("The user '"+argcat+"' was not found.  Try using part of their username.");
                }
            } else if (cmd == "/kill") {
                try {
                    if (!argcat || part._id == msg.p._id) {
                        sendchat(' In the ancient ritual of seppuku, ' + msg.p.name + ' unsheaths their sword and runs it though their stomach.');
                    } else if (part) {
                        sendchat(msg.p.name + ' kills '+ client.ppl[part.id].name+' with ' + kills[Math.floor(Math.random()*kills.length)] +'. How? Who knows.');
                    }
                } catch (e) {
                    sendchat("The user '"+argcat+"' was not found.  Try using part of their username.");
                }
            } else if (cmd == "/kiss") {
                try {
                    if (!argcat || part._id == msg.p._id) {
                        sendchat(msg.p.name + ' picks up a photo of themself wearing a full body red leotard.  They kiss it softly.');
                    } else if (part) {
                        sendchat(msg.p.name + ' gives ' + client.ppl[part.id].name + ' a sloppy kiss.');
                    }
                } catch (e) {
                    sendchat("The user '"+argcat+"' was not found.  Try using part of their username.");
                }
            } else if (cmd == "/roast") {
                try {
                    if (!argcat || part._id == msg.p._id) {
                        sendchat(msg.p.name + ' looks though a list of insecurities that they will use to roast themself. ');
                    } else if (part) {
                        sendchat(msg.p.name + ' places ' + client.ppl[part.id].name + ' over a low burning flame');
                    }
                } catch (e) {
                    sendchat("The user '"+argcat+"' was not found.  Try using part of their username.");
                }
            } else if (cmd == "/stab") {
                try {
                    if (!argcat || part._id == msg.p._id) {
                        sendchat(msg.p.name + ' Takes a knife and thows it at a wall.  It bounces back and takes out their left eye.');
                    } else if (part) {
                        sendchat(msg.p.name + ' Takes a ' + knifes[Math.floor(Math.random()*knifes.length)] +' and stabs ' + client.ppl[part.id].name);
                    }
                } catch (e) {
                    sendchat("The user '"+argcat+"' was not found.  Try using part of their username.");
                }
            } else if (cmd == "/rip") {
                try {
                    if (!argcat || part._id == msg.p._id) {
                        sendchat('Rest in peace ' + msg.p.name + '.  They will be missed.');
                    } else if (part) {
                        sendchat('Rest is peace ' + client.ppl[part.id].name + '.  They will be missed.  From ' + msg.p.name);
                    }
                } catch (e) {
                    sendchat("The user '"+argcat+"' was not found.  Try using part of their username.");
                }
            } else if (cmd == "/shoot") {
                try {
                    if (!argcat || part._id == msg.p._id) {
                        sendchat(msg.p.name+ ' shot themself in the head because '+sreason[Math.floor(Math.random()*sreason.length)]+'.');
                    } else if (part) {
                        sendchat(msg.p.name+' shoots '+ client.ppl[part.id].name+' because '+ureason[Math.floor(Math.random()*ureason.length)]+'.');
                    }
                } catch (e) {
                    sendchat("The user '"+argcat+"' was not found.  Try using part of their username.");
                }
            } else if (cmd == "/slap") {
                try {
                    if (!argcat || part._id == msg.p._id) {
                        sendchat(msg.p.name+ ' slaps themself with a '+slapitem[Math.floor(Math.random()*slapitem.length)]+'.');
                    } else if (part) {
                        sendchat(msg.p.name+' slaps '+ client.ppl[part.id].name+' across the face with a '+slapitem[Math.floor(Math.random()*slapitem.length)]+'.');
                    }
                } catch (e) {
                    sendchat("The user '"+argcat+"' was not found.  Try using part of their username.");
                }
            } else if (cmd == "/cuddle") {
                try {
                    if (!argcat || part._id == msg.p._id) {
                        sendchat(msg.p.name + ' cuddles with their body pillow.');
                    } else if (part) {
                        sendchat(msg.p.name + ' cuddles with ' + client.ppl[part.id].name + '. They love it too.');
                    }
                } catch (e) {
                    sendchat("The user '"+argcat+"' was not found.  Try using part of their username.");
                }
            } else if (cmd == "/rape") {
                try {
                    if (!argcat || part._id == msg.p._id) {
                        sendchat(msg.p.name + ' has become a victim of self-rape, aka. Masterbaiting.');
                    } else if (part) {
                        sendchat(msg.p.name + ' rapes ' + client.ppl[part.id].name + '.  They enjoy it, but ' +msg.p.name+' was crying, so still rape.');
                    }
                } catch (e) {
                    sendchat("The user '"+argcat+"' was not found.  Try using part of their username.");
                }
            } else if (cmd == "/friendzone") {
                try {
                    if (!argcat || part._id == msg.p._id) {
                        sendchat(msg.p.name + ' friendzoned themself, how did it come to this.');
                    } else if (part) {
                        sendchat(msg.p.name + ' friendzones ' + client.ppl[part.id].name + '.  They will cry for days on end.');
                    }
                } catch (e) {
                    sendchat("The user '"+argcat+"' was not found.  Try using part of their username.");
                }
                // Lennys
            } else if (cmd == '/lenny') {
                sendchat('( ͡° ͜ʖ ͡°)');
            } else if (cmd == '/guns') {
                sendchat('̿̿ ̿̿ ̿̿ ̿\'̿\'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿');
            } else if (cmd == '/bear2') {
                sendchat('ʕ•ᴥ•ʔ');
            } else if (cmd == '/army') {
                sendchat('( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)');
            } else if (cmd == '/hug2') {
                sendchat('(づ｡◕‿‿◕｡)づ');
            } else if (cmd == '/magic') {
                sendchat('(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕��)');
            } else if (cmd == '/sneak') {
                sendchat('┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴');
            } else if (cmd == '/table') {
                sendchat('(ノಠ益ಠ)ノ彡┻━┻');
            } else if (cmd == '/hearteyes') {
                sendchat('♥‿♥');
            } else if (cmd == '/table2') {
                sendchat('┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻');
            } else if (cmd == '/smile') {
                sendchat('｡◕‿‿◕｡');
            } else if (cmd == '/smile2') {
                sendchat('｡◕‿◕｡');
            } else if (cmd == '/trump') {
                sendchat('ლ,ᔑ•ﺪ͟͠•ᔐ.ლ');
            } else if (cmd == '/butterfly') {
                sendchat('Ƹ̵̡Ӝ̵̨̄Ʒ');
            } else if (cmd == '/wink') {
                sendchat('ಠ‿↼');
            } else if (cmd == '/blush') {
                sendchat('(▰˘◡˘▰)');
            } else if (cmd == '/smile3') {
                sendchat('^̮^');
            } else if (cmd == '/smile4') {
                sendchat('(ᵔᴥᵔ)');
            } else if (cmd == '/dance') {
                sendchat('(づ￣ ³￣)づ');
                // small chat art
            } else if (cmd ==  '/bear') {
                if (isKnight == true || isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        sendchat('\u2500\u2500\u2500\u2584\u2580\u2580\u2580\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2580\u2580\u2580\u2584\u2500\u2500\u2500');
                        sendchat('\u2500\u2500\u2500\u2588\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2592\u2588\u2500\u2500\u2500');
                        sendchat('\u2500\u2500\u2500\u2500\u2588\u2591\u2591\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2591\u2591\u2588\u2500\u2500\u2500\u2500');
                        sendchat('\u2500\u2584\u2584\u2500\u2500\u2588\u2591\u2591\u2591\u2580\u2588\u2580\u2591\u2591\u2591\u2588\u2500\u2500\u2584\u2584\u2500');
                        sendchat('\u2588\u2591\u2591\u2588\u2500\u2580\u2584\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2584\u2580\u2500\u2588\u2591\u2591\u2588');
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd ==  '/tank') {
                if (isKnight == true || isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        sendchat('\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588 ]\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2583 ');
                        sendchat('\u2582\u2584\u2585\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2585\u2584\u2583\u2582 ');
                        sendchat('I\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588].');
                        sendchat('\u25E5\u2299\u25B2\u2299\u25B2\u2299\u25B2\u2299\u25B2\u2299\u25B2\u2299\u25B2\u2299\u25E4 ');
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd ==  '/sunglasses') {
                if (isKnight == true || isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        sendchat('\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584');
                        sendchat('\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2580\u2588\u2584\u2580\u2584\u2580\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2580\u2588\u2584\u2580\u2584\u2580\u2588\u2588\u2588\u2588\u2588\u2588  ');
                        sendchat('\u2591\u2591\u2591\u2591 \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2580\u2588\u2584\u2588\u2584\u2588\u2588\u2588\u2580\u2591\u2591\u2591 \u2580\u2588\u2584\u2588\u2584\u2588\u2588\u2588');
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd ==  '/hateme') {
                if (isKnight == true || isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        sendchat('\u2554\u2557');
                        sendchat('\u2551\u255A\u2566\u2550\u2563\u255A\u2566\u2550\u2557\u2554\u2550\u2550\u2566\u2550\u2557');
                        sendchat('\u2551\u2551\u2551\u256C\u2551\u2554\u2563\u2569\u2563\u2551\u2551\u2551\u2551\u2569\u2563');
                        sendchat('\u255A\u2569\u2569\u2569\u2569\u2550\u2569\u2550\u255D\u255A\u2569\u2569\u2569\u2550\u255D');
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd ==  '/piano') {
                if (isKnight == true || isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        sendchat('\u2551\u2591\u2588\u2591\u2588\u2591\u2551\u2591\u2588\u2591\u2588\u2591\u2588\u2591\u2551\u2591\u2588\u2591\u2588\u2591\u2551');
                        sendchat('\u2551\u2591\u2588\u2591\u2588\u2591\u2551\u2591\u2588\u2591\u2588\u2591\u2588\u2591\u2551\u2591\u2588\u2591\u2588\u2591\u2551');
                        sendchat('\u2551\u2591\u2551\u2591\u2551\u2591\u2551\u2591\u2551\u2591\u2551\u2591\u2551\u2591\u2551\u2591\u2551\u2591\u2551\u2591\u2551');
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd == '/artlist') {
                if (isKnight == true || isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        sendchat('Type for text art: /piano, /hateme, /sunglasses, /tank, /bear, /cat, /gun, /music');
                        sendchat('Type for text art, input need: /love');
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd ==  '/cat') {
                if (isKnight == true || isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        sendchat('\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2584\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2584');
                        sendchat('\u2500\u2500\u2500\u2500\u2500\u2584\u2588\u2591\u2591\u2580\u2580\u2580\u2580\u2580\u2591\u2591\u2588\u2584');
                        sendchat('\u2500\u2584\u2584\u2500\u2500\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2500\u2500\u2584\u2584');
                        sendchat('\u2588\u2584\u2584\u2588\u2500\u2588\u2591\u2591\u2580\u2591\u2591\u252C\u2591\u2591\u2580\u2591\u2591\u2588\u2500\u2588\u2584\u2584\u2588');
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else  if (cmd ==  '/gun') {
                if (isKnight == true || isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        sendchat('\u2591\u2584\u258C\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2584');
                        sendchat('\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2584');
                        sendchat('\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2580\u2590\u2588\u2588\u2588\u2588');
                        sendchat('\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2590\u2588\u2588\u258C');
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd ==  '/music') {
                if (isKnight == true || isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        sendchat('\u2500\u2500\u2500\u2500\u2588\u2580\u2588\u2584\u2584\u2584\u2584\u2500\u2500\u2500\u2500\u2500\u2588\u2588\u2584');
                        sendchat('\u2500\u2500\u2500\u2500\u2588\u2580\u2584\u2584\u2584\u2584\u2588\u2500\u2500\u2500\u2500\u2500\u2588\u2580\u2580\u2588');
                        sendchat('\u2588\u2588\u2580\u2584\u2588\u2500\u2584\u2588\u2588\u2580\u2588\u2500\u2588\u2588\u2588\u2580\u2588');
                        sendchat('\u2500\u2580\u2580\u2580\u2500\u2500\u2580\u2588\u2584\u2588\u2580\u2500\u2580\u2588\u2584\u2588\u2580');
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
                // Large art
            } else if (cmd == '/scream') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░█▐▄▒▒▒▌▌▒▒▌░▌▒▐▐▐▒▒▐▒▒▌▒▀▄▀▄░" }]); }, 300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█▐▒▒▀▀▌░▀▀▀░░▀▀▀░░▀▀▄▌▌▐▒▒▒▌▐░" }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░▐▒▒▀▀▄▐░▀▀▄▄░░░░░░░░░░░▐▒▌▒▒▐░▌" }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░▐▒▌▒▒▒▌░▄▄▄▄█▄░░░░░░░▄▄▄▐▐▄▄▀░░" }]); }, 1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░▌▐▒▒▒▐░░░░░░░░░░░░░▀█▄░░░░▌▌░░░" }]); }, 1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "▄▀▒▒▌▒▒▐░░░░░░░▄░░▄░░░░░▀▀░░▌▌░░░" }]); }, 1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "▄▄▀▒▐▒▒▐░░░░░░░▐▀▀▀▄▄▀░░░░░░▌▌░░░" }]); }, 2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░█▌▒▒▌░░░░░▐▒▒▒▒▒▌░░░░░░▐▐▒▀▀▄" }]); }, 2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░▄▀▒▒▒▒▐░░░░░▐▒▒▒▒▐░░░░░▄█▄▒▐▒▒▒" }]); }, 2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "▄▀▒▒▒▒▒▄██▀▄▄░░▀▄▄▀░░▄▄▀█▄░█▀▒▒▒▒" }]); }, 3000);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd == '/fuckmyass') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿" }]); }, 300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⣿⣿⣿⣿⣿⣿⣿⣿⡇⢀⢀⠍⠙⢿⡟⢿⣿⣿⣿⣿⣿⣿⣿⣿" }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⠹⣿⣿⣿⣿⣿⣿⣿⠁⠈⢀⡤⢲⣾⣗⠲⣿⣿⣿⣿⣿⣿⣟⠻" }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⡀⢙⣿⣿⣿⣿⣿⣿⢀⠰⠁⢰⣾⣿⣿⡇⢀⣿⣿⣿⣿⣿⣿⡄" }]); }, 1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⣇⢀⢀⠙⠷⣍⠛⠛⢀⢀⢀⢀⠙⠋⠉⢀⢀⢸⣿⣿⣿⣿⣿⣷" }]); }, 1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⡙⠆⢀⣀⠤⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢸⣿⣿⣿⣿⣿⣿" }]); }, 1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⣷⣖⠋⠁⢀⢀⢀⢀⢀⢀⣀⣀⣄⢀⢀⢀⢀⢸⠏⣿⣿⣿⢿⣿" }]); }, 2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⣿⣷⡀⢀⢀⢀⢀⢀⡒⠉⠉⢀⢀⢀⢀⢀⢀⢈⣴⣿⣿⡿⢀⡿" }]); }, 2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⣿⣿⣷⣄⢀⢀⢀⢀⠐⠄⢀⢀⢀⠈⢀⣀⣴⣿⣿⣿⡿⠁⢀⣡" }]); }, 2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⠻⣿⣿⣿⣿⣆⠢⣤⣄⢀⢀⣀⠠⢴⣾⣿⣿⡿⢋⠟⢡⣿⣿⣿" }]); }, 3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⢀⠘⠿⣿⣿⣿⣦⣹⣿⣀⣀⣀⣀⠘⠛⠋⠁⡀⣄⣴⣿⣿⣿⣿" }]); }, 3300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⢀⢀⢀⠈⠛⣽⣿⣿⣿⣿⣿⣿⠁⢀⢀⢀⣡⣾⣿⣿⣿⡟⣹⣿" }]); }, 3600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⢀⢀⢀⢀⢰⣿⣿⣿⣿⣿⣿⣿⣦⣤⣶⣿⡿⢛⢿⡇⠟⠰⣿⣿" }]); }, 3900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⢀⢀⢀⢀⣿⣿⣿⡿⢉⣭⢭⠏⣿⡿⢸⡏⣼⣿⢴⡇⢸⣿⣶⣿" }]); }, 4200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⢀⢀⢀⢰⣿⣿⣿⢃⣶⣶⡏⠸⠟⣱⣿⣧⣛⣣⢾⣿⣿⣿⣿⣿" }]); }, 4500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⢀⢀⢀⣾⣿⣿⣿⣾⣿⣿⠟⢻⡿⡉⣷⣬⡛⣵⣿⣿⣿⣿⣿⣿" }]); }, 4800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⢀⢀⣸⣿⣿⣿⣿⣿⣿⡿⢰⠘⣰⣇⣿⣿⣰⣿⣿⣿⣿⣿⣿⣿" }]); }, 5100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⢀⢀⠘⢿⣿⣿⣿⣿⣿⡷⢺⣿⠟⣩⣭⣽⣇⠲⠶⣿⣿⣿⣿⣿" }]); }, 5400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⢀⠐⢀⣾⣿⣿⣿⣿⠟⢐⡈⣿⣷⣶⠎⣹⡟⠟⣛⣸⣿⣿⣿⣿" }]); }, 5700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "⠠⢀⣼⣿⣿⣿⣿⣯⣼⣿⣷⣿⣷⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿" }]); }, 6000);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd == '/homer') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▓▓▓▓ " }]); }, 300);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▒▒▓▓ " }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▒▒▒▒▓ " }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▒▒▒▒▒▓ " }]); }, 1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▒▒▒▒▒▓ " }]); }, 1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▒▒▒▒▒▒▓ " }]); }, 1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▒▒▒▒▒▒▓▓▓ " }]); }, 2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▓▓▓▓▓▓░░░▓ " }]); }, 2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▓░░░░▓░░░░▓ " }]); }, 2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▓░░░░░░▓░▓░▓ " }]); }, 3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▓░░░░░░▓░░░▓ " }]); }, 3300);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▓░░▓░░░▓▓▓▓ " }]); }, 3600);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▓░░░░▓▒▒▒▒▓ " }]); }, 4200);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▒▓▓▓▓▒▒▒▒▒▓ " }]); }, 4500);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▒▒▒▒▒▒▒▓▓▓▓ " }]); }, 5100);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▒▒▒▒▓▓▓▒▒▒▒▓ " }]); }, 5400);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▒▒▒▓▒▒▒▒▒▒▒▒▓ " }]); }, 5700);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▒▒▓▒▒▒▒▒▒▒▒▒▓ " }]); }, 6000);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▒▓▒▒▒▒▒▒▒▒▒▒▒▓ " }]); }, 6300);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▓▒▓▒▒▒▒▒▒▒▒▒▓ " }]); }, 6600);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▓▒▓▓▓▓▓▓▓▓▓▓ " }]); }, 6900);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▓▒▒▒▒▒▒▒▓ " }]); }, 7200);
                        setTimeout(function() { client.sendArray([{ m: "a", message:"▒▒▓▒▒▒▒▒▓ " }]); }, 7500);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd == '/largelenny') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░░░░░░░░░▄▄▄▄░░░░░░░░░░░░░░░░░░░░░░░▄▄▄▄▄" }]); }, 300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░░░░▄▀█▀▀▄░░▀▀▀▄░░░░▐█░░░░░░░░░▄▀█▀▀▄░░░▀█▄" }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░█░░░░▀░▐▌░░▐▌░░░░░▀░░░▐█░░░░░░░░▀░▐▌░░▐▌░░░░█▀" }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░▐▌░░░░░░░▀▄▄▀░░░░░░░░░░▐█▄▄░░░░░░░░░▀▄▄▀░░░░░▐▌" }]); }, 1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░█░░░░░░░░░░░░░░░░░░░░░░░░░▀█░░░░░░░░░░░░░░░░░░█" }]); }, 1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "▐█░░░░░░░░░░░░░░░░░░░░░░░░░░█▌░░░░░░░░░░░░░░░░░█" }]); }, 1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "▐█░░░░░░░░░░░░░░░░░░░░░░░░░░█▌░░░░░░░░░░░░░░░░░█" }]); }, 2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░█░░░░░░░░░░░░░░░░░░░░█▄░░░▄█░░░░░░░░░░░░░░░░░░█" }]); }, 2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░▐▌░░░░░░░░░░░░░░░░░░░░▀███▀░░░░░░░░░░░░░░░░░░▐▌" }]); }, 2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░█░░░░░░░░░░░░░░░░░▀▄░░░░░░░░░░▄▀░░░░░░░░░░░░█" }]); }, 3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░░░░░░░░░░░░░░░░░░▀▄▄▄▄▄▄▄▀▀░░░░░░░░░░░░░█" }]); }, 3300);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else  if (cmd == '/pinkiepie') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________________________________________▄▄████████▄" }]); }, 300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________________________________________▄█▓▓▓█▓▓▓▓▓▓██▄" }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________________________________________█▓▓▓▓▓██▓▓▓▓▓▓▓█▄" }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________________________▄█████▄_█▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓█" }]); }, 1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________▄▄██████████▓▓▓▓▓▓▓██▓▓▓▓▓▓▓█▓▓▓▓▓▓▓██" }]); }, 1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________▄█▓▓▓▓▓▓▓▓▓▓█▓██▓▓▓▓▓▓▓█▓▓▓▓▓█▓▓▓▓▓▓▓█▓█" }]); }, 1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________▄█▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓█▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓█▓▓█" }]); }, 2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________▄█▓▓▓▓▓▓▓▓▓▓▓▓▓▓████▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓██▓▓█" }]); }, 2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓███▓▓▓▓█" }]); }, 2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______█▓▓▓▓▓▓▓▓▓▓▓▓███▀▀▀▀██▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓█▓▓▓▓█__▄█████" }]); }, 3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____█▓▓▓▓▓▓▓▓▓▓█▀▀___________▀█▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓█▓▓▓███▓▓▓▓▓" }]); }, 3300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____█▓▓▓▓▓▓▓▓▓█▀_______________▓▓█▓▓▓▓███████▓███▓▓▓▓▓▓▓░░░▓▓" }]); }, 3600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____█▓▓▓▓▓▓▓▓█_____________▓▓▓░░░█▓██░░░░░░░███▓▓▓▓▓▓░░░░░░▓▓" }]); }, 3900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____█▓▓▓▓▓▓█____________▓▓░░░░░░██░░░░░░░░░░░░███▓░░░░░░░░░▓" }]); }, 4200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__█▌_█▓▓▓▓▓█___________▓░░░░░░░░░░░░░░░░░░░░░░░░▓░░░░░░░▓░░▓" }]); }, 4500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_█▓█_█▓▓▓▓█__________▓▄▄░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓░░░▓" }]); }, 4800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "█▓▓▓██▓▓▓█_________▓█░░▐░░░░░░░░░▄█████▄░░░░░░░░░░░░░▓░░░░▓" }]); }, 5100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "█▓▓▓▓▓▓▓█________▀▄█░░░▐░░░░░░▄█▀░░░░░░▀█░░░░░░░░░░░▓░░░░▓▓" }]); }, 5400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_██▓▓▓██________▀▀▄▌░░░▐░░░░░░█░░░░░░░░░░█░░░░░░░░░▓░░░░░▓▓" }]); }, 5700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___▀▀▀▀__________▀▄█░░░░▐░░░░░█░░░░░░░░░░░▐▌░░░░░░░▓░░░░░▓▓▓" }]); }, 6000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________▓░░▓▓▓▓░░░░░░█░░░░░░░░░░░░▐▄▄▄▅░░░░░░░░░▓██" }]); }, 6300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________▓░░▀░░░░░░░░░░▀░░░░░░░░░░░░▐▀▄▄▅░░░░░░░░▓▓▓▓" }]); }, 6600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________▓░░░░░░░░░░░░░░░░░░░░░░░░░░▀▄▄░░░░░░░░█▓▓▓▓" }]); }, 6900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________________▓░░░░░▓▓▓░░░░░░░░░░░░░░░░░░░░░███████▓▓▓▓▓▓" }]); }, 7200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________________▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░██▓▓▓▓▓▓▓▓▓▓▓▓" }]); }, 7500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______________________▓▓▓▓▓░░░░░░░░░░░░░░░░░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓" }]); }, 7800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______________________▓▓▓▓▓░░░░░░░░░░░░░░░░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓" }]); }, 8100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______________________▓▓▓▓▓░░░░░░░░░░░░░░░░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓" }]); }, 8400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______________________▓▒▒▓░░░░░░░░░░░░░░░░░░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓" }]); }, 8700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________________▓▓▒▓░░░░░░░░░░░░░░░░░░░████████▓▓▓▓▓▓▓▓▓▓" }]); }, 9000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______________________▓▓▓▓▓░░░░░░░░░░░░░░███▓▓▓▓█▓▓▓██▓▓▓▓██▓▓" }]); }, 9300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________________________▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓█▓▓█▓▓▓▓█▓██" }]); }, 9600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________________________________________█▓▓▓▓▓▓▓▓▓▓▓███▓▓▓▓█▓▓▓" }]); }, 9900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________________________________█▓▓▓▓▓▓▓▓████▓▓▓▓▓▓█▓▓▓▓" }]); }, 10200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________________________█▓▓▓▓▓▓▓▓▓▓█▓▓██████▓▓▓▓▓" }]); }, 10500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________________________█▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓" }]); }, 10800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________________________________█▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓███████" }]); }, 11100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________________________________________█▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓█" }]); }, 11400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________________________________________█▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓█" }]); }, 11700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________________________________███████████▓▓▓▓▓▓▓▓█" }]); }, 12000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________________________█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█" }]); }, 12300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________________________________█▓▓▓▓▓██▓▓▓▓▓▓▓▓██" }]); }, 12600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________________________█▓▓▓▓▓▓█▀▀▀▀▀▀▀" }]); }, 12900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________________________________________██▓▓▓▓███▄▄" }]); }, 13200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______________________________________________▀▀▀" }]); }, 13500);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd == '/rose') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: "──────────────▒███░───░████████▒ " }]); }, 300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "───────────█████▒░█████░▒▒▒▒▒▒█████ " }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "──────────██▒▒▒▒██████████████▒▒▒██░ " }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─────────██▒▒▒▒███▒██▒██▒▒█████▒░▒██ " }]); }, 1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─────────█░▒▒▒██▒████████████▒█▒▒▒█░ " }]); }, 1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─────────█▒▒▒▒██▒▒▒░▓▓▒░▓▒▒████▒▒██ " }]); }, 1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─────────█▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒█▒█░▒████ " }]); }, 2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─────███████████▒▒▒▒▒▒▒▒██████▒██▓▒███ " }]); }, 2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─────██▒▒▒▒▒▒█████▒▒▒▒▒▒▒▒█████▒▒▒▒▒██ " }]); }, 2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "───────██▒▒▒▒▒▒▒▓██████▒▒▒▒▒██▒▒▒▒▒▒███ " }]); }, 3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "────█████▒▒▒▒▒▒▒▒▒▒████▒▒▒██▒▒▒▒▒▒███ " }]); }, 3300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "────██▒▒▒███▒▒▒▒▒▒▒▒▒▒▓█████▒▒▒▒▒███ " }]); }, 3600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "────███▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒███▓▒▒███ " }]); }, 3900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "──────█████▒▒████▒▒▒▒▒▒▒▒▒▒█████ " }]); }, 4200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─────────████▒▒██████▒▒▒▒█████ " }]); }, 4500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "────────────███▒▒██████████ " }]); }, 4800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "──────────────████▓──█▓█ " }]); }, 5100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "────────────────────████ " }]); }, 5400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "────────────────────█░█─────█████████ " }]); }, 5700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "────────────────────█▓█───█████████████ " }]); }, 6000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "──░█████████───────████──██▓███▒▓████ " }]); }, 6300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─█████████████─────█░███████░██████ " }]); }, 6600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "───████░▒███▒██────█▓██████████ " }]); }, 6900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─────█████▓▒█████─████ " }]); }, 7200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─────────██████████▓█ " }]); }, 7500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "──────────────────█▓█────████▒█▓▒█ " }]); }, 7800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─────────────────█▓██──█████████████ " }]); }, 8100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─────────────────█▓█──██▒████░█████ " }]); }, 8400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "────────────────██████████▒██████ " }]); }, 8700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "────────────────█▓███████████ " }]); }, 9000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "───────────────████ " }]); }, 9300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "───────────────█▒█ " }]); }, 9600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "───────────────███ " }]); }, 9900);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            }  else if (cmd == '/dinkaleberg') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░" }]); }, 300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░░░░▄▄▄▄▄▄░░░░░░░░░░░░░░░░░░░" }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░░▄█████████▄▄░░░░░░░░▄▄░░░░░" }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░███████████████▄▄░░░░▄██▄░░░" }]); }, 1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░▄█████████████████████████░░░" }]); }, 1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░▄██████████████████████████▀░░░" }]); }, 1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░███░░░░░░░░░░░░░░░░░░░█░░░░░░░░" }]); }, 2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░███░███████████████████░░░░░░░░" }]); }, 2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░███░░▀████───████────█▀░░░░░░░░" }]); }, 2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░███░░░▀▄▄▄▄▄▀░▀▄▄▄▄▄▀▀▀▄░░░░░░░" }]); }, 3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░██░░░░░░░░░░░░░░░░░░░░░▀▄░░░░░" }]); }, 3300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░▄█░░░░░▄▀█▀▀▀▄▄▄░░░░░▄▀░░▀▄░░░" }]); }, 3600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░█░░░░░▄▀──█───█──▀█▄▄░▀▀░░░░▀▄░" }]); }, 3900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░▀▄▄░░█────█───█───█──▀▀▄░░▄▀▀▀░" }]); }, 4200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░██▄▄▄▄█▄▄▄█▄▄▄█▄▄▄▄▄█▄▄▀░░░" }]); }, 4500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░█████████████▄▄░░░░░░░░░░░░" }]); }, 4800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░█████████████████████████▄░" }]); }, 5100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░███████████████▀▀░░░░░░░░█░" }]); }, 5400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░██████████▀▀░░░░░░░░░░░░░█░" }]); }, 5700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░██████▀░░░░░░░░░░░░░░░░░░█░" }]); }, 6000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░███▀░░░░░░░░░░░░░░░░░░░░░█░" }]); }, 6300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░█▀░░░░░░░░░░░░░░░░░░░░░░░█░" }]); }, 6600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░░░░░░░░░░░░░░▀▄░▀▄░░░░░░░█░" }]); }, 6900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░░░░░░░░░░░░▄▄▄▀▄▄▀░░░░░░░█░" }]); }, 7200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░█░" }]); }, 7500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░█░" }]); }, 7800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░█░" }]); }, 8100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░█░" }]); }, 8400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░█░" }]); }, 8700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░█░" }]); }, 9000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░" }]); }, 9300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░" }]); }, 9600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░█▀▄░█░█▄░█░█░█░█░░█▀░█▀▄░█▀░█▀▄░▄▀▀░█░" }]); }, 9900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░█░█░█░█▀██░█▀▄░█░░█▀░█▀▄░█▀░█▀▄░█░█░▀░" }]); }, 10200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░▀▀░░▀░▀░░▀░▀░▀░▀▀░▀▀░▀▀░░▀▀░▀░▀░░▀▀░▀░" }]); }, 10500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░" }]); }, 10800);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd == '/pikachu') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░█░▀▄░░░░░░░░░░▄▄███▀░░" }]); }, 300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░█░░░▀▄░▄▄▄▄▄░▄▀░░░█▀░░" }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░░▀▄░░░▀░░░░░▀░░░▄▀░░░░" }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░░░░▌░▄▄░░░▄▄░▐▀▀░░░░░░" }]); }, 1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░░░▐░░█▄░░░▄█░░▌▄▄▀▀▀▀█" }]); }, 1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░░░▌▄▄▀▀░▄░▀▀▄▄▐░░░░░░█" }]); }, 1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░▄▀▀▐▀▀░░░░░░░▀▀▌▄▄▄░░░█" }]); }, 2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░█░░░▀▄░░░░░░░▄▀░░░░█▀▀▀" }]); }, 2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░▀▄░░▀░░▀▀▀░░▀░░░▄█░░░░" }]); }, 2700);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd == '/dickbutt') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________________________________.:d0XWWNNNNWNKx:." }]); }, 300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________________.;d0NNX0d:,...';o0NWNO:." }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________________.....:d0NN0x:'.___________'kWMWXd." }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________________'oOKNNNWMMWx'__________________lNMMMK." }]); }, 1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________________.oNMMMMWMMW0XK;__________________:XMMNc" }]); }, 1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________________:NMMMMMMWMX;cN0.__________________:XMWd" }]); }, 1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________________oWWMMMMWNO;_,NNl;;____'oO0K0Oxl,.__.kWWx" }]); }, 2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________________cWMMMMMWkc:l0WMWNk._.dNMMMMMWNONKo._oNWd" }]); }, 2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________________;NWX0XNNWMMWNKkc.__.kWMMMMMMMNclNWO'xWWo" }]); }, 2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________________.OWK'__.dWMWKc;k0c__cNMMMMMMMMK,.OWKcKWNc" }]); }, 3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________'0WWk,...,dO00000Oo._dWMMMMNKOl._.xKclNMN," }]); }, 3300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________:XWWWMMWNX0Oxoc;'..___.oKNMWXOdllokO,.0MM0." }]); }, 3600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________:XMXc';:ldxOKKXNWWNX0kdc;;;:cldkkdo,__lNMWd" }]); }, 3900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______________;XMNc__________..';:ldxO0KXK0Oxl'_____.KMMN," }]); }, 4200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______________,KMNo______________________...',,._____dWMWk." }]); }, 4500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________'0MWx._________________________________,XMMX," }]); }, 4800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________'0WWx._________________________________.OWMWo" }]); }, 5100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________.OWWk.__________________________________cNMWO." }]); }, 5400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________lNMX'______________________.;l.________'KMWO." }]); }, 5700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________oNWk______________________.xWX'_cxc___.kWWO." }]); }, 6000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________oWNl______________________,XWx.;NMK.__lNM0._________________________'oOO0Od;." }]); }, 6300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________.dWN:______________________dWK,.OWNl__'KMX;________________________;OWNl..cXWO." }]); }, 6600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________.dWX,_____________________.KNo.lWWx._.OWWd_______________________;OWWO,____lNN;" }]); }, 6900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________.xWX._____________________:N0.'KWO.__oWMX'_____________________'kWWKc.____.ONx." }]); }, 7200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________.dWX.____________________.kX:.OWK'__.KMWx.___________________.oXWXl._____.kNd." }]); }, 7500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________.dWX'____________________;Xx.xWX;___'XMNxcokO0KKXKK0kd:.___.lKWKl._____.cKXc" }]); }, 7800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________oWN;___________________.kK,dNNc____'XMMNKOdddolloxOXWMNO::KWKc.______:0WO'" }]); }, 8100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________lNNc___________________:Xl;XNo_____.KW0'___'0Kx.___.'lKWWW0:.______;OWNd." }]); }, 8400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________:NWx__________________,0O.:NO.______...___.'oXNxcc:;';OXk;.______;ONWX:" }]); }, 8700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________.KMK._______________,d0k'_.xKo._________;OXNNWWWMMMWWWW0:._____;OWMWO'" }]); }, 9000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________oWWl_____________,xo,.__':.:KO._________.,,,,,,;:cdOXWMWKl.___:kXWW0c." }]); }, 9300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________'KMK'____________lK0KO,'KWKlOK,_____________________.,xNWMK;____.':ld0Ko." }]); }, 9600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________oWW0.____________..oXKKNdckx,______________,O0'_______'OWMXl__.'.._.dNK;" }]); }, 9900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________.OWW0'______________'ll'___________________;od'________.0WMX,__,xKXKd;." }]); }, 10200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______________.kWWXc________________________________.;'______________cNMWl____;0Xc" }]); }, 10500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______________.:0WWO;.____________________________'KNx______________,XMNc_____.KN;" }]); }, 10800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________;kWWXd,__________________________.c:.______________lNMWkc;,';dNK'" }]); }, 11100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________.,.________,XWWWWKd;._______________________oKk.___________.cXWKkOKKKKK0d'" }]); }, 11400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______.0XOkc.____lXNk'.oNMWNKxl;..__________________..._________'oKN0c." }]); }, 11700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______.XO.:0Ko..kWK:_.lKKl;oONWWWNX0kdl;'.___________'Ox.____.cONNk;" }]); }, 12000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______.kX;_.lKKNNd..:0Xo.____.';lx0XNWWWWXx._'ccc:;,'':c..,lONN0o." }]); }, 12300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________;NO.__.od'.;0Xd._________.....'xWMXl_.0WXKXNWNNNXXNNXOo," }]); }, 12600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________lXd.___.c0Xx'_________.xXNNX00NWK,_.dN0'_..';:llc:.." }]); }, 12900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________cKx',xXNx,___________.OWW00NWNk'__cNK," }]); }, 13200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________'kNWNx'______________lNM0'.'.___,KN:" }]); }, 13500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________':.________________.kWWx.____'0Nl" }]); }, 13800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________________.xWWd.__'KNl" }]); }, 14100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________________________.lXW0odXXc" }]); }, 14400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________________________________.xNWNk." }]); }, 14700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______________________________________.'." }]); }, 15000);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd == '/myfuckingballshurt') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________________________________▓▓▓" }]); },300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________________________▓▒▒▒▓▓" }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________________▄▄▄▄▄▄▄▄▄__________▓▒▒▒▒▒▓" }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___▓▓▓▓▓____▄█████▓▓▓▓▓▓░░███████▓▒▒▒▒▓▒▓" }]); }, 1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____▓▒▓▒▓▓▓██▓█▓▓▓▓▓▓▓░░░▓▓▓▓▓▓▓▓▒▒▒▒▒▓▒▓" }]); }, 1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______▓▒▒▒▓▒▒▓▓▓▓▓▓▓▓░░░▓▓▓▓▓▓▓▓█▒▒▒▒▒▒▓▒▓" }]); }, 1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______█▓▓▒▒▓▒▒▓▒▒▓▓▓░░░▓▓▓▓▓▓▓▓█▒▒▒▒▒▒▒▓▒▓" }]); }, 2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____▄█▓▓█▓▓▓▒▒▒▓▒▓▓░░░░▓▓▓▓▓▓▓▓█▒▒▒▒▒▒▓▒▒▓" }]); }, 2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___█▓▓▓█▓▓█▓▓▒▓▒▓▓▓░░░░▓▓▓▓▓▓▓▓▓█▒▒▒▒▓▒▒▒▓" }]); }, 2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__█▓▓▓█▓▓█▓▓▓▓▓▓▓▓▓░░░█████████████▒▒▒▒▒▒▓" }]); }, 3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__█▓▓▓█▓▓█▓▓▓▓▓▓██████▒▌__▓█_____▓▓▒▒▒▒▒▒▒▓" }]); }, 3300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_▐█▓▓█▓▓▓█▓▓████▒▒▒▒▒▒▌__▓▓█▄____▓▓▒▒▒▒▒▒▓" }]); }, 3600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_▐█▓█▓▓▓▓███▒▒▒▒▒▒▒▒▒▒▌__▓▓█████▓▓▒▒▒▒▒▒▓" }]); }, 3900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__█▓█▓▓██_▅▄██▄▒▒▒▒▒▒▒▐___▓▓█▄_██▓▓▄▅▅▒▒▒▓" }]); }, 4200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__█▓▓██__▅▄▄▄▌__▀▄▒▒▒▒▒▐___▓▓▓████▓▅▅▄▒▒▒█" }]); }, 4500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__█▓█_________▓▄___▀▒▒▒▒▒▐____▓▓▓▓▓▓▅▅▄▒▒▒██" }]); }, 4800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__██___________▓▓█▀█▄▒▒▒▒▒▌________▒▒▒▒▒▒█▓█▌" }]); }, 5100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________▓▓███▒▒▒▒▒▐____▒▒▒██▒▒██▓██▌" }]); }, 5400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________________▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒█▓▓██▓▓██▓▌" }]); }, 5700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________________▓▒▒▄▒▒▌▒▒▒▒▒▒▒█▓▓▓▓██▓▓▓█" }]); }, 6000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________________▓▒▒▒▒▒▐▒▒▒▒▒▒▒█▓███▓▓▓█▓▓█▌" }]); }, 6300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________________▓▓▓▄▀▒▒▒▒▓▓▓█▓▓▓▓▓▓█▓▓▓▓██" }]); }, 6600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________▓▓▓▓▓▓____█▓▓██▀▀█▓▓▓▓░░█" }]); }, 6900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______________________________________▀▀__▄█▓▓▓▓▓░░▓█" }]); }, 7200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______________________________________▄██▓▓▓▓▓▓░░▓▓█" }]); }, 7500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________________________________██▓▓▓▓▓▓▓▓░░▓▓█" }]); }, 7800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______________________________________█▓▓▓▓▓▓▓░░░▓▓█" }]); }, 8100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______________________________________█▓▓▓▓▓░░░▓▓▓█" }]); }, 8400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________________________________█▓▓▓░░░▓▓▓▓█" }]); }, 8700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________________________________██░░░▓▓▓▓█" }]); }, 9000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________________________________________█░▓▓▓█" }]); }, 9300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______________________________________________████" }]); }, 9600);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd == '/rainbowdash') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________________________▓▓▓▓▓▓" }]); },300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________▓▓▓▓▓▓░░░░░░░▓▓▓▓▓" }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________________▓▓▓▒▒▒▒▒▒▒░░░░░▓▓▓▓▓▓▓▓▓" }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______▒▒_________▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒░░░░░▓___▓▓▓" }]); },1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____▒▒▒▒▒___▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒░░░▓" }]); },1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▓▒▒░▓▓" }]); },1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▓▒▒▒▓▓" }]); },2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__▒▒▒▓▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▓▓▒▒▒▓" }]); },2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_▒▒▒▒▓▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▓▒▒▒▓" }]); },2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_▒▒▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▓▓▓▓▓" }]); },3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__▒▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▓_____▓" }]); },3300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__▒▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▓" }]); },3600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___▒▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▒▒▒▓▓▓▓▓▒▒▒▒▒▒▓" }]); },3900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____▒▒▒▒▒▒▅▅▄▒▒▒▒▒▒▒▒▒▒▒▓▓▓▒▒▒▒▒▒▓▓▓▒▒▒▒▒▓▓" }]); },4200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___▓░▒▒▒▒▅▅▅▅█▀▀▀▅▅▅▅▄▄▒▒▒▒▓▒█▒▒▄▒▒▒▄▅▓▒▒▒▒▒▓" }]); },4500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___▓░░▒▒▒▒▄▅▅▌________▓_▀▀██▅▄█▒▒▀▀▀__█" }]); },4800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__▓░░░░▓▒▒▒▒▒_________▓____▐██▒▒▒▒▒▌▓__█" }]); },5100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__▓░░░░▓▒▒▒▒▒_________▓__▄███▌▒▒▒▒▐_▓██" }]); },5400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__▓░░░░░▓▒▒▒▒▒________▓▓█__██▒▒▒▒▒▒▓▌▐" }]); },5700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_▓▒▒░░░░░▓▒▒▒▒▒_______▓█████▒▒▒▒▒▒▒██" }]); },6000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_▓▒▒░░░░░░▓▓▓▒▒▒▒_____▓███▀▒▒▒▒▒▒▒▒▒▒▒" }]); },6300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_▓▒▒▒░░░░░░░░░▓▓▓▓▒▒__▓▒▒▒▒▒▒▒_▒▒▀▀▒▒" }]); },6600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_▓▒▒▒▒░░░░░░░░░▓▓▒▒▒▒▒▒▒▒▒▒▒▒___▒▒▒▒" }]); },6900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__▓▒▒▒▒▒░░░░▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒__▄▀" }]); },7200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__▓▓▒▒▒▒▒░░░░░▓____▒▒▒▒▒▒▒▒▒▒▒▀" }]); },7500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___▓▓▒▒▒▒▒▒░░░░░▓" }]); },7800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___▓▓▓▒▒▒▒▒▒▒░░░░▓" }]); },8100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____▓▓▓▒▒▒▒▒▒▒░░░░▓" }]); },8400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____▓▓▓▓▓▒▒▒▒▒▒▒░░▓" }]); },8700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______▓▓▓▓▓▒▒▒▒▒▒▒░▓" }]); },9000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______▓▓▓▓▓▓▒▒▒▒__▓▓" }]); },9300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________▓▓▓▓▓▓▒▒▓___▓" }]); },9600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________▓▓▓▓▓▓▒▒▓" }]); },9900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________▓▓▓▓▓▓▒▓" }]); },10200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________▓▓▓▓▓▓▓" }]); },10500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________▓▓▓▓▓" }]); },10800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________▓▓▓▓" }]); },11100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________▓▓▓" }]); },11400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________▓▓" }]); },11700);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd == '/fluttershy') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______________________▓▓▓▓▓▓▓▓▓▓▓▓" }]); },300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________▓▓▓▓▓▓▓▓▓▒▒▒▒▒▐▒▐▒▒▒▓▓▓▓▓__▒░░░▒" }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________▓▓▓▓▒▒▒▀▀▅▅▄▄▒▒▒▒▒▒▐▒▐▒▒▒▒▒▒▒▒▒░░░░▒" }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▀▄▒▒▒▒▐▒▐▒▒▒▒▒▒▒▒░░░░░▒▒" }]); },1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___▓▓▓▒▒▒▒▄▄▄▄▄▒▒▒▒▒▒▒▀▒▒▒▒░░░░░░░░▒▒░░░░▒░▒" }]); },1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__▓▓▓▄▅▀▀▀▒▒▒▒▒▒▀▀▀▅▒▒▒░░░░░░░░░░░░░░░░░░░▒░▒" }]); },1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__▓▓▀▒▒▒▒▒▒▄▄▄▄▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░▒░░▒" }]); },2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_▓▓▒▒▒▒▒▅▅▀▀▒▒▒▀▅▒▒░░░░░░░░░░░░░░░░░░░░░░▒░░░▒" }]); },2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_▓▓▒▒▒▅▀▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░▒░░░░▒▓" }]); },2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "▓▓▒▒▒▌▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▒▓" }]); },3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_▓▒▒▒▌▒▒▒▒▒▒▒▒▒▒░░░░░▄▄▄▄░░░░░░░░░░░░░░░░░░▓▒▒▓" }]); },3300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_▓▒▒▒▌▒▒▒▒▒▒▒▒▒▒░░░░█▀▀▀▀▀▅▅░░░░░░░░░░░░░░░▓▒▒▒▓" }]); },3600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_▓▒▒▒▌▒▒▒▒▒▒▒▒▒▒░░░░█____▓▓▓█▀▅▄░░░▄░░░░░░░░▓▒▒▒▓" }]); },3900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__▓▒▒▒▌▒▒▒▒▒▒▒▒▒░░░░▐___▓▓▓█▌____█▀▀░░▄░░░░░▓▒▒▒▒▓" }]); },4200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___▓▒▒▐▌▒▒▒▒▒▒▒▒▒░░░░▐__▓▓▓██▄____███▀▀░▄░░░▓▒▒▒▒▓" }]); },4500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____▓▒▒▒▌▒▒▒▒▒▒▒▒▒░░░░___▓▓▐█__█▄▄▓░░▀▀▀░░░▓▓▒▒▒▐▒▓" }]); },4800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____▓▒▒▒▌▒▒▒▒▒▒▒▒░░░░░___▓▓██████▓░░░░░░░▓▒▒▒▒▒▐▒▓" }]); },5100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______▓▒▒▒▌▒▒▒▒▒▒▒░░░░░░░__▓▓▀███▀▓░░░░░░▓▒▒▒▒▒▒▐▒▓" }]); },5400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______▓▒▒▒▌▒▒▒▒▒░░░░░░░░____▓▓▓▓▓_░░░░░░▓▒▒▒▒▒▒▐▒▐▓" }]); },5700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________▓▒▒▒█▒▒▒░▅▀░░░░░░░░░░░░░░░░░░░░▓▒▒▒▒▒▒▐▒▐▓" }]); },6000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________▓▓▒▒▌▒▒▒░░░▐░░░░░░░░░░░░░░░░▓▒▒▒▒▒▒▐▒▒▌▓" }]); },6300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________▓▓▒▒▐▌▒▒▒░▀░░░░░░░░░░░▒▒░░▓▒▒▒▒▒▒▒▐▒▐▒▓" }]); },6600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______________▓▐▒▒▐▒▒▒▒▒▒▒▒▒▓_______▒░░▓▒▒▒▒▒▒▒█▒▒█▒▓" }]); },6900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________▓▌▒▒▐▒▒▒▒▒▒▒▒▓______▒░▓▒▒▒▒▒▒▒█▒▒█▒▒▓" }]); },7200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________▓▐▒▒▀▌▒▒▒▒▒▒▓______▒▓▒▒▒▒▒▒▒█▒▒█▒▒▒▓" }]); },7500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________▓▒▐▒▒▐▒▒▒▒▒▓______▓▓▒▒▒▒▒█▀▒▒█▒▒▒▒▓" }]); },7800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________________▓▒▐▒▒▐▒▒▒▒▓_____▓▓▒▒▒▒▄▀▒▒▄▀▒▒▒▒▒▓" }]); },8100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______▓▓▓▓▓_____▓▒▐▒▒▒▌▒▒▓_____▓▓▒▒▒▄▀▒▒▄▀▒▒▒▒▒▓▓" }]); },8400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____▓▓▒▓____▓____▓▒▐▒▒▒▐▒▒▓___▓▓▒▒▒▄▀▒▒▄▀▒▒▒▒▒▒▓" }]); },8700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____▓▒▒▓________▓▒▒▒▌▒▒▒▌▓____▓▒▒▒▄▀▒▒▄▀▒▒▒▒▒▒▒▓" }]); },9000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____▓▒▒▓______▓▒▒▒▒▌▒▒▒▌▓____▓▒▒▄▀▒▒▄▀▒▒▒▒▒▒▒▓" }]); },9300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______▓▒▒▓▓▓▓▓▒▒▒▒▐▒▒▒▒▓____▓▒▒█▒▒▒█▒▒▒▒▒▒▒▒▓" }]); },9600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________▓▒▒▒▒▒▒▒▒▒▐▒▒▒▓▓_____▓▒█▒▒▒█▒▒▒▒▒▒▒▒▓" }]); },9900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________▓▓▒▒▒▒▒▒▒▐▒▓▓▓______▓▒▌▒▒▒▌▒▒▒▒▒▒▒▒▓" }]); },10200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________▓▓▓▓▓▓▓▓▓_________▓▌▒▒▒▌▒▒▒▒▒▒▒▒▓" }]); },10500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______________________________▓▓▒▒▌▒▒▒▒▒▒▒▒▓" }]); },10800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________________________▓▒▒▒▌▒▒▒▒▒▒▒▓" }]); },11100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________________▓▒▒▒▌▒▒▒▒▒▒▒▓" }]); },11400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________________________▓▒▒▐▒▒▒▒▒▒▒▓____▓▓▓" }]); },11700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________________________________▓▒▒▐▒▒▒▒▒▒▒▓_______" }]); },12000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________________________________▓▓▒▐▒▒▒▒▒▒▒▓▓____▓▓" }]); },12300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________________________________▓▌▒▒▒▒▒▒▒▒▓▓▓▒▓" }]); },12600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______________________________________▓▓▒▒▒▒▒▒▒▒▒▓" }]); },12900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________________________________________▓▓▓▓▓▓▓" }]); },13200);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd == '/applejack') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________________________▐█▄▄" }]); },300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________________________▄____________█▓▓█▄" }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________________________▄█_____________█▓▓▓▓█▄" }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______________________________▄▓▓█_____________█▓▓▓▓▓▓█▄" }]); },1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________________________█▓▓▓▓█____________█▓▓▓▓▓▓▓▓█▄" }]); },1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________________▄█▓▓▓▓▓█▄_________▄█▓▓▓▓▓▓▓▓▓▓█▄" }]); },1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________________▄█▓▓▓▓▓▓▓▓██▄▄▄▄██▓▓▓▓▓▓▓▓▓▓▓▓▓█" }]); },2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______________________▄█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░▓▓▓▓▓▓▓█" }]); },2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________________█▓▓▓▓▓▓▓▓▓▓▓▓░░░░______________░░░░▓▓█" }]); },2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________________▄█▓▓▓▓▓▓▓▓▓▓░░__________________________░█" }]); },2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________█▓▓▓▓▓▓▓▓▓▓░░_____░░░░░░░░_______________░░░" }]); },3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______________▄█▓▓▓▓▓▓▓▓▓▓░░░░░░_____________░░░░_____░░░___░░░" }]); },3300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________▄▄████▓▓▓▓▓▓▓▓░░_________________________░░_______░░░░" }]); },3600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______▄█▓▓▓▓█▓▓▓▓▓▓▓▓░__░░░░░░░░░░░░░░__________░░_______░" }]); },3900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____▄█▓▓▓▓██▓▓▓▓▓▓▓░░░░___________________░░░_______░░_______░" }]); },4200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____█▓▓▓▓▓█▓▓▓▓▓▓▓▓░___________________________░░________░_______░____________░░░" }]); },4500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___█▓▓▓▓▓█▓▓▓▓▓▓▓▓░______________________________░░_______░░_______░░░░░░░░__░" }]); },4800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__█▓▓▓▓▓▓▓▓▓▓▓▓▓▓░______________________░__________░░░______░░_______________░░" }]); },5100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_█▓▓▓▓▓▓▒▒▒▒▒▒▓▓▓░______░░░░░__________░____________░░░______░░░__________░" }]); },5400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "█▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▓▓░░░▒▒▒▒▒▒░░░░░____░░░__░░________░░________░░░░░░░" }]); },5700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "█▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░_░▒░░_░░░░______░░░_________░░" }]); },6000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "█▓▓▓▓▓█▓▒▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░▒▒▒░░░▒░░░░░░░░░░░░░░░░" }]); },6300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "█▓▓▓▓▓█▓▓▒▒▒▓▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▄▄▅▅▅▅▅▄▄▒▒▒▒▒▒▒▒▒▒▒▒█__░░░▓" }]); },6600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_█▓▓▓▓█▓▓▓▒▒▒▓▓▒▒▒▒▒▒▒▒▒█▒▒█▀__▓▓▓▄███▄▒▒▒▒▒▒▒▒▒▒▌_▐███▓" }]); },6900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__█▓▓▓█▓▓▓▓▒▒▒▒▓▓▒▒▒▒▒▄▒▒▀█____▓▓____██████▒▒▒▒▒▒▒▐▓█████▓" }]); },7200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___█▓▓█▓▓▓▓▓▒▒▒▒▒▓▓▓▒▒▒▀▄▄█_____▓_____▐██████▒▒▒▒▒▒▐▓█▄███▓" }]); },7500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______█▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▄▒▒█_____▓_____███████▓▌▒▒▒▒▒▐▓▓███▓" }]); },7800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______▀█▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▀▀▀_______▓___█▌_█████▓▌▒▒▒▒▒▒▌_▓▓▓▓▓" }]); },8100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______█▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒_______▓▓▓▓██████▓█▒▒▒▒▒▒▒▌___▓" }]); },8400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒_______▓▓▓▓▓███▓▓▐▒▒▒▒▒▒▒▒▓▓▓▓▓▓" }]); },8700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________█▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒_________▓▓▓▓▓▓___▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓" }]); },9000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________█▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒_▒▒▒▒▒________________▒▒▒▒▒▒▓▒▒▒▓▓▒▒▒▓" }]); },9300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________█▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒_▒__▒▒▒▒▒▒____________▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▓" }]); },9600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________█▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒_____▒▒▒▒▒▒▒▒▒▓█▓▓▓▓▓▓▓" }]); },9900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________█▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒██__░" }]); },10200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________█▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒█_░░" }]); },10500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________██▓▓▓▓▓▓▓▓▓█▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▌░░" }]); },10800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______________██▓▓▓▓▓▓██__▓▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓__░" }]); },11100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________██▓▓▓▓█____▓▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓____░__░" }]); },11400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________________████______▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒░_______________░___░" }]); },11700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________________▀________▓▒▒▒▒▒▒▒▒▒▒▒▒▒░________________░____░" }]); },12000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______________________________▓▒▒▒▒▒▒▒▒▒▒▒▒░________________░_____░" }]); },12300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________________________▓▒▒▒▒▒▒▒▒▒▒▒▒░_____________░░______░" }]); },12600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________________________▓▒▒▒▒▒░░░░░░░░░__________░________░_░" }]); },12900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________________________▓▒▒░░░___________░░░▓▓▓░░________░__░" }]); },13200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________________▓░░__________________░░▓▓░░░░░░░___░" }]); },13500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________________░░_░░__________________░_____________░" }]); },13800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________________░░░░____________________░░░_______░" }]); },14100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________________░__░____________________░░__░░░░░" }]); },14400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________________________________░__________░________░░" }]); },14700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________________________________░____░____░░░░░░░_░__░░░" }]); },15000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______________________________________░___░░___░░_______░░░░" }]); },15300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________________________________░_░_░____░░░_____░░" }]); },15600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________________________________░___░░░░░░░░░░" }]); },15900);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd == '/rarity') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________________________________▒▒▒" }]); },300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________________________________▄██▒░░░▒█████████▄▄" }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________________▄███▓▓▒░░░▒▓▓▓▓█▓▓▓▓▓████▄" }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________________________▄██▓▓▓▓▓▒░▒░░▒▓▓██▓▓▓▓██▓▓▓▓▓███▄▄" }]); },1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________________███▓█▓▓▓▓▓▒░░▒░░▒█▓▓▓▓██▓▓▓▓▓██▓▓▓▓▓██▄" }]); },1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________________▐█▓▓█▓▓▓▓▓▒░░░░▒▒▒▓▓▓██▓▓████████████████▄" }]); },1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________________▄█▄_█▓▓█▓▓▓▓▓▓▒▒░░░░░▒▓██▓▓███▓█▓▓▓▓█▓▓▓▓▓▓▓▓█▄" }]); },2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________▄██████▓▓█▓▓▓▓▓▓▒░▒░░░░░▒▓▓██▓▓▓█▓▓▓▓█▓▓▓▓▓▓▓▓▓█▀" }]); },2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______________▄█▓▓████▓▓█▓▓▓▓▓▓▒░░▒▒░░░░▒▓█▓▓▓▓▓█▓▓▓█▓▓▓▓▓▓▓▓█▀" }]); },2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______________▄█▓▓▓████▓█▓▓▓▓▓▓▒▒░░░░▒▒▒▒▒█▓▓▓▓▓█▓▓▓█▓▓▓▓▓▓▓█▀" }]); },2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________██▓▓▓▓███▓█▓▓▓▓▓▓▓▒░▒░░░░░░▒▒▓▓▓▓▓▓█▓▓█▓▓▓▓▓▓▓█" }]); },3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________██▓▓▓▓▓▓███▓█▓▓▓▓▓▓▒▒░░▒░░░░▒▒▓▓▓▓▓▓▓█▓█▓▓▓▓▓▓███_______▄▄▄▄" }]); },3300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________█▓▓▓▓▓▓▓███▓█▓▓▓▓▓▓▒▒░░░░▒▒▒▒▒▓▓▓▓▓▓▓█▓█▓▓▓▓▓██▓▓█████▓▓▓▓█" }]); },3600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________██▓▓▓▓▓▓▓████▓▓▓▓▓▓▒▒░░░░░░░░▒▒▓▓▓▓▓▓▓█▓█▓▓▓▓▓█▓▓▓▓██▓▓█▓▓▓▓█" }]); },3900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________█▓▓█▓▓▓▓▓▓▓███▓▓▒▒▒▒░░░░░░░░░░░▒▒▒▒▒▓▓▓▓█▓█▓▓▓██▓▓▓▓████▓▓▓▓▓█" }]); },4200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________██▓▓▓█▓▓▓▓▓▓██▒▒▒▒░░░░░░░░░░░░░░░░░░▒▒▒▒▓▓█▓█▓▓██████████▓▓▓▓██" }]); },4500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________█▓█▓▓▓█▓▓▓▓▓▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▓█▓█▓██▓▓▓▓▓▓▓▓▓▓██" }]); },4800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______█▓▓▓██▓▓██▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▓█▓█▓█▓▓▓▓▓▓▓▓██" }]); },5100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______█▓▓▓▓▓███▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒██▓█▓██▓▓████" }]); },5400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__▒▒▒▒▒▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▀▀▀▀▀▀▀▀" }]); },5700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_▒░░░░░░▒▒▒▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒" }]); },6000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_▒░░░░░░░░░▒▒▒░░░░░░░░░░░░░░░░░▄░░░▄░░░░░░░░░░░░░░░░░▒" }]); },6300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__▒░░░░░░░░░░▒▒░░░░░░░░░░░░░▀▄░░▀▄▄▀▄▄▄▄▄░░░░░░░░░░░░░▒▒▒▒▒▒▒" }]); },6600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__▒░░░░░░░░░░░░░░░░░░░░░░▀▄▄░░██████████████▄░░░░░░░░░░░░░░░░▒" }]); },6900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__▒▒░░░░░░░░░░░░░░░░░░▄▄░░░▄████▓▓▓▓▓▓▓▓▓____▀█▄░░░░░░░░░░▅▅░░░▒" }]); },7200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___▒▒░▒▒░░░░░░░░░░░░░░░░▀███▓___▀██████▓▓▓▓▓_____▀▅░░░░░░░░░░░░▒▒" }]); },7500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____▒░░░▒▒▒░░░░░░░░░▀▀▀▀▀░░▓▓_____▀███████▓▓▓▓_____▀▅░░░░░░░░░░░▒" }]); },7800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____▒▒░░░░▒▒▒▒░░░░░░░░░░░░░▓______███▀▀███▓▓▓▓______▀░░░░▅▅▅▅▒" }]); },8100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______█▒▒░░░░░░░▒▒▒░░░░░░░░░░░_____███▄_▐███▓▓▓▓____░░░░░░░░░░░▒" }]); },8400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______█▓▓▒▒░░░░░░░░░░░░░░░░░░░░░▀█████████▓▓▓▓__░░░░░░░░░░░░▒" }]); },8700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______█▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░▀▀▀████▓▓▓▓_░░░░░░░░░░░░▒▒" }]); },9000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______█▓▓▓█▓▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒" }]); },9300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______█▓▓▓█▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒" }]); },9600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______██▓▓▓█▓█▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒" }]); },9900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______█▓█▓▓█▓▓█▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒" }]); },10200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________█▓██▓█▓▓█▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒" }]); },10500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________█▓▓▓███▓█▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒" }]); },10800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________█▓▓▓▓▓▓███████░░░░░░░░░░░░░░░░░░░░░▒▒▒" }]); },11100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________██████▓▓▓▓▓▓▓▓▓██████░░░░░░▒▒▒▒▒▒▒" }]); },11400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________█▓▓▓▓▓████████▓▓▓▓▓▓▓███░░░░▒" }]); },11700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________█▓▓▓▓▓▓▓▓▓███▓████▓▓▓▓▓███░░▒" }]); },12000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________█▓▓▓▓▓▓██▓▓▓▓████████▓▓▓▓███▒" }]); },12300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_____________█▓▓▓▓▓█▓▓▓▓█████████████▓▓▓█" }]); },12600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______________█▓▓▓▓██▓▓▓████████▓██▓▓██▓▓█" }]); },12900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______________█▓▓▓█▓██▓▓█████▓▓▓▓██▓▓▓████" }]); },13200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________█▓▓█▓▓▓███▓▓▓▓█████▓▓▓▓▓▓▓█" }]); },13500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________▀█████▓▓▓███▓▓▓█▓▓▓▓▓▓▓▓█▀" }]); },13800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________▄█▓▓█▓▓██▓▓▓████████▓▓▓█▀" }]); },14100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_______________▄██▓▓▓█▓▓▓▓███▓▓▓▓▓▓▓▓██▀" }]); },14400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________█▓█▓▓▓▓█▓▓▓▓▓▓███████▀" }]); },14700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________█▓▓██▓▓▓██▓▓▓▓▓▓▓▓█▀" }]); },15000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "_________________█▓▓▓▓██▓▓██▓▓▓▓▓█▀" }]); },15300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "__________________█▓▓▓▓▓██▓▓█████" }]); },15600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "___________________█▓▓▓▓▓▓▓████▀" }]); },15900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________________▀█▓▓▓▓▓▓▓█▀" }]); },16200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "______________________▀█▓▓▓▓▓█" }]); },16500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "________________________▀▀███" }]); },16800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "____________________________▀" }]); },17100);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd == '/cat2') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: "──────────────────────────────▓▓█───────" }]); }, 300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "────────────────────────────▒██▒▒█──────" }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "───────────────────────────█▓▓▓░▒▓▓─────" }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─────────────────────────▒█▓▒█░▒▒▒█─────" }]); }, 1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "────────────────────────▒█▒▒▒█▒▒▒▒▓▒────" }]); }, 1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─▓▓▒░──────────────────▓█▒▒▒▓██▓▒░▒█────" }]); }, 1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─█▓▓██▓░──────────────▓█▒▒▒▒████▒▒▒█────" }]); }, 2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─▓█▓▒▒▓██▓░──────────▒█▒▒▒▒▒██▓█▓░░▓▒───" }]); }, 2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─▓▒▓▒▒▒▒▒▓█▓░──░▒▒▓▓██▒▒▒▒▒▒█████▒▒▒▓───" }]); }, 2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─▓░█▒▒▒▒▒▒▒▓▓█▓█▓▓▓▓▒▒▒▒▒▒▒▒██▓██▒░▒█───" }]); }, 3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─▓░▓█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓████▒▒▒█───" }]); }, 3300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─▓░▓██▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▓██░░░█───" }]); }, 3600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─▓░▓███▒▒▒▒▒▒▒▒▒▒▒▓█▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▒▓▓──" }]); }, 3900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─▒▒▒██▓▒▓█▓▒▒▒▒▒▒▒▓▒▒▒▒▒▒▓▓▓▒▒▒▒▒▒▒▓▒█──" }]); }, 4200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "──▓▒█▓▒▒▒▒▓▒▒▒▒▒▒▒▒▒▒▒▓█▓▓▓▓█▓▒▒▒▒▒▒▒▓▒─" }]); }, 4500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "──▓▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓──────▓█▓▒▒▒▒▒▓█─" }]); }, 4800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "──▒▒▓▒▒▒▓▓▓▒▒▒▒▒▒▒▒▒▓▓───░▓▓───█▓▒▒▒▒▒█─" }]); }, 5100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "───█▒▒▓▓▓▒▒▓▓▒▒▒▒▒▒▓▓───█████▓──█▓▒▒▒▒▓▒" }]); }, 5400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "───▓▓█▒─────▒▓▒▒▒▒▒█───░██████──░█▒▒▒▒▓▓" }]); }, 5700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "───▓█▒──▒███─▒▓▒▒▒▒█────██████───▓▒▒▒▒▒▓" }]); }, 6000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "───██───█████─█▒▒▒▒█─────███▓────▓▓▒▒▒▒▓" }]); }, 6300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "───█▓───█████─▒▓▒▒▒█─────────────█▓▓▓▒▒▓" }]); }, 6600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "───█▓───░███──░▓▒▒▒▓█──────────░█▓▒▒▒▓▒▓" }]); }, 6900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "───██─────────▒▓▒▒▒▒▓▓──────░▒▓█▓────░▓▓" }]); }, 7200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "───▓█░────────█▓██▓▒▒▓█▓▓▓▓██▓▓▒▓▒░░▒▓▒▓" }]); }, 7500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "───▒██░──────▓▒███▓▒▒▒▒▓▓▓▓▒▒▒▒▒▒▓▓▓▓▒▓─" }]); }, 7800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "────█▓█▓▓▒▒▓█▓▒░██▒▒▓▓█▓▒▒▒▒▒▒▒▒▒▒▒▒▓▓█▒" }]); }, 8100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "────▓─░▓▓▓▓▓▒▓▓▓▓▒▓▓▓▒▓▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓" }]); }, 8400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "────▒▒▒▓▒▒▒▒▒▒▓█░─░░░─▓▓▒▒▒▒▒▒▒▒▒▒▒▓██▓▒" }]); }, 8700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─────█▓▒▒▒▒▒▒▒▒▓▓─░░░─▓▓▒▒▒▒▒▒▒▒▒▓▓▓▒▒▓▒" }]); }, 9000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "──────██▓▓▒▒▒▒▒▒█▒░░░░█▒▒▒▒▒▒▒▒▓█▓▓▒▒▒▒▒" }]); }, 9300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "─────░─▒██▓▓▒▒▒▒▒█▓▒▒▓▒▒▒▒▒▒▓███▓▒▒▒▒▒▓▓" }]); }, 9600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "──────────░▒▓▓▓▓▒▒▓▓▓▓▓▓████▓▓█▒▒▒▒▒▓▓█░" }]); }, 9900);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd == '/shibe') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░░░░▐█▀█▄░░░░░░░░░░▄█▀█" }]); }, 300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░░░░█▐▓░█▄░░░░░░░▄█▀▄▓▐" }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░░░░█▐▓▓░████▄▄▄█▀▄▓▓▓▌█" }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░░░▄█▌▀▄▓▓▄▄▄▄▀▀▀▄▓▓▓▓▓▌█" }]); }, 1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░░▄█▀▀▄▓█▓▓▓▓▓▓▓▓▓▓▓▓▀░▓▌█" }]); }, 1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░░█▀▄▓▓▓███▓▓▓███▓▓▓▄░░▄▓▓▐" }]); }, 1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "░█▌▓▓▓▀▀▓▓▓▓███▓▓▓▓▓▓▓▄▀▓▓▐" }]); }, 2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "▐█▐██▐░▄▓▓▓▓▓▀▄░▀▓▓▓▓▓▓▓▓▓▌" }]); }, 2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "█▌███▓▓▓▓▓▓▓▓▐░░▄▓▓███▓▓▓▄▀▐" }]); }, 2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "█▐█▓▀░░▀▓▓▓▓▓▓▓▓▓██████▓▓▓▓▐" }]); }, 3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "▌▓▄▌▀░▀░▐▀█▄▓▓██████████▓▓▓▌" }]); }, 3300);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            }else if (cmd == '/butterfly2') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪" }]); }, 300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪████▓╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪▓███▓╪╪" }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪███████▓╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪███████╪╪" }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪█████████╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪█████████▓╪" }]); }, 1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪██████▓███╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪██▓▓██████▓╪" }]); }, 1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪▓█████▓▓▓▓██╪╪╪╪╪╪╪╪╪╪╪╪╪╪██▓▓▓▓█████▓╪" }]); }, 1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪▓████▓▓▓▓▓▓██╪╪╪╪╪╪╪╪╪╪╪╪██▓▓▓▓▓▓████▓╪" }]); }, 2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪▓███▓▓▓▓▓▓▓███╪╪╪╪╪╪╪╪╪╪███▓▓▓▓▓▓▓████╪" }]); }, 2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪▓███▓▓▓▓▓▓█████╪╪╪╪╪╪╪╪▓████▓▓▓▓▓▓▓██▓╪" }]); }, 2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪▓███▓▓▓▓▓███████╪╪╪╪╪╪▓██████▓▓▓▓▓▓██▓╪" }]); }, 3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪▓██▓▓▓▓▓▓███████▓╪╪╪╪▓████████▓▓▓▓▓▓█▓╪" }]); }, 3300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪██▓▓▓▓▓██████▓██▓╪╪▓▓█▓▓█████▓▓▓▓▓▓█▓╪" }]); }, 3600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪██▓▓▓▓██████▓▓▓█╪▓█╪▓▓▓▓▓█████▓▓▓▓▓█▓╪" }]); }, 3900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪██▓▓▓██████▓▓▓▓█▓▓█▓█▓▓▓▓██████▓▓▓▓█╪╪" }]); }, 4200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪▓█▓▓██████▓▓▓▓▓▓████▓▓▓▓▓▓██████▓▓▓█╪╪" }]); }, 4500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪█████████▓▓▓▓▓▓█▓▓█▓▓▓▓▓▓▓██████▓█▓╪╪" }]); }, 4800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪████████▓▓███▓▓█▓╪█▓▓▓█▓▓▓▓███████╪╪╪" }]); }, 5100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪╪████▓▓████▓▓▓▓█▓█▓▓▓▓▓▓█▓█▓▓████╪╪╪╪" }]); }, 5400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪╪╪╪╪╪╪████▓▓▓▓▓████▓▓▓▓▓████▓╪╪╪╪╪╪╪╪" }]); }, 5700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪╪╪╪╪▓█████▓▓▓▓▓█████▓▓▓▓▓█████╪╪╪╪╪╪╪" }]); }, 6000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪╪╪╪╪█████▓▓▓▓▓█▓█▓▓█▓▓▓▓▓▓████▓╪╪╪╪╪╪" }]); }, 6300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪╪╪╪█████▓▓▓▓▓██▓▓▓╪██▓▓▓▓▓▓████╪╪╪╪╪╪" }]); }, 6600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪╪╪╪████▓▓▓▓▓▓██╪▓█╪██▓▓▓▓▓▓▓███▓╪╪╪╪╪" }]); }, 6900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪╪╪╪███▓▓▓▓▓▓███╪▓█╪███▓▓▓▓▓▓███▓╪╪╪╪╪" }]); }, 7200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪╪╪▓███▓▓▓▓▓████╪██╪████▓▓▓▓▓███▓╪╪╪╪╪" }]); }, 7500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪╪╪▓███▓▓▓▓▓████╪██╪▓████▓▓▓▓▓███╪╪╪╪╪" }]); }, 7800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪╪╪▓██▓▓▓▓▓████▓╪╪╪╪╪████▓▓▓▓▓██▓╪╪╪╪╪" }]); }, 8100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪╪╪╪███▓▓▓█████╪╪╪╪╪╪█████▓▓▓████╪╪╪╪╪" }]); }, 8400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪╪╪╪▓███▓██████╪╪╪╪╪╪▓█████▓▓███╪╪╪╪╪╪" }]); }, 8700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪╪╪╪╪██████▓██╪╪╪╪╪╪╪╪▓█▓▓▓████╪╪╪╪╪╪╪" }]); }, 9000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪╪╪╪╪╪▓██████╪╪╪╪╪╪╪╪╪╪██████▓╪╪╪╪╪╪╪╪" }]); }, 9300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪╪╪╪╪╪╪▓████╪╪╪╪╪╪╪╪╪╪╪╪▓████╪╪╪╪╪╪╪╪╪" }]); }, 9600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪" }]); }, 9900);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            }else if (cmd == '/elk') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: "111111111111111111111111111111111111111111111" }]); }, 300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "1¶1¶11111¶¶11111111111¶¶111111¶¶¶¶11111111111" }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "1¶¶¶111111¶¶1111111111¶¶¶11111¶¶¶111111111111" }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "11¶¶¶¶¶¶¶11¶¶¶¶¶111¶¶1¶¶11¶¶¶¶¶¶1111111111111" }]); }, 1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "111111¶¶¶¶¶¶¶¶¶¶¶11¶¶¶¶¶¶¶1111111111111111111" }]); }, 1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "111111111111¶¶¶¶¶¶¶¶¶¶¶1111111111111111111111" }]); }, 1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "1111111111111¶¶¶¶¶¶11¶¶1111111111111111111111" }]); }, 2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "111111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶111111111111111111" }]); }, 2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "1111111111¶¶¶¶¶¶11111111¶¶¶111111111111111111" }]); }, 2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "1111111111¶¶¶¶11¶¶¶¶¶¶¶¶¶¶¶111111111111111111" }]); }, 3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "111111111¶¶¶¶1¶¶¶¶¶11111111111111111111111111" }]); }, 3300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "111111111¶¶¶¶1¶¶¶¶111111111111111111111111111" }]); }, 3600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "111111111¶¶¶¶1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1111" }]); }, 3900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "1111111111¶¶¶¶1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11" }]); }, 4200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "1111111111¶¶¶¶¶11¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1¶11" }]); }, 4500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "11111111111¶¶¶¶¶1111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1111" }]); }, 4800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "111111111111¶¶¶¶¶1111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1111" }]); }, 5100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "11111111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1111" }]); }, 5400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "111111111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1111" }]); }, 5700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "11111111111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1111" }]); }, 6000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "11111111111111111¶¶¶¶¶¶¶¶11111111¶¶¶¶¶¶¶11111" }]); }, 6300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "11111111111111111¶¶¶¶¶¶¶¶11111111¶¶¶1¶¶¶11111" }]); }, 6600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "111111111111111111¶¶1¶¶¶1111111111¶¶1¶¶¶11111" }]); }, 6900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "111111111111111111¶¶1¶¶¶1111111111¶¶1¶¶¶11111" }]); }, 7100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "1111111111111111111¶¶1¶¶1111111111¶¶1¶¶¶11111" }]); }, 7500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "111111111111111111¶¶¶1¶¶1111111111¶¶1¶¶¶11111" }]); }, 7800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "111111111111111111¶¶11¶¶111111111¶¶11¶¶111111" }]); }, 8100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "111111111111111111¶¶1¶¶1111111111¶¶1¶¶¶111111" }]); }, 8400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "111111111111111111111111111111111111111111111" }]); }, 8700);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd == '/mario') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ___________________▄▄▄▀▀▀▀▀▀▀▄" }]); }, 360);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _______________▄▀▀____▀▀▀▀▄____█" }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ___________▄▀▀__▀▀▀▀▀▀▄___▀▄___█" }]); }, 1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " __________█▄▄▄▄▄▄_______▀▄__▀▄__█" }]); }, 1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _________█_________▀▄______█____█_█" }]); }, 1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ______▄█_____________▀▄_____▐___▐_▌" }]); }, 2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ______██_______________▀▄___▐_▄▀▀▀▄" }]); }, 2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ______█________██_______▌__▐▄▀______█" }]); }, 2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ______█_________█_______▌__▐▐________▐" }]); }, 3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _____▐__________▌_____▄▀▀▀__▌_______▐_____________▄▄▄▄▄▄" }]); }, 3300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ______▌__________▀▀▀▀________▀▀▄▄▄▀______▄▄████▓▓▓▓▓▓▓███▄" }]); }, 3600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ______▌____________________________▄▀__▄▄█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄" }]); }, 3900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ______▐__________________________▄▀_▄█▓▓▓▓▓▓▓▓▓▓_____▓▓____▓▓█▄" }]); }, 4200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _______▌______________________▄▀_▄█▓▓▓▓▓▓▓▓▓▓▓____▓▓_▓▓_▓▓__▓▓█" }]); }, 4500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _____▄▀▄_________________▄▀▀▌██▓▓▓▓▓▓▓▓▓▓▓▓▓__▓▓▓___▓▓_▓▓__▓▓█" }]); }, 4800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ____▌____▀▀▀▄▄▄▄▄▄▄▄▀▀___▌█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓__▓________▓▓___▓▓▓█" }]); }, 5100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _____▀▄_________________▄▀▀▓▓▓▓▓▓▓▓█████████████▄▄_____▓▓__▓▓▓█" }]); }, 5400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _______█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▄▄___▓▓▓▓▓█" }]); }, 5700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _______█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓███▓▓▓▓████▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓█" }]); }, 6000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ________█▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓█▓▓██░░███████░██▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓█" }]); }, 6300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ________█▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓░░░░░█░░░░░██░░░░██▓▓▓▓▓▓▓▓▓██▓▓▓▓▌" }]); }, 6600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ________█▓▓▓▓▓▓▓▓▓▓▓▓▓▓███░░░░░░░░____░██░░░░░░░██▓▓▓▓▓▓▓██▓▓▌" }]); }, 6900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ________▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓██░░░░░░░________░░░░░░░░░██████▓▓▓▓▓█▓▌" }]); }, 7200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ________▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓██░░░░░░___▓▓▓▓▓░░░░░░░███░░███▓▓▓▓▓█▓▌" }]); }, 7500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _________█▓▓▓▓▓▓▓▓▓▓▓▓▓██░░░░░___▓▓█▄▄▓░░░░░░░░___░░░░█▓▓▓▓▓█▓▌" }]); }, 7800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _________█▓▓▓▓▓▓▓▓▓▓▓▓▓█░░█░░░___▓▓██░░░░░░░░▓▓▓▓__░░░░█▓▓▓▓██" }]); }, 8100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _________█▓▓▓▓▓▓▓▓▓▓▓▓▓█░███░░____▓░░░░░░░░░░░█▄█▓__░░░░█▓▓█▓█" }]); }, 8400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _________▐▓▓▓▓▓▓▓▓▓▓▓▓▓█░█████░░░░░░░░░░░░░░░░░█▓__░░░░███▓█" }]); }, 8700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " __________█▓▓▓▓▓▓▓▓▓▓▓▓█░░███████░░░░░░░░░░░░░░░▓_░░░░░██▓█" }]); }, 9000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " __________█▓▓▓▓▓▓▓▓▓▓▓▓█░░░███████░░░░░░░░░░░░░░_░░░░░██▓█" }]); }, 9300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " __________█▓▓▓▓▓▓▓▓▓▓▓▓█░░░███████░░░░░░░░░░░░░░░░░░░██▓█" }]); }, 9600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ___________█▓▓▓▓▓▓▓▓▓▓▓▓█░░░░███████░░░░░░░░░░░█████░██░░░" }]); }, 9900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ___________█▓▓▓▓▓▓▓▓▓▓▓▓█░░░░░░__███████░░░░░███████░░█░░░░" }]); }, 10200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ___________█▓▓▓▓▓▓▓▓▓▓▓▓▓█░░░░░░█▄▄▄▀▀▀▀████████████░░█░░░░" }]); }, 10500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ___________▐▓▓▓▓▓▓▓▓▓▓▓▓█░░░░░░██████▄__▀▀░░░███░░░░░█░░░" }]); }, 10800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ___________▐▓▓▓▓▓▓▓▓▓▓▓█▒█░░░░░░▓▓▓▓▓███▄░░░░░░░░░░░░░░░______▄▄▄" }]); }, 11100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ___________█▓▓▓▓▓▓▓▓▓█▒▒▒▒█░░░░░░▓▓▓▓▓█░░░░░░░░░░░░░░░▄▄▄_▄▀▀____▀▄" }]); }, 11400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " __________█▓▓▓▓▓▓▓▓▓█▒▒▒▒█▓▓░░░░░░░░░░░░░░░░░░░░░____▄▀____▀▄_________▀▄" }]); }, 11700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _________█▓▓▓▓▓▓▓▓▓█▒▒▒▒█▓▓▓▓░░░░░░░░░░░░░░░░░______▐▄________█▄▄▀▀▀▄__█" }]); }, 12000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ________█▓▓▓▓▓▓▓▓█▒▒▒▒▒▒█▓▓▓▓▓▓▓░░░░░░░░░____________█_█______▐_________▀▄▌" }]); }, 12300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _______█▓▓▓▓▓▓▓▓█▒▒▒▒▒▒███▓▓▓▓▓▓▓▓▓▓▓█▒▒▄___________█__▀▄____█____▄▄▄____▐" }]); }, 12600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ______█▓▓▓▓▓▓▓█_______▒▒█▒▒██▓▓▓▓▓▓▓▓▓▓█▒▒▒▄_________█____▀▀█▀▄▀▀▀___▀▀▄▄▐" }]); }, 12900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _____█▓▓▓▓▓██▒_________▒█▒▒▒▒▒███▓▓▓▓▓▓█▒▒▒██________▐_______▀█_____________█" }]); }, 13200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ____█▓▓████▒█▒_________▒█▒▒▒▒▒▒▒▒███████▒▒▒▒██_______█_______▐______▄▄▄_____█" }]); }, 13500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " __█▒██▒▒▒▒▒▒█▒▒____▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒____▒█▓█__▄█__█______▀▄▄▀▀____▀▀▄▄█" }]); }, 13800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " __█▒▒▒▒▒▒▒▒▒▒█▒▒▒████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█_______█▓▓█▓▓▌_▐________▐____________▐" }]); }, 14100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " __█▒▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒_______█▓▓▓█▓▌__▌_______▐_____▄▄____▐" }]); }, 14400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒_____█▓▓▓█▓▓▌__▌_______▀▄▄▀______▐" }]); }, 14700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███████▓▓█▓▓▓▌__▀▄_______________▄▀" }]); }, 15000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒██▓▓▓▓▓▌___▀▄_________▄▀▀" }]); }, 15300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒█▓▓▓▓▓▀▄__▀▄▄█▀▀▀" }]); }, 15600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▓▓▓▓██▄▄▄▀" }]); }, 15900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████" }]); }, 16200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█" }]); }, 16500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▄▄▄▄▄" }]); }, 16800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒██▄▄" }]); }, 17100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " __█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒▒▒█▄" }]); }, 17400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " __█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█" }]); }, 17700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " __█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒█▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█" }]); }, 18000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ___█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒█▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▒▒▌" }]); }, 18300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ____█▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒█▒▒▒▒█▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░▒▒▌" }]); }, 18600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ____█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█████████████▒▒▒▒▒█▒▒▒▒▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒░▒▌" }]); }, 18900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _____█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█_______▐▒▒▒▒█▒▒▒▒▒▒▒░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▌" }]); }, 19200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ______█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█________█▒▒█▒▒▒▒▒▒░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌" }]); }, 19500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _______█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█________█▒█▒▒▒▒▒▒░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌" }]); }, 19800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█________█▒▒▒▒▒▒░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█" }]); }, 20100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█________█▒▒▒▒░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█" }]); }, 20400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█________█▒▒▒░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▀" }]); }, 20700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " __________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█_______█▒░░░▒▒▒▒▒░░░░░░░░▒▒▒█▀▀▀" }]); }, 21000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ___________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█_______█░▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░█▀" }]); }, 21300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ____________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█_______█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▀" }]); }, 21600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _____________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█_______█▒▒▒▒▒▒▒▒▒▒▒▒█▀" }]); }, 21900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _____________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█_______▀▀▀███████▀▀" }]); }, 22200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ______________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█" }]); }, 22500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _______________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█" }]); }, 22800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█" }]); }, 23100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█" }]); }, 23400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " __________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒█" }]); }, 23700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ___________________█▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒█" }]); }, 24000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ___________________█▒▒▒▒▒▒▒▒████▒▒▒▒▒▒▒█" }]); }, 24300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ___________________█████████▒▒▒▒▒▒▒▒▒▒▒█" }]); }, 24600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ____________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█" }]); }, 24900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ____________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█" }]); }, 25200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _____________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▌" }]); }, 25500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _____________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▌" }]); }, 25800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ______________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░▌" }]); }, 26100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _______________________█▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░█" }]); }, 26400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " ________________________█▒▒▒▒▒▒▒▒▒▒▒░░░█" }]); }, 26700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " __________________________██▒▒▒▒▒▒░░░█▀" }]); }, 27000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _____________________________█░░░░░█▀" }]); }, 27300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: " _______________________________▀▀▀▀" }]); }, 27600);
                    } else {
                        sendchat("I need the crown for you to use large chat art.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
                //spamming
            } else  if (cmd == '/clearchat') {
                if (isNoble == true || isKing == true) {
                    if (client.isOwner()) {
                        client.sendArray([{ m: "userset", set: { name: "\ufffc" } }]);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 1200);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 1500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 1800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 2100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 2400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 2700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 3000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 3300);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 3600);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 3900);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 4200)
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 4500);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 4800);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 5100);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 5400);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 5700);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 6000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 6300);
                        setTimeout(function() { client.sendArray([{ m:'userset', set:{name:"Ṃᾄʀẋ☭Bot ❤"} }]); }, 64000);
                        setTimeout(function() { client.sendArray([{ m: "a", message: "Chat cleared" }]); }, 6600);
                    } else {
                        sendchat("I need the crown for you to clear the chat.");
                    }
                } else {
                    sendchat('You can\'t use this command. Type /rank for more information.');
                }
            } else if (cmd == "/rur") {
				var math = Math.random();
				if (math < .167) {
					sendchat(msg.p.name + ", you lived.");
				} else if (math >= .167 && math < .333) {
					sendchat(msg.p.name + ", you lived.");
				} else if (math >= .5 && math < .667) {
					sendchat(msg.p.name + ", you lived.");
				} else if (math >= .667 && math < .833) {
					sendchat(msg.p.name + ", you lived.");
				} else {
					client.sendArray([{m:"kickban", _id: msg.p._id, ms: 0}]);
					sendchat(msg.p.name + " died playing Russian Rulette");
					}
				} else if (cmd == "/fact") {
                sendchat("Random Fact: " + FactArray[Math.floor(Math.random()*FactArray.length)]);
            } else if (cmd == "/quote") {
                sendchat("Random quote: " + QuoteArray[Math.floor(Math.random()*QuoteArray.length)]);
            } else if (cmd == "/test") {
                sendchat('Bot is online.');
            } else if (cmd == "/about") {
			    var now = new Date();
				var time = process.uptime();
				var uptime = (time + "").toHHMMSS();
                sendchat("This is a chat made by ✿🌿❤ ๖ۣۜḰᾄʀł☭Ṃᾄʀẋ ❤🌾✿. A big thanks to lighning, BluestaR, Lamp, and Charly.");
                sendchat(now + " || Uptime: " + uptime);
            } else if (cmd == "/loss") {
                sendchat('I II');
                sendchat('II I_');
            }
        } 
    }
});

client.on("a", function (msg) {
    let args = msg.a.split(' ');
    let msgs = msg.a.split(', ');
    let cmd = args[0].toLowerCase();
    var room = args[1];
    var msgss = msgs[1];
    var isKing = (Kings.indexOf(msg.p._id) !== -1);
    var isNoble = (Nobles.indexOf(msg.p._id) !== -1);
     if (cmd == "/msgroom") {
         if (isKing || isNobles) {
             home = client.channel._id;
             client.setChannel(room);
             setTimeout(function() { client.sendArray([{ m: "a", message: " " + msgss }]); }, 3000);
             setTimeout(function() { client.setChannel(home) }, 5000);
            } else {
                sendchat("You can't use this command. Use /rank for more information.");
            }
      }
});

function findParticipantByName(name) {
    for (let part in client.ppl) {
        part = client.ppl[part];
        if (part.name.toLowerCase() == name.toLowerCase()) return part;
    }
}
client.on("a", function(msg){
    if (!msg.a.toLowerCase().startsWith("/kickban")) return;
    if(Nobles.includes(msg.p._id) || Kings.includes(msg.p._id)) {
        var input = msg.a.split(" ").slice(1).join(" ");
        if (!input) return sendchat("Kickban who?");
        var target = client.ppl[input] || findParticipantByName(input);
        if (!target) return sendchat("Person not found.");
        client.sendArray([{m:"kickban", _id: target._id, ms: 20 * 60 * 1000}]);
    } else return sendchat("You can\'t use this command. Type /rank for more information.");
});
/*
client.on('participant added', function(part) {
    if (chatbot == true) {
        if(Kings.includes(part._id) || Nobles.includes(part._id) || Knights.includes(part._id)) {
            if (client.isOwner()) {
                if(part._id == "6e87976a11eaffcb2bdc7314") {
                    sendchat(part.name + " has entered the room. The child sacrifice begins.");
                } else if (part._id == "9c42aae508d2b93a6036a7c7") {
                    sendchat("Your leader " + part.name + " has returned. Bow down to your leader." );
                } else if (part._id == "ff63f2c918ef9cff72b057ad") {
                    sendchat(part.name + " came in my mansion and robbed it. Lets welcome that lil shit.");
                } else {
                    sendchat(part.name+''+WelcomeArray[Math.floor(Math.random()*WelcomeArray.length)]+' Lets welcome them.');
                }
            }
        }
    }
});
*/
client.on("a", function(msg) {
    let args = msg.a.split(' ');
    let cmd = args[0].toLowerCase();
    let a,b;
    if (cmd == "/math") {
        sendchat("Math Functions: /add | /sub | /mult | /div | /pow  | /exp | /atan | /atanh | /atan2 | /acos | /acosh | /cos | /cosh | /asin | /asinh | /cbrt | /sqrt | /tan | /tanh | /sin | /sinh | /string");
        sendchat("Math Key: /e | /pi ");
    }

    if (cmd == '/add'){
        let a = args[1]
        let b = args[2]
        if (args[1] == "help") {
            sendchat("Adds two numbers together. Usage : /add x y");
        } else if(!a || !b || isNaN(a) || isNaN(b)) {
            sendchat("Invalid Usage. Need help? Use /add help");
        } else {
            sendchat(`Answer: ${parseInt(a) + parseInt(b)}`);
        }
    } else if (cmd == '/sub'){
        let a = args[1]
        let b = args[2]
        if (args[1] == "help") {
            sendchat("Subtracts two numbers together. Usage : /sub x y");
        } else if(!a || !b || isNaN(a) || isNaN(b)) {
            sendchat("Invalid Usage. Need help? Use /sub help");
        } else {
            sendchat(`Answer: ${parseInt(a) - parseInt(b)}`);
        }
    } else if (cmd == '/div') {
        let a = args[1]
        let b = args[2]
        if (args[1] == "help") {
            sendchat("Divides two numbers from eachother. Usage : /div x y");
        } else  if(!a || !b || isNaN(a) || isNaN(b)) {
            sendchat("Invalid Usage. Need help? Use /div help");
        } else {
            sendchat(`Answer: ${parseInt(a) / parseInt(b)}`);
        }
    } else if (cmd == '/mult') {
        let a = args[1]
        let b = args[2]
        if (args[1] == "help") {
            sendchat("Multiples two numbers together. Usage : /mult x y");
        } else if(!a || !b || isNaN(a) || isNaN(b)) {
            sendchat("Invalid Usage. Need help? Use /mult help");
        } else {
            sendchat(`Answer: ${parseInt(a) * parseInt(b)}`);
        }
    } else if (cmd == '/pow') {
        let a = args[1]
        let b = args[2]
        if (args[1] == "help") {
            sendchat("	Returns the value of x to the power of y. Usage : /pow x y");
        } else if(!a || !b || isNaN(a) || isNaN(b)) {
            sendchat("Invalid Usage. Need help? Use /pow help");
        } else {
            sendchat(`Answer: ${Math.pow(parseInt(a) + parseInt(b))}`);
        }
    } else if (cmd == '/atan2') {
        let a = args[1]
        let b = args[2]
        if (args[1] == "help") {
            sendchat("	Returns the arctangent of the quotient of its arguments. Usage : /atan2 x y");
        } else if(!a || !b || isNaN(a) || isNaN(b)) {
            sendchat("Invalid Usage. Need help? Use /atan2 help");
        } else {
            sendchat(`Answer: ${Math.atan2(parseInt(a) + parseInt(b))}`);
        }
    } else if (cmd == '/acos') {
        let a = args[1]
        if (args[1] == "help") {
            sendchat("Returns the arccosine of x, in radians. Restrictions: x must be less then or equal to 1  Usage : /acos x");
        } else if(!a || isNaN(a) || a > 1) {
            sendchat("Invalid Usage. Need help? Use /acos help");
        } else {
            sendchat(`Answer: ${Math.acos(parseInt(a))}`);
        }
    } else if (cmd == '/asin') {
        let a = args[1]
        if (args[1] == "help") {
            sendchat("The asin() method returns the arcsine of a number as a value between -PI/2 and PI/2 radians. Restrictions: x must be within the range -1, 1  Usage : /acos x");
        } else if(!a || isNaN(a) || a > 1 || a < -1) {
            sendchat("Invalid Usage. Need help? Use /acos help");
        } else {
            sendchat(`Answer: ${Math.asin(parseInt(a))}`);
        }
    } else if (cmd == '/asinh') {
        let a = args[1]
        if (args[1] == "help") {
            sendchat("	Returns the hyperbolic arcsine of x. Usage : /acos x");
        } else if(!a || isNaN(a)) {
            sendchat("Invalid Usage. Need help? Use /asinh help");
        } else {
            sendchat(`Answer: ${Math.asinh(parseInt(a))}`);
        }
    } else if (cmd == '/atan') {
        let a = args[1]
        if (args[1] == "help") {
            sendchat(" Returns the arctangent of a number as a value between -PI/2 and PI/2 radians. Usage : /atan x");
        } else if(!a || isNaN(a)) {
            sendchat("Invalid Usage. Need help? Use /atan help");
        } else {
            sendchat(`Answer: ${Math.atan(parseInt(a))}`);
        }
    } else if (cmd == '/atanh') {
        let a = args[1]
        if (args[1] == "help") {
            sendchat("Returns the hyperbolic arctangent of x. Restrictions: x must be within the range -1, 1 Usage : /atanh x");
        } else if(!a || isNaN(a) || a > 1 || a < -1) {
            sendchat("Invalid Usage. Need help? Use /atanh help");
        } else {
            sendchat(`Answer: ${Math.atanh(parseInt(a))}`);
        }
    } else if (cmd == '/cbrt') {
        let a = args[1]
        if (args[1] == "help") {
            sendchat("Returns the cubic root of x. Usage : /cbrt x");
        } else if(!a || isNaN(a)) {
            sendchat("Invalid Usage. Need help? Use /cbrt help");
        } else {
            sendchat(`Answer: ${Math.cbrt(parseInt(a))}`);
        }
    } else if (cmd == '/cos') {
        let a = args[1]
        if (args[1] == "help") {
            sendchat("	Returns the cosine of x (x is in radians). Usage : /cos x");
        } else if(!a || isNaN(a)) {
            sendchat("Invalid Usage. Need help? Use /cos help");
        } else {
            sendchat(`Answer: ${Math.cos(parseInt(a))}`);
        }
    } else if (cmd == '/cosh') {
        let a = args[1]
        if (args[1] == "help") {
            sendchat("	Returns the hyperbolic cosine of x. Usage : /cosh x");
        } else  if(!a || isNaN(a)) {
            sendchat("Invalid Usage. Need help? Use /cosh help");
        } else {
            sendchat(`Answer: ${Math.cosh(parseInt(a))}`);
        }
    } else if (cmd == '/exp') {
        let a = args[1]
        if (args[1] == "help") {
            sendchat("	Returns the value of E^x. Usage : /exp x");
        } else if(!a || isNaN(a)) {
            sendchat("Invalid Usage. Need help? Use /exp help");
        } else {
            sendchat(`Answer: ${Math.exp(parseInt(a))}`);
        }
    } else if (cmd == '/log') {
        let a = args[1]
        if (args[1] == "help") {
            sendchat("Returns the natural logarithm (base E) of x. Usage : /log x");
        } else if(!a || isNaN(a)) {
            sendchat("Invalid Usage. Need help? Use /log help");
        } else {
            sendchat(`Answer: ${Math.log(parseInt(a))}`);
        }
    } else if (cmd == '/sin') {
        let a = args[1]
        if (args[1] == "help") {
            sendchat("	Returns the sine of x (x is in radians). Usage : /sin x");
        } else if(!a || isNaN(a)) {
            sendchat("Invalid Usage. Need help? Use /sin help");
        } else {
            sendchat(`Answer: ${Math.sin(parseInt(a))}`);
        }
    } else if (cmd == '/sinh') {
        let a = args[1]
        if (args[1] == "help") {
            sendchat("	Returns the hyperbolic sine of x. Usage : /sinh x");
        } else if(!a || isNaN(a)) {
            sendchat("Invalid Usage. Need help? Use /sinh help");
        } else {
            sendchat(`Answer: ${Math.sinh(parseInt(a))}`);
        }
    } else if (cmd == '/sqrt') {
        let a = args[1]
        if (args[1] == "help") {
            sendchat("	Returns the square root of x. Usage : /sqrt x");
        } else if(!a || isNaN(a)) {
            sendchat("Invalid Usage. Need help? Use /sqrt help");
        } else {
            sendchat(`Answer: ${Math.sqrt(parseInt(a))}`);
        }
    } else if (cmd == '/tan') {
        let a = args[1]
        if (args[1] == "help") {
            sendchat("	Returns the tangent of an angle. Usage : /tan x");
        } else if(!a || isNaN(a)) {
            sendchat("Invalid Usage. Need help? Use /tan help");
        } else {
            sendchat(`Answer: ${Math.tan(parseInt(a))}`);
        }
    } else if (cmd == '/tanh') {
        let a = args[1]
        if (args[1] == "help") {
            sendchat("	Returns the hyperbolic tangent of a number. Usage : /tanh x");
        } else if(!a || isNaN(a)) {
            sendchat("Invalid Usage. Need help? Use /tanh help");
        } else {
            sendchat(`Answer: ${Math.tanh(parseInt(a))}`);
        }
    } else if (cmd == '/string') {
        let a = args[1]
        if (args[1] == "help") {
            sendchat("Solves strings, such as (1+2(2*2)). Restrictions: No spaces in x . Usage : /string x");
        } else if(!a) {
            sendchat("Invalid Usage. Need help? Use /string help");
        } else {
            try{
                sendchat(`Answer: ${Math.eval(a)}`);
            }
            catch(err) { 
            }
        }
    } else if (cmd == "/e") {
        sendchat(" " + Math.E);
    } else if (cmd == "/pi") {
        sendchat(" " + Math.PI);
    }
});

client.on('a', function (msg) {
    let args = msg.a.split(' ');
    let cmd = args[0].toLowerCase();
    var isKing = (Kings.indexOf(msg.p._id) !== -1);
    if (cmd == "/lockdown") {
        if (isKing) {
            if (lock == false) {
                lock = true
                sendchat("Room locked.");
            } else if (lock == true) {
                lock = false
                sendchat("The room is now unlocked.");
            }
        }
    } else if (cmd == '/whitelist') { // add name to whitelist
        if (isKing) {
            var idtowhitelist = prompt("Enter name to blacklist");
            id_whitelist.push(idtowhitelist);
            sendchat("Blacklisted name: " + idtowhitelist);
        }
    } else if (cmd == '/unwhitelist') { // remove id from blacklist
        if (isKing) {
            var id2unwhitelist = prompt("Enter _id to un-whitelist");
            removeFromArray(id_whitelist, id2unwhitelist);
            sendchat("Un-Blacklisted _id: " + id2unwhitelist);
        }
    }
});

client.on("participant added", function (part) {
    if(part._id == client.getOwnParticipant()._id){
        return;
    } else if (!Kings.includes(part._id) && !Knights.includes(part._id) && !Nobles.includes(part._id)) {
        if(client.isOwner()) {
            if(lock == true) {
               client.sendArray([{m:"kickban", _id: part._id, ms: 30 * 60 * 1000}]);
           }
       }
   }
});

FactArray= ['Amelia Earhart and Eleanor Roosevelt once sneaked out of a White House event, commandeered an airplane, and went on a joyride to Baltimore.',
            'If you have the feeling youÃ¢â‚¬â„¢ve experienced an event before in real life, call it \u0064\u0065\u00cc\u006a\u0061\u00cc \u0076\u0075. If you feel like you\'ve previously experienced an event in a dream instead, thereÃ¢â‚¬â„¢s a different term for it: d\u00E9j\u00E0 r\u00EAv\u00E9.',
            'During Prohibition, moonshiners would wear "cow shoes." The fancy footwear left hoofprints instead of footprints, helping distillers and smugglers evade police.',
            'Since founding the Imagination Library in 1995, Dolly Parton has donated 100 million books to children.',
            'The 100 folds in a chef\'s toque are said to represent 100 ways to cook an egg.',
            'In curling, good sportsmanship and politeness are essential. Congratulating opponents and abstaining from trash talk are part of what\'s known as the Spirit of Curling.',
            'In 1974, the Journal of Applied Behavior Analysis published a paper titled "The Unsuccessful Self-Treatment of a Case of \'Writer\'s Block.\'" It contained a total of zero words.',
            'Guinness estimates that 93,000 liters of beer are lost in facial hair each year in the UK alone.',
            'George Washington served an eggnog-like drink to visitors at Mount Vernon. His recipe included rye whiskey, rum, and sherry.',
            'Some cats are allergic to humans.',
            'Queen Elizabeth II is a trained mechanic.',
            'Volvo gave away the 1962 patent for their revolutionary three-point seat belt for free, in order to save lives.',
            'Tsundoku is the act of acquiring books and not reading them.',
            'Ravens in captivity can learn to talk better than parrots.',
            'Bela Lugosi was buried in full Dracula costume, cape and all.',
            'Central Park\'s lampposts contain a set of four numbers that can help you navigate. The first two tell you the nearest street, and the next two tell you whether you\'re closer to the east or west side of the park (even numbers signal east, odd signals west).',
            'A teacher wrote of a young Roald Dahl on his school report card: "I have never met anybody who so persistently writes words meaning the exact opposite of what is intended."',
            'At least 10 Blockbuster stores are still operating in the U.S.',
            'Blood donors in Sweden receive a thank you text when their blood is used.',
            'Kea parrots warble together when they\'re in a good mood, making them the first known non-mammal species to communicate with infectious laughter.',
            'Long before rap battles, there was "flyting": the exchange of witty, insulting verses. The verbal throwdowns were popular in England and Scotland from the 5th to 16th centuries.',
            'Melbourne gave some of its trees email addresses so residents could report problems. Instead, the trees received love letters.',
            'An estimated 1 million dogs in the U.S. have been named primary beneficiary in their owners\' wills.',
            'At Petrified Forest National Park, visitors sometimes break the rules (and the law) by taking rocks home with them. According to rangers, they often end up returning the stolen goods in the mail along with an apology note.',
            'The Russians showed up 12 days late to the 1908 Olympics in London because they were using the Julian calendar instead of the Gregorian calendar.',
            'Maya Angelou was the first black female streetcar conductor in San Francisco.',
            'In Japan, letting a sumo wrestler make your baby cry is considered good luck.',
            'J.K. Simmons has been the voice of the Yellow Peanut M&M since the late 1990s.',
            'Count von Count\'s love of numbers isn\'t just a quirky character trait in traditional vampire folklore, the bloodsuckers have arithmomania, a compulsion to count.',
            'In Great Britain and Japan, black cats are perceived as auspicious. In the English Midlands, new brides are given black cats to bless their marriage, and the Japanese believe that black cats are good luck particularly for single women.',
            'Portland was named by a coin flip. Had the coin landed the other way, the city would be Boston, Oregon.',
            'During World War I, a Canadian soldier made a black bear his pet and named her Winnipeg. "Winnie" was later a resident of the London Zoological Gardens where she was an adored attraction, especially to a boy named Christopher Robin, son of author A.A. Milne. The boy even named his teddy bear after her.',
            'Sleep literally cleans your brain. During slumber, more cerebrospinal fluid flushes through the brain to wash away harmful proteins and toxins that build up during the day.',
            'Neil Armstrong\'s astronaut application arrived a week past the deadline. A friend slipped the tardy form in with the others.',
            'Due to the restaurant\'s reputation for staying open in extreme weather, the so-called "Waffle House Index" is informally used by FEMA to gauge storm severity.',
            'The first sales pitch for the Nerf ball was Nerf: You can\'t hurt babies or old people!',
            'The manchineel tree is nicknamed the "Tree of Death" for good reason: Touching it can leave chemical burns on your skin, its fruit is toxic, and its bark when burned can cause blindness.',
            'If drivers adhere to the 45 mph speed limit on a stretch of Route 66 in New Mexico, the road\'s rumble strips will play a rendition of "America the Beautiful."',
            'Russian cosmonauts used to pack a shotgun in case they landed in Siberia and had to fend off bears.',
            'Space has a distinct smell: a bouquet of diesel fumes, gunpowder, and barbecue. The aroma is mostly produced by dying stars.',
            'Before settling on the Seven Dwarfs we know today, Disney considered Chesty, Tubby, Burpy, Deafy, Hickey, Wheezy, and Awful.',
            'The annual number of worldwide shark bites is 10 times less than the number of people bitten by other people in New York.',
            'In 1997 a Louisville woman left actor Charles Bronson all of her money in a handwritten will, a total of about $300,000. She\'d never met him; she was just a fan.',
            'Carly Simon\'s dad is the Simon of Simon and Schuster. He co-founded the company.',
            'Ben & Jerry learned how to make ice cream by taking a $5 correspondence course offered by Penn State. (They decided to split one course.)',
            'After an online vote in 2011, Toyota announced that the official plural of Prius was Prii.',
            'At the 1905 wedding of Franklin and Eleanor Roosevelt, President Teddy Roosevelt gave away the bride.',
            'Tootsie Rolls were added to soldiers\' rations in World War II for their durability in all weather conditions.',
            'When Canada\'s Northwest Territories considered renaming itself in the 1990s, one name that gained support was "Bob."',
            'After OutKast sang "Shake it like a Polaroid picture," Polaroid released a statement: "Shaking or waving can actually damage the image."',
            'Marie Curie remains the only person to earn Nobel prizes in two different sciences.',
            'The Starry Night depicts Vincent van Gogh\'s view from the Saint-Paul de Mausole asylum.',
            'The ampersand symbol is formed from the letters in et‚ the Latin word for "and."',
            'Army ants that misinterpret the scent trails left by other ants will sometimes break from the crowd and march in circles. If enough ants join, they can form massive "death spirals."',
            'A solar eclipse helped end a six-year war in 585 BCE. When the sky suddenly darkened during a battle between the Lydians and the Medes in modern Turkey, soldiers took it as a sign to cease fighting.',
            'Wendy\'s founder Dave Thomas dropped out of high school but earned his GED in 1993. His GED class voted him Most Likely to Succeed.',
            'Both John Adams and Thomas Jefferson died on July 4, 1826, exactly 50 years after the adoption of the Declaration of Independence.',
            'Dogs are capable of understanding up to 250 words and gestures. The average dog is as intelligent as a two-year-old child.',
            'Bubbles keep your bath water warmer longer.',
            'Scientists have found evidence of take-out restaurants in the remains of Pompeii.',
            'Fried chicken was brought to America by Scottish immigrants.',
            'Peter Durand patented the tin can in 1810. Ezra Warner patented a can opener in 1858. In between, people used chisels and hammers.',
            'There are 71 streets in Atlanta with "Peachtree" in their name.',
            'Goats have rectangular pupils.',
            'The bend in a flamingo\'s leg isn\'t a knee-it\'s an ankle.',
            'In 1946, Boston owner Walter Brown chose the nickname Celtics over Whirlwinds, Olympians, and Unicorns.',
            'After It\'s the Great Pumpkin, Charlie Brown aired, Charles Schulz was overwhelmed with candy shipments sent from kids who were concerned for Charlie, who got rocks instead of treats in his Halloween sack.',
            'One of the world\'s largest stockpiles of nuclear weapons in a U.S. Navy base near Seattle is partially defended by trained dolphins.',
            'It\'s illegal for supermarkets in France to waste food. Supermarkets must either compost it or donate unsold or nearly expired goods to charity.',
            'Fredric Baur invented the Pringles can. When he passed away in 2008, his ashes were buried in one.',
            'A new baby can cost new parents 750 hours of sleep in the first year.',
            'In 1965, a Senate subcommittee predicted that by 2000, Americans would only be working 20 hours a week with seven weeks vacation.',
            'For one day in 1998, Topeka, Kansas, renamed itself "ToPikachu" to mark Pokemon\'s U.S. debut.',
            'Truman Capote said he was the only person who\'d met John F. Kennedy, Bobby Kennedy, Lee Harvey Oswald, and Sirhan Sirhan.',
            'Susan B. Anthony was fined $100 for voting in the 1872 election. She never paid the fine.',
            'Canned pumpkin isn\'t actually pumpkin. Even purees that advertise as "100 percent pumpkin" are actually made of a range of different winter squashes.',
            'When Gene Wilder accepted the role of Willy Wonka, he had one condition: In his first appearance, Wilder wanted Wonka to limp toward the crowd with a cane in hand before falling into a perfect somersault and jumping back up. The reason? Because from that time on, no one will know if I\'m lying or telling the truth.',
            'Dr. Seuss said he expected to spend "a week or so" writing The Cat in the Hat. It actually took a year and a half.',
            'The Reese in Reese\'s Peanut Butter Cups is Harry Burnett Reese, a former Hershey employee who created his famous candy in the 1920s.',
            'The plural of cul-de-sac is culs-de-sac.',
            'Apollo 17 astronaut Harrison Schmitt was allergic to moon dust.',
            'At the Gettysburg reunion in 1913, two men purchased a hatchet, walked to the site where their regiments had fought, and buried it.',
            '"Bloodcurdling" isn\'t just an expression: Research shows that watching horror movies can increase a certain clotting protein in our bloodstreams.',
            'An episode of Peppa Pig was pulled from Australian television for teaching children not to fear spiders.',
            'A group of pugs is called a grumble.',
            'Before he wrote Goosebumps, R.L. Stine wrote the jokes for Bazooka Joe wrappers.',
            'In 1998, the U.S. Army tried developing a telepathic ray gun "where words could be transmitted to be heard like the spoken word, except that it could only be heard within a personâ€™s head."',
            'In 1967, the Nigerian Civil War ground to a halt for two days because both sides wanted to watch PelÃ© play in an exhibition soccer match.',
            'Winston Churchill\'s mother was born in Brooklyn.',
            'Jim Cummings is the voice of Winnie the Pooh. He calls sick kids in hospitals and chats with them in character.',
            'Before Google launched Gmail, "G-Mail" was the name of a free email service offered by Garfield\'s website.',
            'Before the Nazis invaded Paris, H.A. and Margret Rey fled on bicycles. They were carrying the manuscript for Curious George.',
            'In colonial America, lobster wasn\'t exactly a delicacy. It was so cheap and plentiful it was often served to prisoners.',
            'Crayola means "oily chalk." The name combines craie (French for "chalk") and ola (short for "oleaginous," or "oily").',
            'Truman Show Delusion is a mental condition marked by a patient\'s belief that he or she is the star of an imaginary reality show.',
            'Cookie Monster is not changing his name. In a 2012 episode he said, "We\'ve got to stop this Veggie Monster rumor before me reputation ruined."',
            'Google\'s founders were willing to sell to Excite for under $1 million in 1999â€”but Excite turned them down.',
            'The medical term for ice cream headaches is sphenopalatine ganglioneuralgia.',
            'lthough Dr. James Naismith invented basketball, he\'s the only Kansas Jayhawks basketball coach with a losing record.',
            'Wisconsin is the Badger State because the area\'s lead miners used to spend winters in tunnels burrowed into hills. Like badgers.',
            'In 1999, the U.S. government paid the Zapruder family $16 million for the film of JFK\'s assassination.',
            'Before he became president, Abraham Lincoln was wrestling champion of his county. He fought in nearly 300 matches and lost only one.',
            'How many licks does it take to get to the center of a Tootsie Pop? The world may never know. But on average, a Licking Machine made at Purdue needed 364.',
            'Barcelona is home to hundreds of playgrounds for seniors. The spaces are meant to promote fitness and combat loneliness in elderly citizens.',
            'In Switzerland, it\'s illegal to own only one guinea pig.',
            'After leaving office, Ronald Reagan was offered the role of Hill Valley\'s mayor in Back to the Future III.',
            'Foreign Accent Syndrome is a rare side effect of brain trauma. Patients speak their native language in a foreign accent.',
            'Queen Elizabeth II has had over 30 corgis in her lifetime.',
            'Relative to their bodies, Chihuahuas have the biggest brain in the dog world.',
            'The "mystery" flavor of Dum Dums is a combination of the end of one batch of candy and the beginning of another.',
            'A banana is a berry.',
            'In 1971, a Dallas man named Mariano Martinez invented the frozen margarita machine. The 26-year-old was inspired by the Slurpee machine at 7-Eleven.',
            'In 2016, a rogue bloodhound named Ludvine joined a half-marathon in Alabama. She ran the entire 13.1 miles and finished in 7th place.',
            'The Library of Congress regularly receives requests for books that don\'t exist. The most common is the President\'s Book of Secrets, from the 2007 movie, National Treasure: Book of Secrets.',
            'In 2014, Tinder made its first match on the continent of Antarctica. Not surprisingly, both parties involved were research scientists.',
            'When times get tough, elephants will comfort each other by stroking loved ones with their trunks and emitting small chirps.',
            'A double rainbow occurs when sunlight is reflected twice inside a raindrop. If you look closely, you can see that the colors of the secondary rainbow appear in reverse order.',
            'There\'s a Nikola Tesla statue in Palo Alto that provides free Wi-Fi.',
            'The Mobile Phone Throwing World Championships are held in Finland. One winner (not pictured) said he prepared for the event by "mainly drinking."',
            'In the \'50s, Marilyn Monroe promised nightclub owner Charlie Morrison she\'d be in the front row every night if he booked Ella Fitzgerald. He agreed, and she was true to her word. "After that, I never had to play a small jazz club again," Fitzgerald said. "She was an unusual woman little ahead of her times. And she didn\'t know it."',
            'Frank Sinatra has three stars on the Hollywood Walk of Fame: one for film, one for music, and one for television.',
            'One April day in 1930, the BBC reported, "There is no news." Instead they played piano music.',
            'Continental plates drift as fast as fingernails grow.',
            'Elvis Presley\'s manager sold "I Hate Elvis" badges as a way to make money off of people who weren\'t buying his merchandise.',
            'LEGO has a temperature-controlled underground vault in Denmark with nearly every set they\'ve ever made.',
            'A reindeer\'s eyes change color through the seasons. Theyâ€™re gold during the summer and blue in the winter.',
            'An avocado never ripens on the tree, so farmers can use trees as storage and keep avocados fresh for up to seven months.',
            'At the Humane Society of Missouri, kid volunteers comfort anxious shelter dogs by reading to them.',
            'In The Empire Strikes Back, an extra can be seen running with what appears to be an ice cream maker. The character became legendary among fans, and was eventually given a name (Willrow Hood) and a backstory.',
            'Salvador Dali avoided paying restaurant tabs by using checks. He would draw on the back as the waiter watched, knowing no one would ever cash the art.',
            'China owns all of the pandas in the world. They rent them out for about $1 million a year.',
            'In season two of The Joy of Painting, Bob Ross created a monochromatic landscape for a viewer who was worried that his color blindness would prevent him from being able to paint.',
            'Bones found at Seymour Island indicate that at one time, 37 to 40 million years ago, penguins stood at a formidable 6 feet tall and weighed 250 pounds.']

QuoteArray = ['"Fuck my ass!"- Raven',
              '"Men make their own history, but they do not make it as they please." - Karl Marx.',
              '"Victory goes to the player who makes the next-to-last mistake."- Chessmaster Savielly Grigorievitch Tartakower',
              '"Happiness equals reality minus expectations." - Tom Magliozzi',
              '"Black holes are where God divided by zero." - Steven Wright',
              '"Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth."- Sherlock Holmes',
              '"I love Mickey Mouse more than any woman I have ever known." - Walt Disney',
              '"Get busy living or get busy dying." -Stephen King',
              '"Education is the most powerful weapon which you can use to change the world." ― Nelson Mandela',
              '"Don\'t cry because it\'s over, smile because it happened." ― Dr. Seuss',
              '"I live by Music on, world off. Music relates to the soul." - Raven',
              '"You have NO idea how fast my heartbeats when I see you." - Unknown',
              '"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best."― Marilyn Monroe',
              '"Be yourself; everyone else is already taken." ― Oscar Wilde',
              '"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe."― Albert Einstein',
              '"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind." ― Bernard M. Baruch',
              '"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams." ― Dr. Seuss',
              '"In three words I can sum up everything I\'ve learned about life: it goes on." ― Robert Frost',
              '"Friendship is born at the moment when one man says to another "What! You too? I thought that no one but myself." ― C.S. Lewis',
              '"No one can make you feel inferior without your consent." ― Eleanor Roosevelt',
              '"A friend is someone who knows all about you and still loves you." ― Elbert Hubbard',
              '"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." ― Maya Angelou',
              '"Always forgive your enemies; nothing annoys them so much." ― Oscar Wilde',
              '"Live as if you were to die tomorrow. Learn as if you were to live forever." ― Mahatma Gandhi',
              '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that." ― Martin Luther King Jr.',
              '"Without music, life would be a mistake." ― Friedrich Nietzsche',
              '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." ― Ralph Waldo Emerson',
              '"We accept the love we think we deserve." ― Stephen Chbosky',
              '"Insanity is doing the same thing, over and over again, but expecting different results." ― Narcotics Anonymous',
              '"I believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together." ― Marilyn Monroe',
              '"Deep into that darkness peering, long I stood there, wondering, fearing, doubting, dreaming dreams no mortal ever dared to dream before." - Edgar Allan Poe',
              '"Your deeds are your monuments." - An Egyptian tomb inscription',
              '"The Way Get Started Is To Quit Talking And Begin Doing." - Walt Disney',
              '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty." - Winston Churchill',
              '"Don\'t let yesterday take up too much of today." - Will Rogers',
              '"You learn more from failure than from success. Don\'t let it stop you. Failure builds character." - Unknown',
              '"It\'s not whether you get knocked down, It\'s whether you get up." – Vince Lombardi',
              '"If You Are Working On Something That You Really Care About, You Don\'t Have To Be Pushed. The Vision Pulls You."- Steve Jobs',
              '"People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do."- Rob Siltanen',
              '"Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough."- Og Mandino',
              '"Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That\'s The Classic Entrepreneur."- Mohnish Pabrai',
              '"We May Encounter Many Defeats But We Must Not Be Defeated."- Maya Angelou',
              '"Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do."- Johann Wolfgang Von Goethe',
              '"Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?"- Brian Tracy',
              '"We Generate Fears While We Sit. We Overcome Them By Action."- Dr. Henry Link',
              '"Whether You Think You Can Or Think You Can\'t, You\'re Right."- Henry Ford',
              '"Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing."- Helen Keller',
              '"The Man Who Has Confidence In Himself Gains The Confidence Of Others."- Hasidic Proverb',
              '"The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today."- Franklin D. Roosevelt',
              '"Creativity Is Intelligence Having Fun."- Albert Einstein',
              '"What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time."- Don Zimmer',
              '"Do What You Can With All You Have, Wherever You Are."- Theodore Roosevelt',
              '"Develop An Attitude Of Gratitude. Say Thank You To Everyone You Meet For Everything They Do For You."- Brian Tracy',
              '"You Are Never Too Old To Set Another Goal Or To Dream A New Dream."- C.S. Lewis',
              '"To See What Is Right And Not Do It Is A Lack Of Courage."- Confucious',
              '"Reading Is To The Mind, As Exercise Is To The Body."- Brian Tracy',
              '"Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality."- Brian Tracy',
              '"The Future Belongs To The Competent. Get Good, Get Better, Be The Best!"- Success Quote By Brian Tracy',
              '"For Every Reason It\'s Not Possible, There Are Hundreds Of People Who Have Faced The Same Circumstances And Succeeded." – Jack Canfield',
              '"Things Work Out Best For Those Who Make The Best Of How Things Work Out." – Positive Quote By John Wooden',
              '"A Room Without Books Is Like A Body Without A Soul." – Marcus Tullius Cicero',
              '"I Think Goals Should Never Be Easy, They Should Force You To Work, Even If They Are Uncomfortable At The Time." – Michael Phelps',
              '"One Of The Lessons That I Grew Up With Was To Always Stay True To Yourself And Never Let What Somebody Else Says Distract You From Your Goals." Michelle Obama',
              '"Today\'s Accomplishments Were Yesterday\'s Impossibilities." – Robert H. Schuller',
              '"The Only Way To Do Great Work Is To Love What You Do. If You Haven\'t Found It Yet, Keep Looking. Don\'t Settle." – Steve Jobs',
              '"You Don\'t Have To Be Great To Start, But You Have To Start To Be Great." – Zig Ziglar',
              '"A Clear Vision, Backed By Definite Plans, Gives You A Tremendous Feeling Of Confidence And Personal Power." – Brian Tracy',
              '"There Are No Limits To What You Can Accomplish, Except The Limits You Place On Your Own Thinking." – Brian Tracy',
              '"You are today where your thoughts have brought you; you will be tomorrow where your thoughts take you." - James Allen',
              '"You can\'t depend on your eyes when your imagination is out of focus." - Mark Twain',
              '"Stop worrying about the potholes in the road and enjoy the journey." - Babs Hoffman',
              '"Our greatest glory is not in never falling but in rising every time we fall." - Confucius',
              '"A man is literally what he thinks." - James Allen',
              '"A danger foreseen is half avoided." - Thomas Fuller',
              '"Finding a way to live the simple life today is man\'s most complicated task." - Henry A. Courtney',
              '"Yesterday is but today\'s memory, tomorrow is today\'s dream." - Kahlil Gibran',
              '"In the middle of difficulty lies opportunity." - Albert Einstein',
              '"Everyone needs to be valued. Everyone has the potential to give something back." - Diana Princess of Wales',
              '"Things do not happen. Things are made to happen." - John F Kennedy',
              '"Life is like riding a bicycle. To keep your balance, you must keep moving." - Albert Einstein',
              '"What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds." -Wayne Dyer',
              '"Be kind, for everyone you meet is fighting a hard battle." - Plato',
              '"Being challenged in life is inevitable, being defeated is optional." - Roger Crawford',
              '"Not everything that can be counted counts, and not everything that counts can be counted." - Albert Einstein',
              '"You cannot perform in a manner inconsistent with the way you see yourself." - Zig Ziglar',
              '"No pressure, no diamonds." - Mary Case',
              '"Our chief want is someone who will inspire us to be what we know we could be." - Ralph Waldo Emerson',
              '"Don\'t limit yourself. Many people limit themselves to what they think they can do." - Mary Kay Ash',
              '"If you want to achieve widespread impact and lasting value, be bold." - Howard Schultz',
              '"If you wish to know the mind of a man, listen to his words." - Johann Wolfgang von Goethe',
              '"Never stand begging for that which you have the power to earn." - Miguel de Cervantes',
              '"Know yourself and you will win all battles."  - Sun Tzu',
              '"For every minute you are angry you lose sixty seconds of happiness." - Ralph Waldo Emerson',
              '"There is no such thing in anyone\'s life as an unimportant day." - Alexander Woollcott',
              '"An expert is a man who has made all the mistakes which can be made, in a narrow field." - Niels Bohr',
              '"As soon as you trust yourself, you will know how to live." - Johann Wolfgang von Goethe',
              '"To conquer fear is the beginning of wisdom." - Bertrand Russell',
              '"Striving for excellence motivates you; striving for perfection is demoralizing." - Harriet Braiker',
              '"Whatever you believe with feeling becomes your reality." - Brian Tracy',
              '"We are all in the gutter, but some of us are looking at the stars." - Oscar Wilde',
              '"Management is doing things right; leadership is doing the right things." - Peter Drucker',
              '"It is not enough to be busy. So are the ants. The question is: What are we busy about?" - Henry David Thoreau',
              '"Only he who can see the invisible can do the impossible." - Frank L. Gaines',
              '"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it." - Henry Ford',
              '"If you would be wealthy, think of saving as well as getting." - Benjamin Franklin',
              '"Be like a postage stamp, stick to one thing until you get there." - Josh Billings',
              '"Everyday, give yourself a good mental shampoo." - Dr. Sara Jordan',
              '"Live out of your imagination, not your history." - Stephen Covey',
              '"Life\'s Tragedy is that we get old too soon and wise too late." - Benjamin Franklin',
              '"If at first you don\'t succeed, try, try, again. Then quit. There\'s no use being a damn fool about it." - W.C.Fields.',
              '"If you are working on something exciting that you really care about, you don\'t have to be pushed. The vision pulls you." - Steve Jobs',
              '"He who enjoys doing and enjoys what he has done is happy." - Johann Wolfgang von Goethe',
              '"Opportunities multiply as they are seized." - Sun Tzu',
              '"The human mind treats a new idea the same way the body treats a strange protein; it rejects it." - P. B. Medawar',
              '"The difference between the impossible and the possible lies in a person\'s determination." - Tommy Lasorda',
              '"He who is not courageous enough to take risks will accomplish nothing in life." - Muhammad Ali',
              '"High achievement always takes place in the framework of high expectation." - Charles F. Kettering',
              '"There is only one thing that makes a dream impossible to achieve: the fear of failure." - Paulo Coelho',
              '"There is real magic in enthusiasm. It spells the difference between mediocrity and accomplishment." - Norman Vincent Peale',
              '"Doing your best is more important than being your best." - Shannon Miller',
              '"Sometimes it is not enough to do our best; we must do what is required." - Winston Churchill',
              '"Do not let what you cannot do interfere with what you can do." - John Wooden',
              '"A ship is safe in harbor, but that\'s not what ships are for." - William Shedd',
              '"When we can no longer change a situation, we are challenged to change ourselves." - Viktor Frankl',
              '"Believe that life is worth living and your belief will help create the fact." - William James',
              '"Minds are like parachutes. They only function when they are open." - James Dewar',
              '"Better to do something imperfectly than to do nothing flawlessly." - Dr. Robert Schuller',
              '"Get your ideas on paper and study them. Do not let them go to waste!" - Les Brown',
              '"If you hear a voice within you say \"you cannot paint,\" then by all means paint, and that voice will be silenced." - Vincent Van Gogh',
              '"Even if you\'re on the right track, you\'ll get run over if you just sit there." - Will Rogers',
              '"The greatest weapon against stress is our ability to choose one thought over another." - William James',
              '"Happiness is not something ready-made. It comes from your own actions." - Dalai Lama',
              '"The time is always right to do what is right. - Martin Luther King Jr.',
              '"Be who you are and say what you feel because those who mind don\'t matter and those who matter don\'t mind." - Dr Seuss',
              '"Happiness is not a station you arrive at, but a manner of travelling." - Margaret B. Runbeck',
              '"If you take responsibility for yourself you will develop a hunger to accomplish your dreams." - Les Brown',
              '"The important thing is not to stop questioning." - Albert Einstein',
              '"It is our choices...that show what we truly are, far more than our abilities." - J. K. Rowling.',
              '"There are no secrets to success. It is the result of preparation, hard work and learning from failure." - Colin L. Powell',
              '"The best is yet to be." - Robert Browning',
              '"The tragedy of life is not that it ends so soon, but that we wait so long to begin it." - W.M. Lewis',
              '"The most delightful surprise in life is to suddenly recognise your own worth." - Maxwell Maltz',
              '"We build too many walls and not enough bridges." - Isaac Newton',
              '"If your plan isn\'t working, adjust your plan. Never give up." - Matt Martin',
              '"Trust yourself. You know more than you think you do." - Benjamin Spock',
              '"There is no greater agony than bearing an untold story inside you." - Maya Angelou',
              '"Will you look back on life and say, I wish I had, or I\'m glad I did?" - Zig Ziglar',
              '"Always forgive your enemies; nothing annoys them so much." - Oscar Wilde',
              '"It does not matter how slowly you go as long as you do not stop." - Confucius',
              '"The human mind will not be confined to any limits." - Johann Wolfgang von Goethe',
              '"Go as far as you can see; when you get there you\'ll be able to see farther." - Thomas Carlyle']


pokearray=['arm.',
           'leg.',
           'nose, boop!',
           'neck.',
           'back.',
           'eye.',
           'ear.',
           'foot.',
           'chest.',
           'ass.'
          ]

kills=['a screw',
       ' a bow',
       'a magnet',
       'a nail file',
       'coasters',
       'deodorant',
       'headphones',
       'pants',
       'a chair',
       'a hanger',
       'an ipod',
       'an outlet',
       'lip gloss',
       'soap',
       'a hair brush',
       'a credit card',
       'a blanket',
       'chalk',
       'perfume',
       'a puddle',
       'a paint brush',
       'nail clippers',
       'twister™','a slipper',
       'a USB drive',
       'a pair of glasses',
       'a computer',
       'a cell phone',
       'a box',
       'some clothes',
       'a lamp shade',
       'a buckel',
       'eye linertable',
       'a washing machine',
       'a zipper',
       'teddies',
       'a door',
       'a bed',
       'video games',
       'socks',
       ' street lights',
       'a key chain',
       ' tooth picks',
       'an eraser',
       'a sketch pad',
       'a keyboard',
       'a sandal',
       'a piano',
       'a clay pot'
      ]

knifes=['butterfly knife',
        ' long sword',
        'dagger',
        'Boning Knife',
        'Bread Knife',
        'Butcher Knife',
        'Breaking Knife',
        'Chef\'s Knife',
        'Cimeter',
        'Cleaver'
       ]

sreason=['the FBI was after them',
         ' they were sad',
         ' gave a bad hand shake',
         ' forgot to flush',
         '"It\'s the  Best way to make sure I\'m not dead already."',
         '"They\'re waiting on me down below to start the party."',
         '"The cost of living rises, but death remains affordable."'
        ]

ureason=['they ate my oreos',
         'they stole their walmat gift card',
         'they said they were fat',
         'they told someone who their crush is',
         'The bartender put Clamato in their beer when they wanted tomato juice',
         'they were wearing a bulletproof vest, they still died'
        ]

slapitem=['20in dildo',
          'the Holy Bible',
          'pattle ',
          'large mouthed bass',
          'rubber glove',
          'pillow pet\u2122',
          'sandale',
          'belt',
          'small dog',
          'dish rag',
          'small automotive'
         ]

fights=['won!',
        'lost, boo!'
       ]

rps=['Rock!',
     'Paper!',
     'Scissors!'
    ]

/*WelcomeArray=[' walks in with a big smile. Unfortunately, their pants are unzipped.',
              ' flies through the door, destroying the thriving weed farm. This is the third time this week...',
              ' joins the club. Time to party!',
              ', the manager of this establishment, walks in swiftly with their briefcase.',
              ' enters the building. Everyone, act natural. ',
              ' smashes through a window on a out-of-control hose. ',
              ' waltz into the room. Get it waltz, because ... oh forget it.',
              ' bursts thought the wall dressed as the Kool-aid man. "OH YEAH!!!"',
              ', you\'re late, get to work, slave.'
             ]
*/
FoodArray = ["a bowl of spaghetti",
             "some chicken strips",
             "some watermelon",
             "a yellow tail",
             "a loaded sweet potato",
             "a belgium waffle",
             "a roll","shrimp",
             "a s'more",
             "a chorizo",
             "a corndog",
             "a frisco melt",
             "a loaf of bread",
             "a balanced breakfast",
             "a tub of ice cream",
             "a fortune cookie",
             "a bowl of lo mein",
             "a ripe mango",
             "a bowl of ravioli",
             "an eggroll",
             "a bag of gummy bears",
             "a bag of stale cheetos",
             "a stack of pancakes",
             "Gramdma's cookies & pie\u2122",
             "a boston creme donut",
             "a wheel of cheddar cheese",
             "a bin of mozzarella sticks",
             "a platter of buffalo chicken",
             "a bowl of cereal"
            ]

TasteArray = ["tasted like dirt",
              "was quite dry",
              "was very spicy",
              "was freezer burnt",
              "reminded them of their mothers cooking",
              "was amazing, Gordon Ramsay would be proud",
              "tasted like chicken",
              "had gone bad",
              "was to hot to enjoy",
              "was poisoned",
              "wasn't the spaghetti I asked for",
              "tasted bland",
              "was mediocre",
              "was far too salty",
              "was a bit tart",
              "tasted rancid",
              "was full of snot. Zoo-Wee-Mama",
              "was pretty goo... AHHHHH IT BURNS HELP",
              "was uncooked",
              "was burnt",
              "was very greasy",
              "was covered in may-o"
             ]




