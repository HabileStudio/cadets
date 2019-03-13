import React, { Component } from 'react'
import SmallBody from './SmallBody'


class Content extends Component {

  render() {
    let sbData = this.props.data.map ( d => {
      return ({
      des:    d[0],
      cd:     d[3],
      dist:   d[4],
      v_rel:  d[7],
      h:      d[10]})
    })
    let smallBodies = sbData.map( (d, i) => {
      return (
        <SmallBody data={d}
                    key={i} />
      )
    })
    return (
      <div className="Content">
        {smallBodies}
      </div>
    )
  }
}



export default Content