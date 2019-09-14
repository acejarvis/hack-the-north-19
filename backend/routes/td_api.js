// Run `npm init`, then `npm install request request-debug request-promise-native --save`
"use strict";
const simpleHashTable = require('simple-hashtable');
const util = require('util') // for printing objects
const req = require('request-promise-native'); // use Request library + promises to reduce lines of code
//req.debug = true
//require('request-debug')(req);

const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiNjU0MWQyNjQtMTgwZS0zNTVkLTg2ZmUtMGJiNjNmYmRmMmRiIiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiIyODA5YmQzMC03N2I5LTQ4ZTItYjVmYy1lZjQ2NTgxMmQ4YjIifQ.syA-Drtn7SFiiZJv_apCF7hIMMjqYVMH5yID449JLws";
const initialCustomerId = "cad31095-cae1-49f4-bea8-78c42e2d92b7";


function options(method, uri, body = null) {
  return {
    json: true,
    body: body,
    uri: 'https://api.td-davinci.com/api/' + uri,
    method: method,
    headers: { 'Authorization': apiKey }
  };
}



(async () => {
//   await req(options('GET', 'customers/' + initialCustomerId))
//     .then((resp) => {
//       const cust = resp.result;
//       console.log("\nCustomer\n- Name: " + cust.givenName + " " + cust.surname);
//       console.log("- Address: " + util.inspect(cust.addresses.principalResidence));
//     }, handleError)

//getting customer initialid
  const [creditCardId, bankAccountId] = await req(options('GET', 'customers/' + initialCustomerId + '/accounts'))
    .then((resp) => {
      return [resp.result.creditCardAccounts[0].id, resp.result.bankAccounts[0].id];
    }, handleError)

//   await req(options('GET', 'accounts/' + creditCardId))
//     .then((resp) => {
//       const cc = resp.result.creditCardAccount;
//       console.log("\nCredit Card\n- Number: " + cc.maskedNumber);
//       console.log("- Balance: " + cc.balance);
//     }, handleError)

//   await req(options('GET', 'accounts/' + bankAccountId))
//     .then((resp) => {
//       const acct = resp.result.bankAccount;
//       console.log("\nBank Account\n- Number: " + acct.maskedAccountNumber);
//       console.log("- Balance: " + acct.balance);
//     }, handleError)


 //getting the entire transaction of the customer   
 const tranId = await req(options('GET', 'customers/' + initialCustomerId + "/transactions"))
 .then((resp) => {
 
   var x = [];  
   console.log("first trans detail " + JSON.stringify(resp.result[0]));
   var hashTable = new simpleHashTable();
   //getting a bunch of tranid
   for(var i = 0; i < resp.result.length;i++){
    let tmpLocation = {
      "longitude": resp.result[i].locationLongitude,
      "latitude": resp.result[i].locationLatitude
    };
    if(hashTable.get(JSON.stringify(tmpLocation)) === -1){
      //new location
      console.log("adding new location..");
      hashTable.put(JSON.stringify(tmpLocation), {
        "count": 1,
        "expense": Math.abs(resp.result[i].currencyAmount)
      });
    }else{
      //same location already exists in hash table
      let tmp = hashTable.get(JSON.stringify(tmpLocation));
      tmp.count = tmp.count +1;
      tmp.expense = tmp.expense + Math.abs(resp.result[i].currencyAmount);
      console.log("test");
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

 }, handleError)

  await req(options('GET', 'transactions/' + tranId))
    .then((resp) => {
      const tran = resp.result;


      console.log("\nCredit Card Transaction\n- $" + tran.currencyAmount);
      console.log("- Timestamp: " + tran.originationDateTime);
      console.log("- Merchant: " + tran.merchantName);
      console.log("- Description: " + tran.description);
      console.log("- Lat/Lon: " + tran.locationLatitude + "/" + tran.locationLongitude);
      console.log("- Tags: " + util.inspect(tran.categoryTags));
    }, handleError)

  const randomNum = Math.floor(Math.random() * 112357) + 1;
  const newTagArray = ["tag" + randomNum.toString()];
  await req(options('PUT', 'transactions/' + tranId + '/tags', newTagArray))
    .then((resp) => {
      console.log("\n***TAGS NOW UPDATED***");
      const tran = resp.result;
      console.log("\nCredit Card Transaction\n- $" + tran.currencyAmount);
      console.log("- Timestamp: " + tran.originationDateTime);
      console.log("- Merchant: " + tran.merchantName);
      console.log("- Description: " + tran.description);
      console.log("- Lat/Lon: " + tran.locationLatitude + "/" + tran.locationLongitude);
      console.log("- Tags:asdfsaasfssfa " + tran.categoryTags);
    }, handleError)

  await req(options('GET', 'customers/' + initialCustomerId + '/transactions'))
    .then((resp) => {
      console.log("\nCustomer had " + resp.result.length + " total transactions");
    }, handleError)

  const branchId = await req(options('GET', 'customers/' + initialCustomerId + '/accounts'))
    .then((resp) => {
      const cc = resp.result.creditCardAccounts[0];
      const acct1 = resp.result.bankAccounts[0];
      const acct2 = resp.result.bankAccounts[1];
      console.log("\nCustomer has $" + acct1.balance + " + $" + acct2.balance + " - $" + cc.balance);
      console.log("- Net worth: $" + (acct1.balance + acct2.balance - cc.balance).toFixed(2));
      return resp.result.bankAccounts[0].branchNumber;
    }, handleError)

  await req(options('GET', 'branches/' + branchId))
    .then((resp) => {
      console.log("\nCustomer has an account with a TD branch at " + resp.result.address);
    }, handleError)

  const appAccountId = await req(options('GET', 'accounts/self'))
    .then((resp) => {
      console.log("\nYour app has $" + resp.result.balance + " in its account ready to use");
      return resp.result.id;
    }, handleError);

  const xfer = {
    "amount": 1,
    "currency": "CAD",
    "fromAccountId": appAccountId,
    "toAccountId": bankAccountId,
    "receipt": "{ \"Note\": \"Thanks for being such a loyal user of my app!\" }",
  }
  const transferReceiptId = await req(options('POST', 'transfers', xfer))
    .then((resp) => {
      return resp.result.id;
    }, handleError);

  await req(options('GET', 'accounts/self'))
    .then((resp) => {
      console.log("\nYour app now has $" + resp.result.balance + " in its account after a transfer");
    }, handleError);

  await req(options('GET', 'transfers/' + transferReceiptId))
    .then((resp) => {
      console.log("\nReceipt from our money transfer: " + util.inspect(resp.result));
    }, handleError)
})();

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