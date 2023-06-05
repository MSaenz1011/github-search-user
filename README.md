Project Created using Bootstrap

General warnings:
The project does work, but in the userData.created_at will create an error when the app is started. The reason relies on the property, userData.created_at will be empty

Therefore, it is a must to do the following things

-Conditional Rendering in case the user is empty (input empty) or does not exist

-Conditional Rendering in case the user does not have some info about his profile (location, bio, blog, etc)

-Responsive Design and slight improvements

Keep in mide that the light-mode will not have development at this moment.

##Update: 

-Considering now how Next.js and React work. The project will be continued on React, but Bootstrap will be unistall and Tailwind CSS 
will take it place
-Also, consider that Dark Mode, ideally, should be made with React states (hooks). However, this project will
use both React Hooks and Tailwind's Dark Mode
