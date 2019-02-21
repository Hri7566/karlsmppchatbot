var temporaryclient = new MPPClient('ws://multiplayerpiano.com', undefined);

 
setTimeout(() => {
        client.sendArray([{ m:'userset', set:{name:"Ṃᾄʀẋ☭Bot ❤"} }]);
    }, 100);

    (function msgroom (room, msgss) {
    var room = args[1];
    var msgss = msgs[1];
    temporaryclient.start();
    temporaryclient.setChannel(room);
    setTimeout(function() { sendchat(" " + msgss) }, 10000);
    setTimeout(function() { temporaryclient.stop() }, 15000);
 });