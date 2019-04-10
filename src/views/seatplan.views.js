import React from "react";

import Seats from "../components/seatplan/seats.seatplan";
import ConfirmSeats from "../components/seatplan/confirm.seatplan";

const SeatplanView = () => {
  return (
    <div>
      <Seats />
      <ConfirmSeats />
    </div>
  );
};

export default SeatplanView;
