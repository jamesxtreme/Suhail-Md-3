const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_23_05_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc3LFxuICAgICAgICA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMsXG4gICAgICAgIDc4LFxuICAgICAgICA2LFxuICAgICAgICA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAyNCxcbiAgICAgICAgMixcbiAgICAgICAgMTg3LFxuICAgICAgICA2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTksXG4gICAgICAgIDkwLFxuICAgICAgICA0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDYwLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDYyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MixcbiAgICAgICAgNjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAwLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDczLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgODYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2LFxuICAgICAgICA1OCxcbiAgICAgICAgMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjksXG4gICAgICAgIDY5LFxuICAgICAgICAxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDU5LFxuICAgICAgICA3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaUNvdkVtWUpXZ1JzNW9pMStHcENaQzYrMERVM0dCYlUwWFZTN2UyS1ZYbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzYyMzQ1MjAxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0JCODhBNzBCMDc1RjFFM0VEMEM3OTc5OEY4QTBBMzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ3MzcyOTgzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkROamhURVlEUUk2cW42WHRscW9sVEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmVhOTMwNmQtYjYwOC00MWY4LTg2YzUtYzI3NWFjNTQ1Njg5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDE2LFxuICAgICAgMTQzLFxuICAgICAgMTU2LFxuICAgICAgNDIsXG4gICAgICAxMTcsXG4gICAgICA4OSxcbiAgICAgIDk3LFxuICAgICAgMjE4LFxuICAgICAgMTgsXG4gICAgICAxMTAsXG4gICAgICAxNzEsXG4gICAgICAzMCxcbiAgICAgIDI4LFxuICAgICAgMjM5LFxuICAgICAgMjQzLFxuICAgICAgMTAwLFxuICAgICAgMTExLFxuICAgICAgMTE0LFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICAxNzAsXG4gICAgICA1NSxcbiAgICAgIDE1MSxcbiAgICAgIDI0NyxcbiAgICAgIDU2LFxuICAgICAgMjQsXG4gICAgICAyNSxcbiAgICAgIDE0MyxcbiAgICAgIDE4NyxcbiAgICAgIDE2MSxcbiAgICAgIDE5NixcbiAgICAgIDE0OSxcbiAgICAgIDE1OSxcbiAgICAgIDQsXG4gICAgICAxMTgsXG4gICAgICAzMSxcbiAgICAgIDUzLFxuICAgICAgMTIsXG4gICAgICAyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09HNWlQUURFSytYbThFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN0dkdEhjRjQ3ZUNENnRFOHdrZjVJTWE4cWVQYU5mcGZIczFmbjJJaXJnWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnV1BtUUl0c0pnR3ZpU2RDWHpVYWNsQm9zeTN1bGExUGNPTUlGbW40U3c2T2tPenl4TjNFMW95TVkvMGc2eDlOTHhvdjRxYTVocXU2Y3ZtbWk2c0tEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoYlI3YnA0eWNwbFdySWlTSTN1akFIRWZ4Z21Ya00xdUlLRnJCdzBTdEU2S0poZUZldWt4eWUrd2c2clA1YjdOSjFpcG1vY0FKd2ZkSVptZFNUcVJqQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NjIzNDUyMDEwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNDk5NTcwNDMxMjAzMjoxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc2MjM0NTIwMTA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NzM3Mjk3OFxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
