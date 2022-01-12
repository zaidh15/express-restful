(function(){"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

//UNIX=1641979735055
//APP_KEY=RwkON5FHxXkqUn1d5I67D_iV5-T5ZPWcWK6GOajCOUYbb8TSAVCQXpbRzrrcfMj4zMmzks_fFE3snx79nK4VZw