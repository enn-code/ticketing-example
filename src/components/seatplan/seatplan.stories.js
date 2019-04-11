import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Seats from "./seats.seatplan";

storiesOf("seatplan/seatplan", module).add("generate seating", () => <Seats />);
