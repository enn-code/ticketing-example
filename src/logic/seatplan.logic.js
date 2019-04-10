export const buildSeatObject = (numSeats, rowLength) => {
  const numRows = Math.floor(numSeats / rowLength);
  const finalRowLength = numSeats % rowLength;

  const seatPlan = {};

  for (let i = 0; i < numRows; i++) {
    const rowName = `row-${i}`;
    seatPlan[rowName] = [];
    for (let j = 0; j < rowLength; j++) {
      seatPlan[rowName].push(j);
    }
    if (i === numRows - 1 && finalRowLength > 0) {
      const finalRowName = `row-${i + 1}`;
      seatPlan[finalRowName] = [];
      for (let k = 0; k < finalRowLength; k++) {
        seatPlan[finalRowName].push(k);
      }
    }
  }
  return seatPlan;
};
