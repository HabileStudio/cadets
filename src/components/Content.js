import React, { Component } from 'react'
import SmallBody from './SmallBody'


class Content extends Component {

  render() {
    let sbData = this.props.data.map( d => {
      return d.reduce( (obj, value, i) => ({...obj, [this.props.fields[i]]: value}), {} )
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