const express = require('express');
const router = express.Router();
const request = require('request-promise-native'); // use Request library + promises to reduce lines of code

const simpleHashTable = require('simple-hashtable');


const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiNjU0MWQyNjQtMTgwZS0zNTVkLTg2ZmUtMGJiNjNmYmRmMmRiIiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiIyODA5YmQzMC03N2I5LTQ4ZTItYjVmYy1lZjQ2NTgxMmQ4YjIifQ.syA-Drtn7SFiiZJv_apCF7hIMMjqYVMH5yID449JLws";
router.use(express.urlencoded());
//const initialCustomerId = "cad31095-cae1-49f4-bea8-78c42e2d92b7";

function handleError(err) {
    let outErr = err;
    if (err.response) {
      if (err.response.body) {
        outErr = err.response.body;
        console.dir(outErr.errorDetails);
      } else {
        outErr = err.response;
      }
    }
    console.dir(outErr);
    process.exit(1);
}

function options(method, uri, body = null) {
    return {
      json: true,
      body: body,
      uri: 'https://api.td-davinci.com/api/' + uri,
      method: method,
      headers: { 'Authorization': apiKey }
    };
  }





router.get('/:customerId', async (req, res)=>{
    console.log('Hello world');
    //return res.status(200).send('hi');
    const id = req.params.customerId;
    if(!id){
        return res.status(400).send("please include customer id");
    }
    console.log('the customer id is : '+ id);

    const filterArray = await request(options('GET', 'customers/' + id + "/transactions"))
    .then((resp) => {
    
      var x = [];  
      //console.log("asdfasfs " + resp.result[0].id);
      var hashTable = new simpleHashTable();
      //getting a bunch of tranid
      for(var i = 0; i < resp.result.length;i++){
       let tmpLocation = {
         "longitude": resp.result[i].locationLongitude,
         "latitude": resp.result[i].locationLatitude
       };
       if(hashTable.get(JSON.stringify(tmpLocation)) === -1){
         //new location
         //console.log("adding new location..");
         hashTable.put(JSON.stringify(tmpLocation), {
           "count": 1,
           "expense": Math.abs(resp.result[i].currencyAmount)
         });
       }else{
         //same location already exists in hash table
         let tmp = hashTable.get(JSON.stringify(tmpLocation));
         tmp.count = tmp.count +1;
         tmp.expense = tmp.expense + Math.abs(resp.result[i].currencyAmount);
         //console.log("test");
         console.log(JSON.stringify(tmp));
       }
       
   
      }
      console.log("print hash keys: ");
      let keys = hashTable.keys();
      console.log(hashTable.keys());
      console.log("print hash table: ");
      for (var j = 0; j < keys.length;j++){
       if(hashTable.containsKey(keys[j]) && JSON.parse(keys[j]).longitude){
          var value = hashTable.get(keys[j]);
       }
       else{
         continue;
       }
       let obj = {
         "longitude": JSON.parse(keys[j]).longitude,
         "latitude": JSON.parse(keys[j]).latitude,
         "count": value.count,
         "expense": value.expense
       };
       x.push(obj);
     }
      console.log(x);
       //response is here 
      return x;
   
    }, handleError);
    console.log(filterArray);
    return res.send(filterArray);



});




// x-form-data loadingasdf
router.post("/" , async (req, res)=>{
  //getting the date and customer ID 
  console.log(req.body.date);
  const date = req.body.date;
  const id = req.body.customerId;
  

  //getting the customer data from api
  const filterArray = await request(options('GET', 'customers/' + id + "/transactions"))
  .then((resp) => {
  
    var x = [];  
    //console.log("asdfasfs " + resp.result[0].id);
    var hashTable = new simpleHashTable();
    //getting a bunch of tranid
    for(var i = 0; i < resp.result.length;i++){
     let tmpLocation = {
       "longitude": resp.result[i].locationLongitude,
       "latitude": resp.result[i].locationLatitude
     };
     //var testdate = new Date(resp.result[i].originationDateTime);
     

     if(hashTable.get(JSON.stringify(tmpLocation)) === -1){
       //new location
       //console.log("adding new location..");
       hashTable.put(JSON.stringify(tmpLocation), {
         "count": 1,
         "expense": Math.abs(resp.result[i].currencyAmount),
         "time": resp.result[i].originationDateTime
       });
     }else{
       //same location already exists in hash table
       let tmp = hashTable.get(JSON.stringify(tmpLocation));
       tmp.count = tmp.count +1;
       tmp.expense = tmp.expense + Math.abs(resp.result[i].currencyAmount);
       //console.log("test");
       console.log(JSON.stringify(tmp));
     }
     
 
    }
    console.log("print hash keys: ");
    let keys = hashTable.keys();
    console.log(hashTable.keys());
    console.log("print hash table: ");
    for (var j = 0; j < keys.length;j++){
     if(hashTable.containsKey(keys[j]) && JSON.parse(keys[j]).longitude){
        var value = hashTable.get(keys[j]);

        
        //comparing the time: extract the date and convert it to a number for comparison
        var current_time_value = value.time;
        var ctv = new Date(current_time_value);
        var senddate = new Date(date);
      
        if(ctv.getTime() >= senddate.getTime()){

        }else{

          continue;
        } 


     }
     else{
       continue;
     }

     //generating the json object 
     let obj = {
       "longitude": JSON.parse(keys[j]).longitude,
       "latitude": JSON.parse(keys[j]).latitude,
       "count": value.count,
       "expense": value.expense,
       "time": value.time 
     };
     x.push(obj);
   }
    console.log(x);
     //response is here 
    return x;
 
  }, handleError);


  

  //


});




module.exports = router;
