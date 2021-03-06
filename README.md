# Japanese conjugation practice application

An app for practicing conjugating Japanese verbs based on JLPT level and grammar point.

## Features

- Choose verbs by JLPT Level (constantly updating)
- Choose grammar point (past tense, potential form, passive form etc.)
- Text input automatically changes to Hiragana so no need to change input settings
- Verb changes when correct when pressing space, allows for rapid practice
- Call Jisho API with Express to get verbs based on JLPT level
- Stores data to cache to help with loading times and to reduce API calls
- Loading screen shows while data is loading

## Challenges

- Battled with whether or not to call all JLPT data at once or based on selected level
- Creating the logic for checking each grammar point
- Learned a lot about promises
- Struggled with learning how to get the grammar point component to generate a new answer without refs. Once an answer has been correctly inputted, refreshRequired changes to 'true' which calls another word from the grammarPoint component
- Issues with deploying to Heroku because of unlisted dependencies
- A lot of tightly-coupled components that need reworking

## Future Features

- Grammar guides
- Fully responsive
- Scorecard
- More conjugations
- Ability to chain together grammar points 
- Refactoring!

## Notes
 
-  Potential form only accepts grammatically correct masu stem + られる　but will update in the future to add colloquial but largely accepted masu stem + れる
- Imperative form accepts the common 'verbal conjugation'. Please see the below table. Will potentially add other conjugations in the future

English       | Dictionary Form | Verbal  | Literary  | なさい     |
------------- | --------------- | ------- | --------- | --------- |
To eat        |  食べる           |　食べろ　 | 食べよ     | 食べなさい  | 
To see        |  見る            |　見ろ　　 | 見よ   　  | 見なさい  　 | 
To disappear  |  消える         　|　消えろ　 | 消えよ   　 |  消えなさい | 
- Some conjugations are a little strange, but this app is more for creating muscle memory over vocabulary study. For example: The te form of 曇る (曇って) would seldom be used in conversation...

## Demo

https://japanese-conjugation-app.herokuapp.com/ 

- NOTE: Only N5 and N4 currently work. Complete database is in progress

#### gif below (may take some time to load!)

![demonstation of app](client/assets/images/conjugation-demo.gif)

