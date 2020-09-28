import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Pandas } from '../components/Pandas'
import { Miniatures } from '../components/Miniatures'
import { PandaPhotoDetail } from '../components/PandaPhotoDetail'
import { MiniaturePhotoDetail } from '../components/MiniaturePhotoDetail'

export class CategoryList extends Component {
  render() {
    return (
      <div>
        <>
          {/* <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/pandas" component={Pandas} />
            <Route path="/pandas/:index" component={PandaPhotoDetail} />
            <Route exact path="/miniatures" component={Miniatures} />
            <Route path="/miniatures/:index" component={MiniaturePhotoDetail} />
            <Route path="*">Not Found</Route>
          </Switch> */}
          <p></p>
        </>
      </div>
    )
  }
}
