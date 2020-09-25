import React, { Component } from 'react'

export class PhotoDetail extends Component {
  render() {
    return (
      <div>
        <figure>
          <img src={this.props.src} alt="" />
        </figure>
      </div>
    )
  }
}
