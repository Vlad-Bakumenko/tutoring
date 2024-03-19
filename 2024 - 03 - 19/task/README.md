# SPA - React Band - Part 5

In this repo you will find the latest version of the "Band" app. 

---

## Requirements

Currently, the app's state is managed by a reducer in `App.jsx`.

Your new job is to implement global state management in this project using a reducer **and** context.

You should start by: 

- Creating a new directory: `src/contexts`
- Then creating a new file in this directory: `UsersContext.jsx`

When you are done:

- The app's `state` should be managed by a **reducer** in `UsersContext.jsx`
  - **Remember:** Currently the app's `state` can be found in `App.jsx`
- `UsersContext.jsx` should also provide **context** for any child component which needs to access `state` and/or the `dispatch` function (to update `state`) 
- You should have removed all unnecessary `props` from your components
- The app should still work!

---

## Hint

This morning's "To Do app" live coding could be a helpful reference, in case you feel unsure about any part of this exercise.

---

Good luck, and have fun. :smile: