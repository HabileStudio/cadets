import React, { Component } from 'react'
import { ReactComponent as Radar } from './radar.svg';

class Loading extends Component {

  render() {
    return (
      <div className="Loading">
        <Radar />
        <p>
          Searching...
        </p>
      </div>
    )
  }
}



export default Loading