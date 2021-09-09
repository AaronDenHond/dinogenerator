# dinogenerator

Random dino generator via rapidapi. Fullstack application using node (express) and vanilla js. Just checking out server side fetch, and then client side to server fetch in JS.

## What did I learn?

Instead of using client sided API calls like we did before, we should learn to first do a server side fetch, and then
a client side fetch on that server side fetch for security reasons. Like this, we don't expose sensitive information like API keys.

The application works, but needs some styling. The most important thing to me for this exercise was making the double API calls work
and making sure everything was secure. What was also super useful was the dotenv dependency, that makes it so you can use a .env file with
initialized variables in said file to use in the server files.
