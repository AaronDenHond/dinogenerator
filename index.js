// importing express and creating the server
 require('dotenv').config();
 //dotenv file has to be on root
const express = require("express");
const app = express();
const port = 3000;
//need to require node-fetch in node as it's not built in.
const fetch = require("node-fetch");

const api_key = process.env.API_KEY;



/* app.get('/', (req, res) => {
  res.send('Hello World!');
}); */

//Middleware to serve client side static files in public directory
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//1. async fetch nr one : server side this is for the dino name
app.get("/dinoname", async (request, response) => {
  const fetchApi = await fetch(
    "https://alexnormand-dino-ipsum.p.rapidapi.com/?format=json&words=2&paragraphs=1",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com",
        "x-rapidapi-key": api_key,
      },
    }
  );

  const dinoNameResponse = await fetchApi.json();
  console.log(dinoNameResponse);

 response.json(dinoNameResponse);
});


//2 second fetch for the image 
app.get("/dinoimage", async (request, response) => {
  const fetchApi = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=10", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
      "x-rapidapi-key": api_key,
    }
  })

  const imageResponse = await fetchApi.json();
  console.log(imageResponse);

 response.json(imageResponse);
});
