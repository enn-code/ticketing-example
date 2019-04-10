import { buildSeatObject } from "../../logic/seatplan.logic";

it("seating plan has equal row lengths for a divisible seats and rows", () => {
  const seatPlan = buildSeatObject(10, 2);

  const rowLengths = Object.keys(seatPlan).map(key => {
    return seatPlan[key].length;
  });

  const areRowsEqual = rowLengths.reduce((prev, cur) => {
    if (prev === false) {
      return false;
    } else if (prev === cur) {
      return cur;
    }
    return false;
  });

  expect(areRowsEqual).toBeTruthy();
});

it("seating plan has different final row length for non-divisible inputs", () => {
  const seatPlan = buildSeatObject(11, 3);

  const rowLengths = Object.keys(seatPlan).map(key => {
    return seatPlan[key].length;
  });

  const arrayLength = rowLengths.length;
  const isFinalRowEqual =
    rowLengths[arrayLength - 1] === rowLengths[arrayLength - 2];

  expect(isFinalRowEqual).toBeFalsy();
});
