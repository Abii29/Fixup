const admin = require('firebase-admin');
const serviceAccount = require('./config/fix-up-new-firebase-adminsdk-fbsvc-31cbb39283.json');  

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

console.log('Firebase Admin SDK Initialized');
