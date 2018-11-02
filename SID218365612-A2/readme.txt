Mobile Systems Development SIT708 - Assignment 2: Project
Benjamin West SID 218365612

Application Title: Geography Trivia!

NOTE: My demonstration video only demonstrated mobile portrait mode, however my application works on both desktop and tablet portrain/landscape as well.

Secret keys:
To unlock level 2: "liberty"
To unlock level 3: "cold"

Application Overview:
This application is a trivia game based on geography of key location around the globe
that encourgaes the user to learn about other cultures and geography.
The base edition of the game includes 3 levels: America, Europe and Asia, each level has 3 challenges that need to be completed to unlock the next level.
The trivia questions include questions aimed at all audiences and will be a mixture of challenging an easy for most users,
the idea is that users will play the game to test their knowledge, they will also learn by answering questions an hopefull be then
motivated to learn more about other cultures around the world.

Major Features:

Trivia Questions:
Each challenge include various different types of questions on the topic relevant to that level.
Some examples of questions include; true or fals, identifying the origin of a flag or item from a picture or answering a question from 4 choices.

Timed questions:
Each challenge has 10 questions that need to be answered, i believe this applcation should test the users knowledge so to prevent the users from looking up the answers
i configured a time limit on each question of 10 seconds to answer the question. At the end of the 10 seconds if the user has not answred the question then the application will
move to the next question and that question will be marked as incorrect.

Unlocking Levels:
The game has 3 levels, 1 for each continent that is included in the game. The user is to progress through the game by unlocking levels.
A new level is unlocked when the previous level is completed. To complete a level the user will pass all challenges needed for that level by answers the trivia questions.
As there is no database implemented with the application the user cannot save their progress if they were to close and reopen the application,
for this i have added a feature where when a level is completed the user is given a secret key(phrase) which can then be used to unlock other levels if they were to re-open the application.
There is an option in the level select menu where the user can enter the relevant keys that they have unlocked to then unlock other levels to play.

Adding new levels/No hardcoded levels:
The game has 3 levels inbuilt into the application, however, the application has been developed so that anyone can add additional level JS files 
into the data folder to add a level. There is then 1 additional character of code that needs to be added in the gameControl.js file and then the program
will automatically run and include the new level into the code. The program will also run for any amount of challenges and question in each challenge so the user 
can tailor the game if they so wish to add levels without extensinvley altering the logic of the game. 



