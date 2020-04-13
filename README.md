Alexa skill to play 20 second songs - the recommended amount of time for you to wash your hands.

# Deploy for test

Create an Alexa developer account at https://developer.amazon.com. It will not be used for a public skill, so it won't recieve any charges. The email address you use for this needs to match the email address you use to sign into the Alexa app.

## Create the skill
Log into the Alexa developer console here: https://developer.amazon.com/alexa/console/ask

Click "Create Skill". On the first section, "Choose a model to add your skill" choose Custom. You may need to scroll down to get to the second section. There, specify "Alexa-Hosted (Node.js)"

## Build the Model
Click the "Build" tab. 

In the left menu, under Interaction Model, there is a section called "JSON editor". Click on it.

Delete all of the text in the editor. Copy all of the contents of the file at https://github.com/dmonego/handwashing-songs/blob/master/skill-package/en-us.json

Paste the contents of that file into the editor. Click "Save Model", then click "Build Model".

## Deploy the lambda
Click the "Code" tab. 

In the left menu, click on the file "index.js". Delete all contents of the file, and replace with the contents of the file at https://github.com/dmonego/handwashing-songs/blob/master/skill-lambda/index.js then click "Save".

After updating the code, click "Deploy".

## Enable test in Development
Go to the test tab. There is a dropdown in the top left that is labeled "Skill testing is enabled in: "

Make sure that dropdown is set to "Development"

The skill should now be available on your Alexa device.
