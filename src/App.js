import React, { createContext, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// TODO: Remove App.css dependency (and move App.js)
import "./App.css";

import { ThemeProvider } from "./providers/theme.context";
import SeatplanView from "./views/seatplan.views";
import CheckoutView from "./views/checkout.views";
import ErrorView from "./views/error.views";
import Layout from "./views/layout.views";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <div className="App">
          <Router>
            <Layout>
              <Switch>
                <Route path="/" exact component={SeatplanView} />
                <Route path="/checkout" component={CheckoutView} />
                <Route component={ErrorView} />
              </Switch>
            </Layout>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
