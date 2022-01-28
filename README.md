# Project Title: Thenmozhi-LawrenceFullStackBankingApplication

# Description/Motivation:
This project is developed using **MERN** stack to implement the following functionalities:
- Register
- Log in
- Access protected pages only accessible to logged in users
- Stay logged in when they close the app or refresh the page
- Deposit
- Withdraw
- See curent balance
- Log out
## Screen shot:

![image](https://user-images.githubusercontent.com/82136801/151519398-a655bc58-c8d6-4ff6-b33a-8fdb68d79a61.png)

## This project uses the following technologies:

- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Redux](https://redux.js.org/basics/usagewithreact) for state management between React components

## Configuration

Make sure to add your own `MONGOURI` from your [mLab](http://mlab.com) database in `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

## Quick Start

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```

For deploying to Heroku, please refer to [this](https://www.youtube.com/watch?v=71wSzpLyW9k) 

## Things to be fixed/added:
After Deposit and Withdraw the updated balance amount couldnt be pushed to database yet. It is work in progress.

## License : "MIT"
