import React from "react";
import { ThemeConsumer } from "../../../providers/theme.context.js";

export const RenderTheme = () => {
  return (
    <ThemeConsumer>
      {({ theme, onToggleTheme }) => (
        <div>
          <h1>{theme}</h1>
          <button onClick={() => onToggleTheme()}>Toggle Theme</button>
        </div>
      )}
    </ThemeConsumer>
  );
};
