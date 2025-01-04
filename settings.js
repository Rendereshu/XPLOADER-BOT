  //project_name : XＥꜱʜᴜ-BOT
// @author : Eshan kavishka
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : Dark-Xploit
// @tiktok : eshu_nvrdie_official 
// @whatsapp : 94789119916
//*
//* 
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//=================================================//
global.SESSION_ID = process.env.SESSION_ID || 'XPLOADER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVAyeVM1NjBVZmxWalJQYlFySnNGRW8yMkZBZVNWY0NmWi9BWmo0dlMxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEZPcWNYM1NyOVFzZG9EMEExYWQxR2gxT04vUzh6WU9FT1hKRmRHTVRuND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzT1R4bVZiZnRONzlTMWEvSHhmWlF1cTdGVjlMenVtUzRXbHZMdzhSdjI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiWFdkdm9id3hOZHpzakJuNHZTU28zcVNLWStENDRudnhiWDlIT0pZMDFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJJU1R0MXY5Q3hEVFVRQ0lBY09jR1Nna1kvK1VXWldib0tvejJia0NpSG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZmZUR0RHdwM2pFdVJGd3dabmVoaENaOUpJcDZWcm85SWhyNmdacXlSRzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkl5V2NKei9ORXhUVDhCbW1qcWQwTlhIaGY2YUlyY2t6N05xNmNWY1lGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWk9ZNWtqSXpSOVdwSXpGclByYVVlM2tCQWxyZVNTR004cjhKanFEQkZnYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBVeXVnUm54VWQvbjRJTG9GdUpuU295emZma0xUTEhQK05rb3NPaVpPQW1LTFdBOGdMeFErR2JHaThCUkFjNExMYWE5LzBtQ1hEZjVhd2JValhGZUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTgsImFkdlNlY3JldEtleSI6IkNRUUFoWFZPK3hFQnRuT0xJbDlJV0FDZ0I2cm5DN3hSZHdUVlZDejhJZ3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlJIM3BBZjJNUU1HaHhaRk5aUVc0QUEiLCJwaG9uZUlkIjoiMWEzOGFkZTEtMWU1Yi00OTI0LWJmNzQtNzZhMmRhMmQxMDk2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNLUWFIWFpMU1FMTXlLOXI0a0xiRFZteTJMTT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHJWT1huVmhYRGZNSTJabTZGWTJxcTZ3NC9FPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkQzOVBBSEVKL200cnNHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSzFzQmNNdnRHTU9BWnZqWDd1VjRNMUFIMTVEZDVqdURReWUrc3FjSzJBaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidW82NjNlUGNDSHZ2SitBSTdCWnl5dUdKWWFXc1lFMUxqdWVicE1IQ3pSdnZkSnU0SmVBVTRUWmdxWkNhZE96MzJVTG1kT3IxVXYwbEpmandETGtvRHc9PSIsImRldmljZVNpZ25hdHVyZSI6Im12eC9tN0Q2SUllbFFDTm9QZE9HMWxlRU8rdURscWtxOUNpQ0FpWVVSU24raDVMWUhqMnNHaFR5aGxtTnR4RUhhazl0NTBMZy9uWEViK2ZpM2hudEF3PT0ifSwibWUiOnsiaWQiOiI5NDc4OTExOTkxNjoyNEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0MjczMDg5MDA3MjEyNToyNEBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODkxMTk5MTY6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU3RiQVhETDdSakRnR2I0MSs3bGVETlFCOWVRM2VZN2cwTW52cktuQ3RnSiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTk2MzQzNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDQ2cifQ==' 
//Enter your Xploader session id here; must start with XPLOADER~

//=================================================//
global.botname = process.env.BOT_NAME || 'XＥꜱʜᴜ-BOT' 
//Your desired bot name

//=================================================//
global.ownernumber = process.env.OWNER_NUMBER || '94789119916' 
//Type your number here

//=================================================//
global.ownername = process.env.OWNER_NAME || 'Eshan kavishka' 
//Type your name here

//=================================================//
global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg=="

//=================================================//
global.wm = process.env.GL_WM || "XＥꜱʜᴜ-BOT"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "XＥꜱʜᴜ-BOT" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "Eshu bot" 
//The sticker author name

//=================================================//
global.urldb =process.env.MONGODB_URL || ""
// just leave blank or enter a mongoDB url

//=================================================//
global.xprefix = process.env.PREFIX || '.' 
//Set your desired prefix

//=================================================//
global.mode = process.env.MODE || 'public';
// Set to 'private' to enable private mode, otherwise default is 'public'

//=================================================//
global.hituet = 0 
//=================================================//
global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'true'

//=================================================//
global.autoreactstatus = process.env.AUTO_STATUS_REACT || 'true'

//=================================================//
global.anticall = process.env.ANTI_CALL || 'true'

//=================================================//
global.welcome = process.env.WELCOME_MSG || 'true'

//=================================================//
global.statusemoji = process.env.STATUS_EMOJI || '🗿'
//Set the emoji that you want to be reacted to status

//=================================================//
global.timezones = process.env.TIMEZONE || "India/Standard" 
//Don't edit this if you don't know!

//=================================================//
global.countrycode = process.env.COUNTRY_CODE || '94' 
//set your country code for functionality of blockforeign and antiforeign commands

//=================================================//
global.autoblockforeign = process.env.AUTO_BLOCK_FOREIGN || 'false';
// Set to 'true' to enable automatic blocking of foreign numbers

//=================================================//
global.gcantiforeign = process.env.GC_ANTI_FOREIGN || 'true';
// Set to 'true' to enable automatic removal of foreign numbers from groups

//=================================================//
global.autoread = process.env.AUTO_READ || 'false';
// Set to 'true' to enable automatic reading of messages

//=================================================//
//=================================================//
global.menustyle = process.env.MENU_STYLE || '2' 
// options 1, 2, 3, 4 or 5
// 1 = Document menu(Android only)
// 2 = Text only menu(Android & iOS)
//3 = Image menu with context(Android & iOS)
//4 = Image menu(Android & iOS)
//5 = Payment menu

//=================================================//
//Replies
global.mess = { 
  limit: '*Your limit is used up!*', 
  nsfw: '*Tell the admin to enable NSFW first!*', 
  done: '*Done*', 
  error: '*Sorry, I cannot perform that action!*', 
  success: '*Success XＥꜱʜᴜ*', 
  premium: '*Only premium users can use this command!*', 
  owner: '*Apologies, only my owner can use this command!*', 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}
//=================================================//

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})
//=================================================//
