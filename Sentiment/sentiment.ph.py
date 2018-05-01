# -*- coding: utf-8 -*-
"""
Created on Fri Apr 27 09:58:39 2018

@author: TCH_User
"""
#first, we impor the relevant modules from the NLTK library
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from nltk import sentiment
from nltk import word_tokenize
#next, we initialize VADER so we can use it within our Python script
sid=SentimentIntensityAnalyzer()
#the variable 'message_text' now contains the text we will analyze.
tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')
message_text = '''Hi Stephanie,

Smart move! You’ve successfully registered for our upcoming live event, Cloud OnBoard Big Data and Machine Learning. Please take a moment to answer the following questions.

Registration will begin at 8:30AM and the training event will start at 10:00.

Keep an eye on your inbox for more details on this exciting full-day event. In the meantime, please spread the word to your friends and colleagues.

In the meantime, check out Cloud OnAir webinars to connect live with Google customer engineers and solution architects. The sessions offer presentations and demos covering Big Data, Machine Learning, Security & IT management tools, Application development and more. '''

sentences = tokenizer.tokenize(message_text)


#Calling the polarity)_scores method on sid and passing it the message_text ouputs a score
scores = sid.polarity_scores(message_text) 

for sentence in sentences:
    print(sentence)
    scores = sid.polarity_scores(sentence)
    for key in sorted(scores):
        print('{0}: {1}, '.format(key, scores[key]), end=' ')
    print()