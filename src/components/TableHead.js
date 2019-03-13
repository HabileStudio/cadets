import React, { Component } from 'react'


let fields = ['name',
              'arrival',
              'distance',
              'speed',
              'brightness']

class TableHead extends Component {

  render() {
    fields = fields.map( (f,i) => <span key={i}>{f}</span> )
    return (
      <div className="TableHead">
        {fields}
      </div>
    )
  }
}



export default TableHead