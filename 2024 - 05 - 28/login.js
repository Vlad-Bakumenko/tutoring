import { compare } from "bcrypt";
import { readFromFileSystem } from "./helpers.js";

const password = process.argv[2];

const comparing = async (password) => {
  //? compare syntax

  /*
compare(data, encrypted, cb)
data - [REQUIRED] - data to compare.
encrypted - [REQUIRED] - data to be compared to.
cb - [OPTIONAL] - a callback to be fired once the data has been compared. uses eio making it asynchronous. If cb is not specified, a Promise is returned if Promise support is available.
err - First parameter to the callback detailing any errors.
same - Second parameter to the callback providing whether the data and encrypted forms match [true | false].

Here's how the compare method works:

1. Extract the salt: The compare method extracts the salt from the hashed password. In this case, the salt is 9Hu2dcqnZ7ok2uUaXLm6VeQOAbK3hk1KVu7kWeiAqceie6vCZOrbq
2. Hash the plaintext password: The compare method hashes the plaintext password using the same salt and the same number of rounds used to generate the original hashed password.
Compare the hashes: The compare method compares the resulting hash with the original hashed password. If they match, it returns true, indicating that the password is valid. If they don't match, it returns false, indicating that the password is invalid.
 */
  const savedPassword = readFromFileSystem();
  const match = await compare(password, savedPassword); // we need await because otherwise we will get the promise, which is pending and match always will be truthy value = so passwords will be always matching
  console.log(match);
  if (match) {
    return "Passwords are matching";
  } else {
    return "Passwords are not matching";
  }
};

console.log(await comparing(password));