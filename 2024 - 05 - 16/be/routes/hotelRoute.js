import {
  addHotel,
  showAllHotels,
  deleteHotelById,
  removeAllHotels,
  updateHotelWithRoom,
} from "../controllers/hotelController.js";
import { Router } from "express";

const router = Router();

router.route("/").get(showAllHotels).post(addHotel);
router.route("/:id").put(updateHotelWithRoom);
router.delete("/del", removeAllHotels);
router.delete("/del/:id", deleteHotelById);

export default router;
