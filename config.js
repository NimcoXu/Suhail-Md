const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256759518998";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_26_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzksXG4gICAgICAgIDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgsXG4gICAgICAgIDk5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDExLFxuICAgICAgICA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMTc2LFxuICAgICAgICA4NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NixcbiAgICAgICAgNDAsXG4gICAgICAgIDg3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDM0LFxuICAgICAgICA1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDczLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDExLFxuICAgICAgICA2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg1LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1aDlpMTI1YUxidWlydDQ2Q2NZQ25JQ2pmTjNPcmE3bEcrWUMwWW5sOXRvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5VTdGLVN5Y1JIdTdmZG5PeGtrajdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFkMzM5NjAzLTEzMmYtNGEwYS1hOTJhLWZjY2VhM2RhNjM1OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgMTc0LFxuICAgICAgNjgsXG4gICAgICA5MyxcbiAgICAgIDExMSxcbiAgICAgIDE2NSxcbiAgICAgIDUwLFxuICAgICAgODYsXG4gICAgICAyMjksXG4gICAgICAxNDcsXG4gICAgICAxNDUsXG4gICAgICA3OSxcbiAgICAgIDE0NSxcbiAgICAgIDczLFxuICAgICAgNzYsXG4gICAgICAxMjgsXG4gICAgICA3NixcbiAgICAgIDIwMixcbiAgICAgIDE5MSxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MSxcbiAgICAgIDgxLFxuICAgICAgNjUsXG4gICAgICAzNixcbiAgICAgIDYwLFxuICAgICAgOTksXG4gICAgICAzLFxuICAgICAgMzgsXG4gICAgICAxODUsXG4gICAgICAyNDksXG4gICAgICAxMDIsXG4gICAgICAzNCxcbiAgICAgIDU2LFxuICAgICAgMzcsXG4gICAgICAxNjksXG4gICAgICAxMzcsXG4gICAgICA5MixcbiAgICAgIDIzNCxcbiAgICAgIDg1LFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJCTlQ0NDlBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NTk1MTg5OTg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk2MDY5OTIxMTYxMjM5OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVg3am9NQ0VPRFRvN1VHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvZGpxVnkyU0tqbXRKdTQ3dFhHOFB6Y3RaQTlkTUFoSGRBbGdjdEEwZ0g4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJaK2kyU3R0ZlExcStLUHJDYitucEl1N0tKd01LVkljTGJqQ21aYnRiV3BUaGhsMEY3WndaOWhLL1FUU1hxbjAwblh4MER5aE54TjNWQk56Z20zQkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZiNjVmKzcveHNrZFFmaExXK0VGQzRqQUIrdy8wakd5dzhUK01Tc1ZwMkZRNGhhbTN6TERUemhhNXdDUTlUS1VOeUY4VEl1eWhIM0RSZktvWFd6aEFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc1OTUxODk5ODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzNDU5NTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMU0dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxTRy5qc29uIjogIntcImtleURhdGFcIjpcIlNiMjloaC8yZlpmUUp3N2pHSUM2RFFWWi9ma2MvT0doa2JaTk5yTmVzSGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTQzNDA3NTU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIxNzI0MTU0MTlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "M    O    H   A  A  N🇩🇪🤤🌴✌🏿",


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
