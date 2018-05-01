# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

#http://api.wunderground.com/api/a6216ea356048dea/conditions/q/CA/San_Francisco.json

#import requests 

#response = requests.get("http://api.wunderground.com/api/a6216ea356048dea/conditions/q/MN/Minneapolis.json")

#data = response.json()

#temp = str(data["current_observation"]["temp_f"])
#
#location = data["current_observation"]["display_location"]["full"]
#
#
#print("It is currently "+temp+ " degrees Farenheit in "+location+".")




#This is a tiny program that will pull display lat, long, elevation and temp for Denver, Co.
#import requests 
#x = input("Enter your state: ")
#y = input ("Enter your city: ")
#
#
#def getWeather(x,y):
#
#    response = requests.get("http://api.wunderground.com/api/a6216ea356048dea/conditions/q/"+x+"/"+y+".json")
#
#    data = response.json()
#    
#    if "current_observation" in data:
#        temp = data["current_observation"]["temp_f"]
#        location = data["current_observation"]["display_location"]["full"]
#        print("It is currently "+str(temp)+ " degrees Farenheit in "+location+".")
#    
#    else:
#        print(city+" is not a city in the state of "+state+".")
#getWeather(x,y)

#location = data["current_observation"]["display_location"]["full"]
#rlocation = data["current_observation"]["observation_location"]["full"]
#temp = data["current_observation"]["temp_f"]

#if temp >=72:
 #   print("It is warm.")
    
#else:
#    print("It is cold.")

#print("The if statementis over.")

#if "current_observation" in data:
#    temp = data["current_observation"]["temp_f"]
#    location = data["current_observation"]["display_location"]["full"]
#    print("It is currently "+str(temp)+ " degrees Farenheit in "+location+".")
#else:
#    print(city+" is not a city in the state of "+state+".")
    
import requests 
state = input("Enter your state: ")
city = input ("Enter your city: ")

response = requests.get("http://api.wunderground.com/api/a6216ea356048dea/conditions/q/"+state+"/"+city+".json")

data = response.json()

location = data["current_observation"]["display_location"]["full"]
rlocation = data["current_observation"]["observation_location"]["full"]
temp = data["current_observation"]["temp_f"]


print(data["current_observation"]["display_location"]["city"])
print(data["current_observation"]["observation_location"]["city"])

if data["current_observation"]["display_location"]["city"] == data["current_observation"]["observation_location"]["city"]:
    print("It is currently "+str(temp)+ " degrees Farenheit in "+location+".")
else: 
    print("The weather is actually being observed in "+rlocation+".")     

    