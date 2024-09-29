const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0xsRmU3TGJSNS92Q2hNMExaeUQxQ2F3TlBQdzNQOGNJLzNwaG9vZzduUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRk5qenpSeUFGMTR4UWZjcnl3NnpVOWt0WVd1NVA4a05RMit4TGUzZGR6ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RWoxZW5RMVZITlJKVmlTZTc4amMxeHAxVTdqUlVUK1l2ME85aC85VDJRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzRS9WY2xuNzRjNkI0YUVtY2ZJdDdNamhpdldCMDVEZ2NWbkhSM1h4V3kwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFKckFSVmlSRWpHRkUwVC9JN04vb0tSNTUwTldvWkVJWnQ5V2xMN3NOM1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp0TkVNdFZydyt1RDkvT2tESVRWVUI1a212M3RxeDdRcFk4STFZNVVWVjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUhiK0F4Ni9VRk42c21CVWlkUCtvbEExblFiUncxbVJsYUtQTi85Zk4xOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDNkVjlvK3BPRUVSS1pubmZJenVWUmZGQmExZmxNb3kvSjlPUllrb3BTaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkovQ0tlQmFybWVJcGc5N3M0THNCV2tBVm40VzNBN2JJTXFzcEtaZkE5V0Y5d1VGVzdITitoQzlXM1ZzOXZDcnNmZkxvb1EvVXo3QU50cWhiTW9yVGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiJhTVdtd1V0ZDZqUEh0OFhVdit4RElNcnVoZ1hBYlpoQ1F6QUNlckV0SlF3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUa2xVblFDYVRILXpLRXFrclcwNVB3IiwicGhvbmVJZCI6ImI3YTg1MWFjLWY0YjMtNDk1NC1hMTE3LTBiZWMxOTdmNDJjMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5dENQd2dYT1ZxLzNKblg4TnltVmlLc2Y2ZVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmtXUkFpUFljbjUxckN6Q3hHN3o2UXA0RHVrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iko2MThFWFhOIiwibWUiOnsiaWQiOiI1MDkzNDk2MDMzMTo0NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZmz8J2aiPCdmbHwnZqILfCdmoPwnZm08J2ZsvCdmbcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lTbnR1SUdFSnZtM0xjR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im9taGFxRUhnWTVSc3pUWGpMYi95MXZEd3JQTlRkMzlSemhzR2JValc0UmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVjaXZYUWtKNmU5UGMyanhxblV5RnQ1M1JYVEdXaG1MOGZNc3BIcTRPN3dmWC9HMHZva045R3NiUG45UXRDUnM4eUtXejlNQ3ZEYi8yVWswRmdaK0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRNGxMeGNXRVovbXpzMlc1eGpJeFl1R2RPQlJRcXpYSlFjWG1nSG1rVFN6MzZoSnZYWFJPSWsxVTZXVW1YVW4zWm1UcGNjWlFkb3lhSFcyVUFwVENndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTM0OTYwMzMxOjQ2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFKb1dxaEI0R09VYk0wMTR5Mi84dGJ3OEt6elUzZC9VYzRiQm0xSTF1RVgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc0NzY1MjAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSWc0In0=' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '50934960331' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Dyby-tech': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || true  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'public' ,
ANTI_LINK: process.env.ANTI_LINK || true  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_DELETE_TIME : process.env.BOT_DELETE_TIME || '8',
SECONDS_MINUTES_DAYS : process.env.SECONDS_MINUTES_DAYS || "days",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
  
};
