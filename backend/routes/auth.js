var admin = require('firebase-admin');

admin.initializeApp({
    credentail: admin.credential.applicationDefault();
    detabaseURL: 'https://try1-233916.firebaseio.com/'
})