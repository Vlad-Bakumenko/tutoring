import Hotel from "../models/Hotel.js";

//* 1. show all the hotels
export const showAllHotels = async (req, res, next) => {
  try {
    const allHotels = await Hotel.find();
    res.status(200).json(allHotels);
    
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
