import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Gallery from '../components/gallery.json'
// import { PandaPhotoDetail } from '../components/PandaPhotoDetail'

export class PhotoList extends Component {
  // state = {
  //   pandas: Gallery.pandas,
  //   photos: Gallery.pandas.photos,
  // }

  render() {
    const category = this.props.match.params.category
    const PhotoCategory = Gallery[category]
    const Photos = PhotoCategory.photos

    return (
      <div className="photo-entry">
        <h2>{PhotoCategory.title}</h2>
        <p>{PhotoCategory.description}</p>
        <section className="photo-list">
          {Photos.map((photo, index) => (
            <figure>
              <Link to={`/${category}/${index}`} className="image-link">
                <img src={photo.imageURL} alt={photo.title} />
              </Link>
              <figcaption>
                {photo.title}
                <a href={photo.sourceURL}>Source</a>
              </figcaption>
            </figure>
          ))}
        </section>
      </div>
    )
  }
}
