  //project_name : XPLOADER
// @author : TYLOR
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
global.SESSION_ID = process.env.SESSION_ID || 'XPLOADER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUZzVDY4anhDZEM2VmpGdmo1SWVZOUViRTR4N2ptZWhsejVQZEhPMXUxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNSsrTEtiaFRhTHlWY1hXbllaaUFpSURvR1J1MzFRWlhLSW9ncTQ0YlVoTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TVMvYWZqNEk2eHI0M25ySUlZUUdyRnNhMzVtb0lKeERVaXhvdTdZd2tNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqZVRsc080VXprQ3QxQXZLeWg0WFZsY2tSK1dlem5KRWVUWDZQNDZPZWxVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFCUVRadncrQnBVdDRTQXR0YzFDbkxKRk41ckFRemJ4SnFOclNCbmNnbG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllQQ3o0cC9ySTd5bVRpZWdCUS9WQzdXWXB4ZXZ3L3c5UXFYanRrYmM1MFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEw1N2Z0U1ViQlBNVzJtYjR6TlVHWFg4WmNPZkRJTzhUbmV5SVRjV1RGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHNVTWtySVVsYTlDTTQwNzZVWm5xenh6SVJoQ1BIYVFSVUpuUnpOeTNodz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY2bTRZSDZRa1F4TDJYWFNXY05ncXYzRG9MVUQxTVhGVGo2N0NOT3NkNlFlOTVXV0pCV0ViR3FJY1p6N2JleUdHQVlwL3pMZTU1c1lqRDlVZmZ4bmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6ImsrUFJDQVIvMHJqK20vTC85QXUvOVJtTWZEcGRrNUgrL0RWSFp3K0pYVXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InFWQVdCNnNhVDZ5WkJqZDdsQzd4dnciLCJwaG9uZUlkIjoiZjYxODRkNjAtYWVhOC00OGE5LWJmODAtZDRhZjlkNWVjZDY2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inkya1V3dEcyZjJ5SjlQUFRaZTEzUVJQaHhaZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3czl3RnVHQVVJb1Q2YmE0alIxbnAyK1BIeHc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWUhGTENTR0UiLCJtZSI6eyJpZCI6Ijk0Nzg5MTE5OTE2OjE5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTQyNzMwODkwMDcyMTI1OjE5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkQzOVBBSEVNN2J6YnNHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSzFzQmNNdnRHTU9BWnZqWDd1VjRNMUFIMTVEZDVqdURReWUrc3FjSzJBaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYWkxSWV4Z09aK1pCbG43TDN2U3RlTDRZenpSWVJvdWQyVk4vZ1BaWTZjdHBsUjBIUXVkeSs4T3Yzdi9xelpESXlNL205aUdnQkMwWU1HM1Izb0doQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkJNMERkd1FHMmlqajUxVnlZbTdlNHJXNi9aaklIbUlxck9pOGNFcUpHL1lNUEJ4Q0pTMWJtL2ZiTW96Q0d5NjNEdDNlbTNpbmh1R3hRTStCUHdjbmhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODkxMTk5MTY6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU3RiQVhETDdSakRnR2I0MSs3bGVETlFCOWVRM2VZN2cwTW52cktuQ3RnSiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTYxODAxMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDQ1kifQ==' 
//Enter your Xploader session id here; must start with XPLOADER~

//=================================================//
global.botname = process.env.BOT_NAME || 'XＥꜱʜᴜ' 
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
global.wm = process.env.GL_WM || "XＥꜱʜᴜ"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "XＥꜱʜᴜ" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "EshuBot" 
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
global.timezones = process.env.TIMEZONE || "India Standard Time" 
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
  success: '*XＥꜱʜᴜ*', 
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
