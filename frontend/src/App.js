import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';
import Book from './components/Book';


function App() {
  const [theme, setTheme] = useState(light);

  const changeTheme = () => {
    setTheme(theme.title === 'Light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header changeTheme={changeTheme} theme={theme} />
        <div>
          <Switch>
            <Route path="/book/:id">
              <Book />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider >
  );
}

export default App;
