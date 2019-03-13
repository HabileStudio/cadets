import React, { Component } from 'react'
import Description from './Description'

class SmallBody extends Component {
  constructor(props){
    super(props)
    this.state = {
      clicked:       false
    }
    this.formatDate = this.formatDate.bind(this)
    this.toggleDescription = this.toggleDescription.bind(this)
  }

  toggleDescription(){
    this.setState({ clicked:  !this.state.clicked })
  }
  formatDate(date){
    // input is like "2019-Mar-12 00:34"
    // we want       "12 Mar 2019, 00:34"
    return date.replace(/(\d{4})-(\w{3})-(\d{2}) (\d{2}:\d{2})/,
                        '$3 $2 $1, $4')
  }

  render() {
    const d = this.props.data
    return (
      <div className="SmallBody"
           onClick={this.toggleDescription}>
        <span className="name">{d.des}</span>
        <span className="time">{this.formatDate(d.cd)}</span>
        <span className="distance">{parseFloat(d.dist).toPrecision(2)} au</span>
        <span className="velocity">{parseFloat(d.v_rel).toPrecision(2)} km/s</span>
        <span className="magnitude">H = {parseFloat(d.h).toPrecision(4)}</span>
        <Description data={d}
                     visible={this.state.clicked} />
      </div>
    );
  }
}


export default SmallBody