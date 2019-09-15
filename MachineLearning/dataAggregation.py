#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Sep 14 00:42:36 2019

@author: daniyal
"""

import requests
import json
import pandas as pd
import numpy as np

def keepEntries(entries, the_dict):
        temp = []
        for key in the_dict:
            if key not in entries:
                temp.append(key)
        for key in temp:        
            del the_dict[key]
            
            
def dataCollection(count = 1):
    url = "https://api.td-davinci.com/api/raw-customer-data"
    headers = {
        'authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiMWE3OTlmNzUtOGNkNC0zZjI0LTlkYzQtNDhjZGI3MDJhMjllIiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiI0N2Y4OTQwZC04YTc3LTQ3MmYtOTAyNC04YzYxYWM4MmZkZDUifQ.yqtDgdVmuabryrbt6oWkvCcO84qCQgcptiG6n35_OmQ",
        'content-type': "application/json",
        'cache-control': "no-cache",
        'postman-token': "196b3977-333f-5b45-3ebf-460c78d1703e"
    }
    data = []
    temp = 0
    payloadStr = "{}"
    while (temp < count):
        response = requests.request("POST", url, data=payloadStr, headers=headers)
        dataStr = response.text
        currentData = json.loads(dataStr)
        payloadStr = "{\"continuationToken\":\""+currentData['result']['continuationToken']+"\"}"
        currentData = currentData['result']['customers']
        
        
        
        for i in currentData:
            customerID = i['id']
            entries = ('age', 'gender', 'totalIncome', 'relationshipStatus')
            keepEntries(entries, i)
            customerBaseUrl = "https://api.td-davinci.com/api/customers/"
            
            transactionUrl = customerBaseUrl+customerID+"/transactions"
            
            transResponse = requests.request("GET", transactionUrl, headers=headers)
            transDataStr = transResponse.text
            transData = json.loads(transDataStr)
            transData = transData['result']
            transEntries = ('merchantName', 'currencyAmount', 'locationLongitude', 'locationLatitude')
            
            for j in transData:
                keepEntries(transEntries, j)
            
            i['transactions'] = transData
        
        data += currentData
        temp += 1
            
    return data

def aggregate(data):
    data = pd.DataFrame(data)
    lst_col = 'transactions'
    df = data
    data = pd.DataFrame({
          col:np.repeat(df[col].values, df[lst_col].str.len())
          for col in df.columns.drop(lst_col)}
        ).assign(**{lst_col:np.concatenate(df[lst_col].values)})[df.columns]
    
    data = pd.concat([data.drop(['transactions'], axis=1), data['transactions'].apply(pd.Series)], axis=1)
    
    return data
                                        
def compileForCustomer(df, merchantName = "Starbucks"):
    df = df.loc[df['merchantName'] == merchantName]
    df['currencyAmount'] = df['currencyAmount'].abs()
    return df
              
def removePunct(strings):
    punctuations = '''!()-[]{};: '"\,<>./?@#$%^&*_~'''
    # remove punctuation from the string
    no_punct = ""
    for char in strings:
       if char not in punctuations:
           no_punct = no_punct + char
    return no_punct
                                                                                                                                                                                                                                                                                                                                                                                          
def compileListofCustomers(targets, df):
    for i in targets:
        tempDF = compileForCustomer(df, i)
        tempDF = tempDF[['age', 'gender', 'relationshipStatus', 'totalIncome','currencyAmount']]
        aggData = tempDF.groupby(['age', 'gender', 'relationshipStatus', 'totalIncome'], as_index=False)['currencyAmount'].agg('sum')
        i = i.lower()
        i = removePunct(i)
        print (i)
        aggData.to_csv(i+'Data.csv', index=False)
        
def combiningJSONs(path, targets):
    combinedJSON = {}
    for i in targets:
        i = i.lower()
        i = removePunct(i)
        with open(path+i+'.json') as json_file:
            tempJSON = json.load(json_file)
        combinedJSON[i] = tempJSON
    return combinedJSON
    
listData = dataCollection()    
data = aggregate(listData)
targets = ("McDonald's", "Starbucks", "Swiss Chalet", "LCBO", "Longo's", "H&M", "Netflix", "Tim Hortons")
compileListofCustomers(targets, data)
path = "./enterpriseClusters/"
with open(path+'combined.json', 'w') as f:
    json.dump(combiningJSONs(path, targets), f)

with open(path+'mcdonalds.json') as json_file:
    tempJSON = json.load(json_file)

