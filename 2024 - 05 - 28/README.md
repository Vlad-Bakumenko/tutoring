# Security with bcrypt 🔒🔑

This assignment will allow you to play around with the `bcrypt` package by building a CLI application
The following tasks require the knowledge about node file system(fs). Please have a look at the live coding `2024-04-15_get-post-requests` for a quick recap

## What you will be doing

You will be working with `bcrypt` using just the CLI (no server required!).

You will be expected to write your solution in 2 files;

1. `register.js` - will generate a password hash
2. `login.js` - will compare a password hash with the hash from the user

## Tasks

### Task 1 - getting bcrypt

Install the [bcrypt](https://www.npmjs.com/package/bcrypt) npm package

### Task 2 - learning how to use bcrypt

Read the bcrypt [documentation](https://github.com/kelektiv/node.bcrypt.js/#usage)

Answer the following questions;

- Which method should you use to create a hash from a password?
- Which method should you use to compare a password with a hash?

### Task 3 - writing a hashing helper function (register.js)

1. Open the file `register.js`

2. Import `bcrypt`

3. Write a function which takes a **string** parameter, and the `bcrypt` hashing method to hash and **return** the result

   > Hint: For now, use `10` as the number of salt rounds

4. Run your function with the `password` variable as a parameter. This variable can be populated from your terminal, for example:

   ```bash
   node register.js kittens
   ```

5. Use `console.log()` to display the output of your function

### Task 4 - store the hash in the filesystem

The file `helpers.js` contains the function `writeToFileSystem()`

- Import and use `writeToFileSystem()` to write your hash to the filesystem

### Task 5 - playing with salt

Play around with the salt rounds value. Use small and large numbers.

- How long does the program take to run?
- What would an ideal salt rounds number be?

### Task 6 - writing a compare helper function (login.js)

1. Open the file `login.js`

2. Import `bcrypt`

3. Write a function which receives a **password** parameter from the user

4. The file `helpers.js` contains the function `readFromFileSystem()`

   - Import and use `readFromFileSystem()` to read the **hash** from the filesystem

5. Use the `bcrypt` compare method to compare the `password` variable with the **hash**

6. If the password;

   - **matches**, display a message to the user stating that the passwords match
   - **does not match**, display a message to the user stating that the passwords do not match

### Task 7 - testing

Test your code.

1. Run `node register.js {password}` where `{password}` is the password you would like to register with

2. Run `node login.js {password}` where `{password}` is the password you wish to test against the hash

3. Try using different passwords, and logging in with the wrong password to see different results
