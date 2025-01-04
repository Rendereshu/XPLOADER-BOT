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
global.SESSION_ID = process.env.SESSION_ID || 'XPLOADER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUFoUUorTEc3M0M0cnMzYXJPSnFUUUk5VjJWUkI5OW9sS0RqMEZ3UHNHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUc3VnhJU1E5YUxlRGNEQ3o2VFQ2MTA0RVVMeHk1WWFvWDdPTFYremFYST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRnBwWjBSMlV6YkM3NmJZT1NnL0FibHl5US9iT092ejR6MGpPd25yKzBVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoSUkzQ04vRWs1ZVlyRE8zQUhtbG53azA1RnB2OUJ0bFlLNkFleFBpc3hjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNLTHlsK0YzKzdnMlpacXR2cUVtZ3F0NlNqZENqbCtSV01GUVhoN1hSbjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJxTDNzMVVIK3E4Um5jUG0yS1BNcXFkd0c4cmZGRDh0emRIZE94WHVZazQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0hzVU8vd2tEUFdhU3FUb1FtSDdlcVE0alRWdjZRbUZtQU5PV3grRHcxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjJzMGJxcXRacitTL2JOelUzN0Z5elprcFlmMTEzWm1lNUVUMkVTcDhCTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlSVWNIVTJka1BDMlBrMVRrTGRWWmhxWTV3bUhtMTY5WThlKzY2WjRwaWFKWHM3emQvWlNoNlc2WUJJcHVVU29DTTUzaXZ3YWFVSi8vWW5lM0NVOGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiMmRNZ1FqSmN5WXc5S3BJbE40VVpYcll5eGJQOGtqM1hkMmtHbFJwS3ZKYz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicVZHWm9OTzJTdmV5VDQ4NnZzemNhQSIsInBob25lSWQiOiIwMTY0MWEzYy02NGNhLTRhYWQtYjMxZC03M2U0MjEwYzM2YTgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGZ3VGx0Q2x2Ukc4RUJTZzliUjdMbFE4dXNRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik91SHFFS3BxNFZSaTZkeExBNTJEWTRBZlFJOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNVkUyUDNQWiIsIm1lIjp7ImlkIjoiOTQ3NTgxNzgzNDA6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi77yl6pyxypzhtIDJtO+jv+OFpOG2psui4bamIiwibGlkIjoiMjAwOTEwNTAwMjkwNzY2OjEwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTNnZ0lFQkVMYjB6YnNHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWlVDcEtiNXBSMldzbjU1bkhNeWIzYk0wUkNNYUhEcXYyZmFadGJlRlZSST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaHlDOHIxQitCTjAwZU0zMFAwOWdpbVI1NEo1QytqTFRsNTFyQjgyc0lUS2RaZkxaWU1MVCtrZHJMVmJJTmowYXAvN1kzclBObk81eHJuQWh6Q3UzQnc9PSIsImRldmljZVNpZ25hdHVyZSI6ImFQQXpxblcySC9LT1ROY010amd2aUlCRVc2K0JwUXZvNzZFZzkyZVAzdTNESDhubjcrM1BZZjB5VFo2TWIxaktmaDcwMTNRZUVibk16QTFTaEtlYWh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTgxNzgzNDA6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1ZBcVNtK2FVZGxySitlWnh6TW05MnpORVFqR2h3NnI5bjJtYlczaFZVUyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTYyMTE4NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPZ0MifQ==' 
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
global.author = process.env.STICKER_AUTHOR_NAME || "Eshan whatsapp bot sticker" 
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
