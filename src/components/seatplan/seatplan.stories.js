import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Seatplan } from "./seatplan.component";

storiesOf("seatplan/seatplan", module).add("with text", () => (
  <Seatplan>
    <div>div1</div>
    <div>div2</div>
  </Seatplan>
));
