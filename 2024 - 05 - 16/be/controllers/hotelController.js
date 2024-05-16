import Hotel from "../models/Hotel.js";
import Owner from "../models/Owner.js";

//* 1. show all the hotels
export const showAllHotels = async (req, res, next) => {
  try {
    const limit = 5; // how many hotels i want to send in response || render on the page

    //? req.query
    // In Express.js, req.query is an object that contains the URL query parameters. It is used to access the data sent in the URL after the ? character.
    const {
      page = 1,
      breakfast,
      rating = 0,
      sortby = "name",
      sortdir = "asc",
    } = req.query;
    // Default values specify what req.query properties should be if we are not specifying it in Query Parameters
    const skip = (page - 1) * limit; // how many documents we want to skip based on the "page" property of req.query obj

    //? where
    // The .where() method in Mongoose is a chainable method that adds a query filter to the current query. It is used to filter the documents in the collection based on a specific condition. The .where() method takes a string argument that specifies the name of the field to filter on, and an optional second argument that specifies the value or condition to filter by.
    // we can set default values for query parameters

    //? exec()
    // In Mongoose, the .exec() method is used to execute a Mongoose query and return a promise that resolves to the result of the query.

    // When you call a Mongoose query method like find(), findOne(), update(), remove(), or any other query method, it returns a query object that is not yet executed. The query object contains the query criteria and any additional query options, but it does not actually query the database until you call the .exec() method.

    const allHotels = Hotel.find()
      .where("rating")
      .gt(rating)
      .sort({ [sortby]: sortdir })
      .skip(skip)
      .limit(limit)
      .populate("ownedBy");

    if (breakfast) {
      allHotels.where("breakfast").equals(breakfast);
    }

    const hotels = await allHotels.exec();

    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

//* 2. add a hotel
export const addHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(200).send(`${req.body.name} has been added!`);
  } catch (error) {
    next(error);
  }
};

//* 3. delete a hotel by id
export const deleteHotelById = async (req, res, next) => {
  try {
    const hotelId = req.params.id;
    const deleted = await Hotel.findByIdAndDelete(hotelId);
    if (!deleted) throw new Error(`hotel not found`);
    res.status(200).send(`deleted: ${hotelId}`);
  } catch (error) {
    next(error);
  }
};

//* 4. delete all hotels
export const removeAllHotels = async (next, res) => {
  try {
    await Hotel.deleteMany({});
    res.status(200).send(`all gone`);
  } catch (error) {
    next(error);
  }
};

//* 5. update a hotel with a new room
export const updateHotelWithRoom = async (req, res, next) => {
  const { name, description, sleeps, bedType, view, hasBalcony, rate } =
    req.body;

  try {
    const toUpdate = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          rooms: {
            name,
            description,
            sleeps,
            bedType,
            view,
            hasBalcony,
            rate,
          },
        },
      },
      { new: true }
    );
    res.status(200).json({ message: "room created", toUpdate });
  } catch (error) {
    next(error);
  }
};
