// import bcrypt from "bcrypt";
// if hashing - bcrypt.hash, if comparing - bcrypt.compare

import { hash } from "bcrypt";
import { writeToFileSystem } from "./helpers.js";

const password = process.argv[2];

// For node register.js kittens
console.log(process.argv); // [
//     '/home/dci-student/.nvm/versions/node/v21.7.3/bin/node',
//     '/home/dci-student/Documents/tutoring/tutoring/2024 - 05 - 28/register.js',
//     'kittens'
//   ]

/*
1.The characters that comprise the resultant hash are:
 ./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$
2. Length of encrypted password - 60 characters
3. Structure - $[algorithm]$[cost]$[salt][hash] :
   - 2 chars hash algorithm identifier prefix. "$2a$" or "$2b$"  indicates BCrypt
   - Cost-factor (n). Represents the exponent used to determine how many iterations 2^n
   - 16-byte (128-bit) salt, base64 encoded to 22 characters
   - 24-byte (192-bit) hash, base64 encoded to 31 characters
$2b$10$nOUIs5kJ7naTuTFkBy1veuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa
 |  |  |                     |
 |  |  |                     hash-value = K0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa
 |  |  |
 |  |  salt = nOUIs5kJ7naTuTFkBy1veu
 |  |
 |  cost-factor => 10 = 2^10 rounds
 |
 hash-algorithm identifier => 2b = BCrypt
*/

//? hash syntax

/*
hash(data, salt, cb)
data - [REQUIRED] - the data to be encrypted.
salt - [REQUIRED] - the salt to be used to hash the password. if specified as a number then a salt will be generated with the specified number of rounds and used (see example under Usage).
cb - [OPTIONAL] - a callback to be fired once the data has been encrypted. uses eio making it asynchronous. If cb is not specified, a Promise is returned if Promise support is available.
err - First parameter to the callback detailing any errors.
encrypted - Second parameter to the callback providing the encrypted form.
*/

// Without callback function as parameter
const hashing = async (string) => {
  // if cost-factor is 0, then 2^10 rounds will be carried out  
  const hashedPassword = await hash(string, 13); // cost factor 5 means that 2^5 = 32 rounds of hashing will be carried out, and for 10 - 2^10 = 1024 rounds
  /* A note about the cost: when you are hashing your data, the module will go through a series of rounds to give you a secure hash. The value you submit is not just the number of rounds the module will go through to hash your data. The module will use the value you enter and go through 2^rounds hashing iterations.
    
On a 2GHz core you can roughly expect:
rounds=8 : ~40 hashes/sec
rounds=9 : ~20 hashes/sec
rounds=10: ~10 hashes/sec
rounds=11: ~5  hashes/sec
rounds=12: 2-3 hashes/sec
rounds=13: ~1 sec/hash
rounds=14: ~1.5 sec/hash
rounds=15: ~3 sec/hash
rounds=25: ~1 hour/hash
rounds=31: 2-3 days/hash

cost-factor: 10-13 - are ideal salt rounds number 
    */
  writeToFileSystem(hashedPassword);
  return hashedPassword;
};

console.log(await hashing(password));

// With callback function as parameter

// const hashingWithCallback = async(string) => {
//     const hashedPassword = await hash(string, 10, (err,hashedPassword)=>{
//         console.log(hashedPassword);
//         // const newUser = await User.create({username, hashedPassword}) - some example of dealing with database
//     })
// }

// hashingWithCallback(password);

// how hash works:
// **bcrypt Hashing Algorithm**

// 1. **Salt Generation**
// 	* Generate a random salt value (typically 16 bytes)
// 	* The salt is used to prevent rainbow table attacks
// 2. **Password Encoding**
// 	* Encode the plaintext password using UTF-8
// 	* This ensures that the password is represented as a sequence of bytes
// 3. **Key Expansion**
// 	* Use the Blowfish cipher to expand the password and salt into a longer key
// 	* This key is used for the hashing process
// 4. **Hashing**
// 	* Use the Blowfish cipher to encrypt the password key with itself
// 	* This produces a fixed-size hash value (typically 24 bytes)
// 5. **Rounds**
// 	* Repeat the hashing process multiple times (controlled by the `cost` parameter)
// 	* Each iteration uses the previous hash value as the input
// 	* This slows down the hashing process and makes it more computationally expensive
// 6. **Base64 Encoding**
// 	* Encode the final hash value using Base64
// 	* This produces a string representation of the hash value
// 7. **Prefix and Cost**
// 	* Prepend the hash value with a prefix (`$2b$` or `$2y$`) indicating the bcrypt version
// 	* Append the cost parameter (e.g., `10`) to the prefix
// 	* This allows the `compare` method to determine the correct number of rounds to use
// */

//? Why is async mode recommended over sync mode?
// We recommend using async API if you use bcrypt on a server. Bcrypt hashing is CPU intensive which will cause the sync APIs to block the event loop and prevent your application from servicing any inbound requests or events. The async version uses a thread pool which does not block the main event loop.