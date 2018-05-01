# -*- coding: utf-8 -*-
"""
Created on Tue Apr 24 09:22:05 2018

@author: TCH_User
"""
#myCoolArray = [1,2,3,4,5,6,7,8,9,10,11,12]
#
#for number in myCoolArray:
#    if number%2 ==1:
#        print(number)
#    
    

import requests 


response = requests.get("http://api.open-notify.org/astros.json")

data = response.json()

people = data["people"]

for names in people:
    
 
    print(names['name']+", "+names['craft'])
