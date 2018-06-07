var telegram = require("telegram-bot-api");
var api = new telegram({
 token: "584447578:AAFbUi9CX_DZuzERa_0flwCAialR7SGZj3M",
 updates: {
  enabled: true,
  get_interval: 1000
 }
});

//봇에게 메시지가 도착했을때 이벤트 핸들링
//Event handling when a message arrives in the bot 
api.on('message', function(message){

 //채팅방 고유 아이디
//Chat room unique ID
 var chatid = message.chat.id;

 //유저명 (성+이름)
//username (firstname + lastname)
 var username = message.from.first_name + " " + message.from.last_name;

 //문자열로 변환된 메시지 (string)
//Messages converted to strings
 var msg = message.text ? message.text : "";

  //메시지 핸들링 예제
  //Message Handling Example
 if(msg == "hi"){
  sendMessage(chatid, "hi");
 //If you send bot hi, bot will send me hi too.
 } else if (msg == "name"){ 
//check my name
sendMessage (chatid, username);
} else if (msg == "img"){
//send img
sendImg(chatid, msg);
}
});

//sendMessage Method
function sendMessage(chatid, msg){
 //chatid는 Chat Unique id, msg is message (string)
 api.sendMessage({
  chat_id: chatid,
  text: msg
 });
}
//sendImg Method
function sendImg(chatid, imgurl){
api.sendPhoto({
chat_id: chatid,
photo: "/path/" + imgurl + ".jpg"
});
}