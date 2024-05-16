import React from "react";

function Hotel({ hotel }) {
  function getStars() {
    const stars = [];
    for (let i = 0; i < hotel.stars; i++) {
      stars.push("★");
    }
    return stars;
    }
    // console.log(hotel.rating)

  return (
    <div className="hotel-div">
          <h2>{hotel.name}</h2>
          <p>{getStars()}</p>
      <p>
        owned by {hotel.ownedBy.name}
      </p>
      <p>Rating: {+hotel.rating}</p>
      <p>{hotel.breakfast}</p>
      <p>Breakfast: {hotel.breakfast ? "Yes" : "No"}</p>
      <p>Parking: {hotel.facilities.canPark ? "Yes" : "No"}</p>
      <p>Wifi: {hotel.facilities.hasWifi ? "Yes" : "No"}</p>
    </div>
  );
}

export default Hotel;
