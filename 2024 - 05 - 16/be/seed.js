import mongoose from "mongoose";
import Hotel from "./models/Hotel.js";
import Owner from "./models/Owner.js";
import { faker } from "@faker-js/faker";

//* IIFE - immediately invoked function expression
(async function () {
  //* CONNECT TO DB
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("Database is connected! 🐱");
  } catch (error) {
    console.log(error.message);
    console.log("Database connection failed... :(");
  }

  //* DELETE ALL OWNERS

  try {
    await Owner.deleteMany({});
    console.log("owners are deleted");
  } catch (error) {
    console.log(error);
  }
  //* DELETE ALL HOTELS
  try {
    await Hotel.deleteMany({});
    console.log("hotels are deleted");
  } catch (error) {
    console.log(error);
  }
  //* CREATE 10 RANDOM OWNERS
  let ownerArr = [];
  try {
    for (let i = 0; i < 10; i++) {
      const data = {
        name: faker.person.fullName(),
        password: "1234",
      };
      const owners = new Owner(data);
      ownerArr.push(owners);
    }
    await Owner.insertMany(ownerArr);
    console.log(`${ownerArr.length} owners are added`);
  } catch (error) {
    console.log(error);
  }

  //* CREATE 100 RANDOM HOTELS

  let hotelArr = [];
  const hotelNames = faker.helpers.uniqueArray(faker.person.fullName, 100);
  const ownerIds = ownerArr.map((owner) => owner._id);
  try {
    for (let i = 0; i < 100; i++) {
      const data = {
        name: `Hotel ${hotelNames[i]}`,
        ownedBy: faker.helpers.arrayElement(ownerIds),
        description: faker.lorem.sentence(2),
        breakfast: faker.datatype.boolean(),
        address: {
          street:
            faker.location.streetAddress() + faker.location.buildingNumber(),
          zip: faker.location.zipCode(),
          city: faker.location.city(),
          country: faker.location.country(),
        },
        facilities: {
          canPark: faker.datatype.boolean(),
          hasWifi: faker.datatype.boolean(),
        },
        stars: faker.number.int({ min: 1, max: 5 }),
        rating: faker.number.float({ min: 1, max: 10, fractionDigits: 2 }),
      };
      hotelArr.push(data);
    }
    await Hotel.insertMany(hotelArr);
    console.log(`${hotelArr.length} hotels are added`);
  } catch (error) {
    console.log(error);
  }

  //* UPDATE HOTELS WITH ROOMS

  const rooms = ["SINGLE", "DOUBLE", "TWIN", "KING"];
  const views = ["NO-VIEW", "MOUNTAIN", "SEA", "GARDEN", "CITY"];
  const baths = ["SHOWER", "BATH"];

  // for every hotel we will include all 4 rooms
  const hotelData = await Hotel.find();

  try {
    for (let hotel of hotelData) {
      for (let room of rooms) {
        await Hotel.updateOne({_id: hotel._id}, {
          $push:{
            rooms:{
              name: room + " Room",
              description: faker.lorem.sentence(2),
              sleeps: rooms.indexOf(room) + 1,
              bedType: room + " Bed",
              view: faker.helpers.arrayElement(views),
              bath: faker.helpers.arrayElement(baths),
              hasBalcony: faker.datatype.boolean(),
              rate: faker.commerce.price({min:10, max:1111})
            }
          }
        })
      }
    }
    console.log(`4 rooms are created for ${hotelData.length} hotels`);
  } catch (error) {
    console.log(error);
  }
  //* SHUT DOWN THE CONNECTION TO DB
  mongoose.connection.close();
})();