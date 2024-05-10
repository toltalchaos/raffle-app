# raffle-app
sveltekit application for a raffle draw

using firebase RTDB backend 

idea is to have a user input their name, email, address to the app and a manager login to see all the users as well as pick one at random (random number generator that corrisponds to a user)


npm install firebase
npm install -g firebase-tools
firebase login
firebase init
firebase deploy

fill out a .env with .env-example settings from firebase


create RTDB - test mode - no auth required
```
{
  "rules": {
    ".read": "now < 1717826400000",  // 2024-6-8
    ".write": "now < 1717826400000",  // 2024-6-8
  }
}
```

security kindof sucks eggs but for MOST people it should keep them away, unless they find a way to interact directly with the RTDB. 

## todo

- create raffle draw logic
- create way to export user data as a manager
- style
- refine security by applying rules on RTDB and DB calls