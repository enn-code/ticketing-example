import React from "react";
import styled from "styled-components";

import { buildSeatObject } from "../../logic/seatplan.logic";

const SeatplanWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const generateSeats = (numSeats, rowLength) => {
  const seatPlan = buildSeatObject(numSeats, rowLength);

  return Object.keys(seatPlan).map(row => {
    return (
      <div>
        {seatPlan[row].map(seat => {
          return <span>A</span>;
        })}
      </div>
    );
  });
};

const Seats = props => {
  return <SeatplanWrapper>{generateSeats(23, 5)}</SeatplanWrapper>;
};

export default Seats;
