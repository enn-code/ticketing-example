import React, { createContext } from "react";

const ThemeContext = createContext("blue");

export const ThemeConsumer = ThemeContext.Consumer;

export class ThemeProvider extends React.Component {
  state = {
    theme: "blue"
  };

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === "blue" ? "green" : "blue"
    }));
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          theme,
          onToggleTheme: this.toggleTheme
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
