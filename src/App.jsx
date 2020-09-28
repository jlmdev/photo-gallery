import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Gallery from './components/gallery.json'
import { CategoryList } from './pages/CategoryList'
import { PhotoList } from './pages/PhotoList'

class App extends Component {
  render() {
    return (
      <>
        <body className="hero-image">
          <header>
            <h1>A few of my favorite things...</h1>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">Go Home</Link>
                </li>
                <li>
                  <Link to="/pandas">Pandas</Link>
                </li>
                <li>
                  <Link to="/miniatures">Miniatures</Link>
                </li>
              </ul>
            </nav> */}
          </header>
          <Switch>
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/:category" component={PhotoList} />
          </Switch>
        </body>
      </>
    )
  }
}

export default App
