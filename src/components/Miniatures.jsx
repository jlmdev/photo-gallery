import React, { Component } from 'react'

export class Miniatures extends Component {
  render() {
    return (
      <div>
        <h1>Miniature Painting</h1>
        <p>
          I enjoy painting miniatures from board games. I've been painting since
          early 2018, here's some of my work.
        </p>
        <figure>
          <img
            src="https://things-i-like.netlify.com/images/city_of_kings.jpg"
            alt="City of Kings"
          />
          <figcaption>
            City of Kings
            <a href="https://www.instagram.com/p/Btv-0uYH8Xc">Source</a>
          </figcaption>
        </figure>
      </div>
    )
  }
}
