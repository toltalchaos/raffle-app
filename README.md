# raffle-app
sveltekit application for a raffle draw

using firebase RTDB backend 

idea is to have a user input their name, email, address to the app and a manager login to see all the users as well as pick one at random (random number generator that corrisponds to a user)

fill out a .env with .env-example settings from firebase

create an admin account
create RTDB with the following rule modified for the admin
```
{
  "rules": {
    ".read": "auth != null && auth.uid ==='JPOV69aKFgO24zEc84XvMeh2b0v2'",
    ".write": true
  }
}
```

npm install firebase
npm install -g firebase-tools
firebase login
firebase init
firebase deploy


## todo
- style
- test and document deployment 
- QR code