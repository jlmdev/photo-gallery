import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Pandas } from './components/Pandas'
import { Miniatures } from './components/Miniatures'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Welcome to my SPA</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Go Home</Link>
              </li>
              <li>
                <Link to="/1">Page 1</Link>
              </li>
              <li>
                <Link to="/2">Page 2</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/1">
            <Pandas />
          </Route>
          <Route exact path="/2">
            <Miniatures />
          </Route>
          <Route path="*">Not Found</Route>
        </Switch>
      </>
    )
  }
}

export default App
