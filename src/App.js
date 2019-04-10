import React, { createContext, Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const ThemeContext = createContext("blue");

class ThemeStore extends React.Component {
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

const RenderTheme = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, onToggleTheme }) => (
        <div>
          <h1>{theme}</h1>
          <button onClick={() => onToggleTheme()}>Toggle Theme</button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

class App extends Component {
  render() {
    return (
      <ThemeStore>
        <div className="App">
          <header className="App-header">
            <RenderTheme />
          </header>
        </div>
      </ThemeStore>
    );
  }
}

export default App;
