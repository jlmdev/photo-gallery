import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Pandas } from './Pandas'
import { Miniatures } from './Miniatures'
import { PandaPhotoDetail } from './PandaPhotoDetail'
import { MiniaturePhotoDetail } from './MiniaturePhotoDetail'

export class CategoryList extends Component {
  render() {
    return (
      <div>
        <>
          <header>
            <h1>Welcome to my SPA</h1>
            <nav>
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
            </nav>
          </header>
          <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/pandas" component={Pandas} />
            <Route path="/pandas/:index" component={PandaPhotoDetail} />
            <Route exact path="/miniatures" component={Miniatures} />
            <Route path="/miniatures/:index" component={MiniaturePhotoDetail} />
            <Route path="*">Not Found</Route>
          </Switch>
        </>
      </div>
    )
  }
}
