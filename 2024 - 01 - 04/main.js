// Link 1
/* 
Task 1

Given the object below
*/

let person = {
    name: "Petra Morin",
    address: {
      delivery: {
        street: "371-7636 Nulla Road",
        zip: "83-315",
        country: "Germany",
      },
      billing: {
        street: "123-999 Fake Street",
        zip: "12345",
        country: "Germany",
      },
    },
    hobbies: ["drums", "skating", "comics"],
    languages: [
      {
        name: "German",
        level: 5,
      },
      {
        name: "English",
        level: 4,
      },
      {
        name: "Spanish",
        level: 2,
      },
    ],
  };
  
  /*
  Task 1.1
  
  Print the zip code of the billing address to the console
  
  Expected output:
  
  12345
  */
  
  console.log("\nBilling address:", person.address.billing.zip);
  
  /*
  Task 1.2
  
  Print the last of the hobbies
  
  Expected output:
  comics
  */
  console.log("\nLast hobby:", person.hobbies[person.hobbies.length - 1]);
  
  /*
  Task 1.3
  
  Print the name and the level of the second spoken language 
  
  Expected output:
  English: 4
  */
  
  console.log("\nSecond language:", `${person.languages[1].name} : ${person.languages[1].level}`);
  
  /*
  Task 1.4
  
  Print all the information relative to the delivery address.
  
  Expected output:
  Street: 371-7636 Nulla Road
  Zip: 83-315
  Country: Germany
  */
  
  const deliveryKeys = Object.keys(person.address.delivery)
  console.log(deliveryKeys);
  console.log("\nDelivery address:");
  
  for (let i = 0; i < deliveryKeys.length; i++) {
    console.log(`${deliveryKeys[i].slice(0,1).toUpperCase() + deliveryKeys[i].slice(1).toLowerCase()} : ${person.address.delivery[deliveryKeys[i]]}`);
  }
  
  /*
  Task 1.5
  
  Using a loop, print all the hobbies, each on a separate line
  
  Expected output:
  Hobbies: 
  - drums
  - skating
  - comics
  */
  
  console.log("\nHobbies:");
  
  for (const hobby of person.hobbies) {
    console.log(`- ${hobby}`);
  }
  
  /*
  Task 1.6
  
  Using a loop, list all known languages with a level smaller than 5, together with their 
  level.
  
  Expected output:
  
  English: 4
  Spanish: 2
  */
  
  console.log("\nKnown languages:");
  
  for (const language of person.languages) {
    if (language.level < 5) {
      console.log(`${language.name}: ${language.level}`);
    }
  }

// Link 1
/*
Task 2

Given the array with a list of people below:
*/

const users = [
    {
      name: "Petra Morin",
      address: {
        delivery: {
          street: "371-7636 Nulla Road",
          zip: "83-315",
          country: "Germany",
        },
        billing: {
          street: "123-999 Fake Street",
          zip: "12345",
          country: "Germany",
        },
      },
      hobbies: ["drums", "skating", "comics"],
      languages: [
        {
          name: "German",
          level: 5,
        },
        {
          name: "English",
          level: 4,
        },
        {
          name: "Spanish",
          level: 2,
        },
      ],
    },
    {
      name: "Abel Ashley",
      address: {
        delivery: {
          street: "9977 Aliquam Avenue",
          zip: "920134",
          country: "Mexico",
        },
        billing: {
          street: "123 Lorem Square",
          zip: "912098",
          country: "Mexico",
        },
      },
      hobbies: ["reading books", "wood working"],
      languages: [
        {
          name: "Spanish",
          level: 5,
        },
        {
          name: "English",
          level: 5,
        },
        {
          name: "Italian",
          level: 3,
        },
      ],
    },
    {
      name: "Aaron Cardenas",
      address: {
        delivery: {
          street: "987 Ipsum",
          zip: "129-234",
          country: "France",
        },
        billing: {
          street: "123 Etwas Plaza",
          zip: "912098",
          country: "Spain",
        },
      },
      hobbies: ["painting", "singing", "hiking"],
      languages: [
        {
          name: "French",
          level: 5,
        },
        {
          name: "Spanish",
          level: 5,
        },
        {
          name: "German",
          level: 1,
        },
      ],
    },
    {
      name: "Felix Moreno",
      address: {
        delivery: {
          street: "320-7871 Nec, Av.",
          zip: "59156",
          country: "New Zealand",
        },
        billing: {
          street: "921 Nullae Aliquam",
          zip: "912098",
          country: "New Zealand",
        },
      },
      hobbies: ["jogging", "coffee", "bird watching"],
      languages: [
        {
          name: "English",
          level: 5,
        },
        {
          name: "Italian",
          level: 3,
        },
      ],
    },
    {
      name: "Skyler May",
      address: {
        delivery: {
          street: "Ap #854-6462 Consectetuer Ave",
          zip: "00608",
          country: "Singapore",
        },
        billing: {
          street: "Ap #854-6462 Consectetuer Ave",
          zip: "00608",
          country: "Singapore",
        },
      },
      hobbies: ["cycling", "soccer", "bouldering"],
      languages: [
        {
          name: "Malay",
          level: 5,
        },
        {
          name: "English",
          level: 5,
        },
        {
          name: "Mandarin",
          level: 4,
        },
        {
          name: "French",
          level: 2,
        },
      ],
    },
  ];
  
  /*
  Task 2.1
  
  Print the name and hobbies separated by commas from the last 
  person on the list
  
  Expected output:
  Skyler May
  Hobbies: cycling, soccer, bouldering
  */
  
  console.log("\nLast person:" , `
  ${users[users.length - 1].name}
  Hobbies: ${users[users.length - 1].hobbies.join(", ")}`);
  
  
  /*
  Task 2.2
  
  Print the name and information about the billing address of 
  the second person on the list
  
  Expected output:
  Abel Ashley
  
  Billing address:
  Street: 123 Lorem Square
  Zip: 912098
  Country: Mexico
  */
  const billingKeys = Object.keys(users[1].address.billing)
  
  console.log(billingKeys);
  
  console.log("\nSecond person:", `
  ${users[1].name}
  Billing address:`)
  for (let i = 0; i < billingKeys.length; i++) {
    console.log(`${billingKeys[i].slice(0,1).toUpperCase() + billingKeys[i].slice(1).toLowerCase()} : ${users[1].address.billing[billingKeys[i]]}`);
  }
  
  /*
  Task 2.3
  
  Using loops, print all the names of the people on the list. 
  
  For each name, print also an index that starts at 1.
  
  Expected output:
  1. Petra Morin
  2. Abel Ashley
  3. Aaron Cardenas
  4. Felix Moreno
  5. Skyler May
  */
  
  console.log("\nUsers:");
   for (let i = 0; i < users.length; i++) {
     console.log(`${i+1}. ${users[i].name}`);
   }
  
  // let index = 0
  
  // for (const user of users) {
  //   console.log(`${++index}. ${user.name}`);
  // }
  
  /*
  Task 2.4
  
  Using loops, print a message for each person with a message 
  showing the name, the delivery country and the first hobby in the list.
  
  Expected output:
  Petra Morin lives in Germany and their favourite hobby is: drums.
  
  Abel Ashley lives in Mexico and their favourite hobby is: reading books.
  
  Aaron Cardenas lives in France and their favourite hobby is: painting.
  
  Felix Moreno lives in New Zealand and their favourite hobby is: jogging.
  
  Skyler May lives in Singapore and their favourite hobby is: cycling.
  */
  
  for (const userObj of users) {
    console.log(`${userObj.name} lives in ${userObj.address.delivery.country} and their favorite hobby is: ${userObj.hobbies[0]}`);
  }
  
  /*
  Task 2.5
  
  Using loops, print each name and every language they know 
  with a level greater than or equal to 4.
  
  Expected output:
  Petra Morin speaks fluently:
  - German
  - English
  
  Abel Ashley speaks fluently:
  - Spanish
  - English
  
  ...
  */
  
  for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].name} speaks fluently:`)
    for (let j = 0; j < users[i].languages.length; j++) {
      if (users[i].languages[j].level >=4) {
        console.log(`- ${users[i].languages[j].name}`);
      }
    }
  }
  //! We can use "i" for loop and nested loop, however doing so might lead to confusion or unintended behavior if you're relying on the value of the loop counter in an outer loop while it's being modified in an inner loop. If you reuse the same loop counter name, make sure you're aware of the potential issues with scope and unintended variable shadowing.
  // i = 0 
  // Petra Morin speaks fluently:
  // - German
  // go to next iteration
  
  // i = 1
  // Abel Ashley speaks fluently:
  // - English
  // go to next iteration
  
  
  // for (let user of users) {
  //   console.log(`${user.name} speaks fluently:`);
  //   for (let prop of user.languages) {
  //     if (prop.level >=4)  {
  //       console.log(`- ${prop.name}`);
  //     }
  //   }
  // }
  
  for (let i = 0; i < 3; i++) {
    console.log(`PRIMARY LOOP - loop ${i}`);
  
    // Nested for loop
    for(let j = 0; j < 3; j++) {
      console.log(`----Nested Loop - loop ${i}.${j}----`);
    }
  }
  
  //! In our case Task 2.5
  
  // PRIMARY LOOP - loop 0 - Here we go to users[0]
  // ----Nested Loop - loop 0.0---- Here we check users[0].languages[0]
  // ----Nested Loop - loop 0.1---- Here we check users[0].languages[1]
  // ----Nested Loop - loop 0.2---- Here we check users[0].languages[2]
  // PRIMARY LOOP - loop 1 - Here we go to users[1]
  // ----Nested Loop - loop 1.0---- Here we check users[1].languages[0]
  // ----Nested Loop - loop 1.1---- Here we check users[1].languages[1]
  // ----Nested Loop - loop 1.2---- Here we check users[1].languages[2]
  // PRIMARY LOOP - loop 2 - Here we go to users[2]
  // ----Nested Loop - loop 2.0---- Here we check users[2].languages[0]
  // ----Nested Loop - loop 2.1---- Here we check users[2].languages[1]
  // ----Nested Loop - loop 2.2---- Here we check users[2].languages[2]
  // And so on ...

// Link 2

const album = {
    artist: "The Clash",
    title: "The Clash",
    genre: "punk",
    year: 1977,
    tracklist: [
      { title: "Janie Jones", duration: "2:05" },
      { title: "Remote Control", duration: "3:00" },
      { title: "I'm So Bored With The U.S.A.", duration: "2:24" },
      { title: "White Riot", duration: "1:55" },
      { title: "Hate & War", duration: "2:05" },
      { title: "What's My Name", duration: "1:40" },
      { title: "Deny", duration: "3:03" },
      { title: "London's Burning", duration: "2:10" },
      { title: "Career Opportunities", duration: "1:51" },
      { title: "48 Hours", duration: "1:34" },
      { title: "Garageland", duration: "3:13" },
    ],
    credits: [
      {
        name: "Joe Strummer",
        instruments: ["Guitar", "Vocals"],
      },
      {
        name: "Mick Jones",
        instruments: ["Guitar", "Vocals"],
      },
      {
        name: "Paul Simonon",
        instruments: ["Bass Guitar"],
      },
      {
        name: "Tory Crimes",
        instruments: ["Drums"],
      },
    ],
  };
  
  /*
  Task 1
  
  Print the `title` and `duration` of the 6th song in the 
  tracklist 
  
  Expected output:
  What's my name (1:40)
  */
  
  console.log("\nSixth song:");
  console.log(`${album.tracklist[5].title} (${album.tracklist[5].duration})`);
  
  /*
  Task 2
  
  Looking at the `credits` property, print the name and instruments 
  (separated by commas) of the first musician in the list.
  
  Expected output:
  Joe Strummer: Guitar, Vocals
  */
  console.log("\nFirst musician:");
  console.log(`${album.credits[0].name}: ${album.credits[0].instruments.join(", ")}`);
  
  /*
  Task 3
  
  Using a loop, print all the track titles, numbering them 
  starting from 1, like shown below
  
  Expected output:
  
  1. Janie Jones
  2. Remote Control
  3. I'm So Bored With The U.S.A.
  4. White Riot
  5. Hate & War
  6. What's My Name
  7. Deny
  8. London's Burning
  9. Career Opportunities
  10. 48 Hours
  11. Garageland
  */
  
  console.log("\nTracklist:");
  for (let i = 0; i < album.tracklist.length; i++) {
    console.log(`${i+1}. ${album.tracklist[i].title}`);
  }
  
  
  /*
  Task 4
  
  Using the `credits` property in the object, print each band 
  component together with the instruments they play.
  
  Expected output:
  
  Joe Strummer: Guitar, Vocals
  Mick Jones: Guitar, Vocals
  Paul Simonon: Bass Guitar
  Tory Crimes: Drums
  */
  
  console.log("\nBand members:");
  
  for (const member of album.credits) {
    console.log(`${member.name}: ${member.instruments.join(", ")}`);
  }