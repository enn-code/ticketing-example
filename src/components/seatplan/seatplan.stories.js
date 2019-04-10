import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Seats } from "./seats.seatplan";

storiesOf("seatplan/seatplan", module).add("with text", () => (
  <Seats>
    <div>div1</div>
    <div>div2</div>
  </Seats>
));
