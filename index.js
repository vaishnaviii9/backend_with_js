// console.log("HELLO WORLD");
// import express from "express"

require('dotenv').config()
const express = require("express");
const app = express();

const port = 4000;

const githubData={
  "login": "vaishnaviii9",
  "id": 102385162,
  "node_id": "U_kgDOBhpGCg",
  "avatar_url": "https://avatars.githubusercontent.com/u/102385162?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/vaishnaviii9",
  "html_url": "https://github.com/vaishnaviii9",
  "followers_url": "https://api.github.com/users/vaishnaviii9/followers",
  "following_url": "https://api.github.com/users/vaishnaviii9/following{/other_user}",
  "gists_url": "https://api.github.com/users/vaishnaviii9/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/vaishnaviii9/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/vaishnaviii9/subscriptions",
  "organizations_url": "https://api.github.com/users/vaishnaviii9/orgs",
  "repos_url": "https://api.github.com/users/vaishnaviii9/repos",
  "events_url": "https://api.github.com/users/vaishnaviii9/events{/privacy}",
  "received_events_url": "https://api.github.com/users/vaishnaviii9/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 14,
  "public_gists": 0,
  "followers": 1,
  "following": 3,
  "created_at": "2022-03-25T19:06:02Z",
  "updated_at": "2024-08-25T06:11:47Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/twitter',(req,res)=>{
    res.send('Twitterdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at diems portal </h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2> WELCOME </h2>')
})

app.get('/github',(req,res)=>{
  res.json(githubData)

})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
