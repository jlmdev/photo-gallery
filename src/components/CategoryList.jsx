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
          <body className="hero-image">
            <div>
              <header>
                <h1>A few of my favorite things...</h1>
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
                <span className="photo-credit">
                  Background Photo by{' '}
                  <a href="https://unsplash.com/@artplay?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                    Maxim Selyuk
                  </a>{' '}
                  on{' '}
                  <a href="https://unsplash.com/s/photos/tools?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                    Unsplash
                  </a>
                </span>
              </header>
              <Switch>
                <Route exact path="/"></Route>
                <Route exact path="/pandas" component={Pandas} />
                <Route path="/pandas/:index" component={PandaPhotoDetail} />
                <Route exact path="/miniatures" component={Miniatures} />
                <Route
                  path="/miniatures/:index"
                  component={MiniaturePhotoDetail}
                />
                <Route path="*">Not Found</Route>
              </Switch>
              <p></p>
            </div>
          </body>
        </>
      </div>
    )
  }
}
