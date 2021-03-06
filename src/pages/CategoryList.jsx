import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Gallery from '../components/gallery.json'

class CategoryCard extends Component {
  render() {
    return (
      <div>
        {
          <figure>
            <Link to={`/${this.props.categoryName}`} className="image-link">
              <img
                src={this.props.categoryDetails.photos[0].imageURL}
                alt={this.props.categoryDetails.title}
              />
            </Link>
            <figcaption>
              {this.props.categoryDetails.description}
              <a href={this.props.categoryDetails.photos[0].sourceURL}>
                Source
              </a>
            </figcaption>
          </figure>
        }
      </div>
    )
  }
}

export class CategoryList extends Component {
  render() {
    const categoryNames = Object.keys(Gallery)

    console.log(this.props.category)
    return (
      <div className="photo-entry">
        <section className="photo-list">
          {categoryNames.map(categoryName => (
            <CategoryCard
              key={categoryName}
              categoryName={categoryName}
              categoryDetails={Gallery[categoryName]}
            />
          ))}

          <p></p>
        </section>
      </div>
    )
  }
}
