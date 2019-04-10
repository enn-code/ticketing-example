import React from "react";
import styled from "styled-components";

const SeatplanWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const generateSeats = (numSeats, rowLength) => {
  const numRows = Math.floor(numSeats / rowLength);
  const finalRowLength = numSeats % rowLength;

  const seatPlan = {};

  for (let i = 0; i < numRows; i++) {
    const rowName = `row-${i}`;
    seatPlan[rowName] = [];
    for (let j = 0; j < rowLength; j++) {
      seatPlan[rowName].push(j);
    }
    if (i === numRows - 1) {
      const finalRowName = `row-${i + 1}`;
      seatPlan[finalRowName] = [];
      for (let k = 0; k < finalRowLength; k++) {
        seatPlan[finalRowName].push(k);
      }
    }
  }

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
