import albumsData from "../data/albumsData.js";
import usersData from "../data/usersData.js";

// function that checks if email and password are not falsy values(e.g. empty strings)
export const checkInputs = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    const error = new Error("Missing email or password");
    next(error);
  }
  next();
};

// function that checks if user with provided email and password exists in usersData array
export const checkLoggedInUser = (req, res, next) => {
  const { email, password } = req.body;
  const loggedInUser = usersData.find(
    (user) => user.email === email && user.password === password
  );
  if (!loggedInUser) {
    const error = new Error("There is no such user registered");
    next(error);
  }
  next();
};

// function that checks if album with provided id exists in albumsData array
export const checkExistAlbum = (req, res, next) => {
  const necessaryAlbum = albumsData.find(album => album.id === req.params.id);
  if (!necessaryAlbum) {
    const error = new Error("There is no such album");
    next(error);
  }
  next();
}

// function that checks if album that user want to add has all necessary fields(title, artist, year)
export const checkAlbumInputs = (req,res,next) => {
  const { title, artist, year } = req.body;
  if (!title || !artist || !year) {
    const error = new Error("Missing input data for album");
    next(error);
  }
  next();
}