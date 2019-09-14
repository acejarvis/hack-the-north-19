const express = require('express');
const router = express.Router();
const request = require('request-promise-native'); // use Request library + promises to reduce lines of code
const simpleHashTable = require('simple-hashtable');


const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiNjU0MWQyNjQtMTgwZS0zNTVkLTg2ZmUtMGJiNjNmYmRmMmRiIiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiIyODA5YmQzMC03N2I5LTQ4ZTItYjVmYy1lZjQ2NTgxMmQ4YjIifQ.syA-Drtn7SFiiZJv_apCF7hIMMjqYVMH5yID449JLws";
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
      console.log("asdfasfs " + resp.result[0].id);
      let hashTable = new simpleHashTable();
      //getting a bunch of tranid
      for(var i = 0; i < resp.result.length;i++){
       let tmpLocation = {
         "longitude": resp.result[i].locationLongitude,
         "latitude": resp.result[i].locationLatitude
       };
       if(hashTable.get(tmpLocation) === -1){
         //new location
         hashTable.put(JSON.stringify(tmpLocation), {
           "count": 1,
           "expense": Math.abs(resp.result[i].currencyAmount)
         });
       }else{
         //same location already exists in hash table
         let tmp = hashTable.get(JSON.stringify(tmpLocation));
         tmp.count = tmp.count +1;
         tmp.expense = tmp.expense + Math.abs(resp.result[i].currencyAmount);
         console.log(JSON.stringify(tmp));
       }

      //  x.push(tmpLocation);
        
      }
   
      console.log(x);
       //response is here 
      return x;
   
    }, handleError);
    console.log(filterArray);
    return res.send(filterArray);



});

module.exports = router;