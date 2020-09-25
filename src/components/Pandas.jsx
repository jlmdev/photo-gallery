import React, { Component } from 'react'

export class Pandas extends Component {
  render() {
    return (
      <div>
        <h1>Panda Bears</h1>
        <p>
          Pandas are bears native to south-central China, and are objectively
          the cutest animals on earth.
        </p>
        <figure>
          <img
            src="https://things-i-like.netlify.com/images/baby_panda.jpg"
            alt="Panda Waving"
          />
          <figcaption>
            Panda Waving
            <a href="https://codeburst.io/pandas-for-data-stuff-code-challenge-7972207a8294">
              Source
            </a>
          </figcaption>
        </figure>
      </div>
    )
  }
}
