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


https://www.youtube.com/watch?v=W-kII4idtfE

* To install Fiebase CLI: npm install -g firebase-tools
* To login to Firebase CLI: firebase login
* To enable webframeworks flag: firebase experiments:enable webframeworks
* To initialize Firebase in your project: firebase init
* To deploy: firebase deploy

- will need to update to pay-as-you-go plan
  - details here https://firebase.google.com/pricing?hl=en&authuser=0&_gl=1*1llxviv*_ga*NzczNTk2OTgwLjE3MTI2NzYzMTU.*_ga_CW55HF8NVT*MTcxNTM2NzQ3Ny4yMS4xLjE3MTUzNjc4NDYuNTUuMC4w
  - set up a $1 budget alert


## todo
- test and document deployment 
- QR code

![alt text](image.png)