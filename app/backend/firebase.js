const admin = require('firebase-admin');


const serviceAccount = require('C:\Users\Vimeth Vansilu\Desktop\SDGP\Fixup\fix-up-new-firebase-adminsdk-fbsvc-31cbb39283.json');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount), 
});

console.log('Firebase to Admin SDK Initialized');
