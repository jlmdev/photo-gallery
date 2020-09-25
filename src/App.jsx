import React, { Component } from 'react'
import Gallery from './components/gallery.json'
import { CategoryList } from './components/CategoryList'

class App extends Component {
  render() {
    return (
      <>
        <CategoryList />
      </>
    )
  }
}

export default App
