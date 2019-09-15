var admin = require('firebase-admin');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bcrypt = require('bcrypt');
// admin.initializeApp({
//     credentail: admin.credential.applicationDefault(),
//     detabaseURL: 'https://try1-233916.firebaseio.com/'
// });
  
  // admin.initializeApp(firebaseConfig);


//NOT FINISHED
router.post('/', async (req, res) =>{
    const {error} = validate(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }

      var db = admin.database();
      var ref = db.ref("server/users");

// Attach an asynchronous callback to read the data at our posts reference
    ref.on("value", async (snapshot) => {
        result = snapshot.val();
        console.log(result);
        let userName = req.body.userName;
        console.log('result: '+ JSON.stringify(result[userName]));
        const pass = result[userName].password;
        console.log('result pass: ' + result[userName].password);
        
        const salt = await bcrypt.genSalt();
        pass = await bcrypt.hash(pass, salt);
        const validPassword = await bcrypt.compare(pass, req.body.password);
        if(!validPassword ) return res.status(400).send('Invalid email or password');
    
    //return result[userName].password;
    }, (errorObject) => {
    console.log("The read failed: " + errorObject.code);
    return res.status(400).send('Invalid input or server err');
    });
    db.goOffline();//close db connection
    const token = jwt.sign({ email: req.body.userName}, "somePrivateKey");
    return res.header('x-auth-token', token).send(req.body.userName);
    //await sleep(2000);
    // const salt = await bcrypt.genSalt();
    // console.log("salt is: "+salt);
    // console.log("response is: "+ response);
    // //responseJSON = JSON.parse(response);
    // console.log("response.pass is: "+ response);
    // response.password = await bcrypt.hash(response.password, salt);
    // const validPassword = await bcrypt.compare(req.body.password, response);
    // if(!validPassword ) return res.status(400).send('Invalid email or password');
    // const token = jwt.sign({ email: req.body.userName}, "somePrivateKey");
    // res.header('x-auth-token', token).send(req.body.userName);   


    //   var ref = db.ref("server"); 
  
    //   //add new user info to db
    //   let response;
    //   //var userRef = ref.child("users").child(req.body.userName);
    //   var userRef = ref;
    //   response = userRef.on("value", (val)=>{
    //       console.log(val);
    //       return val;
    //   }, (error)=>{
    //       console.log("Firebase read error: "+ error.code);
    //       return res.status(400).send(error.code);
    //   });

    //   return res.status(200).send(response);

})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function validate(user){
    const schema = Joi.object({
        userName: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).required()
    });
    return Joi.validate(user, schema);
}

module.exports = router;