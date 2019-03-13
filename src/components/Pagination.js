import React, { Component } from 'react'
import { ReactComponent as Loupe } from './loupe.svg'


class Pagination extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentYear:       this.props.currentYear
    }

    this.minClick  = this.minClick.bind(this)
    this.prevClick = this.prevClick.bind(this)
    this.nextClick = this.nextClick.bind(this)
    this.maxClick  = this.maxClick.bind(this)
  }

  minClick(){
    this.setState({currentYear: this.props.min})
  }
  maxClick(){
    this.setState({currentYear: this.props.max})
  }

  prevClick(){
    let potentialPrev = this.state.currentYear - 1
    // check if there's no prev
    if (potentialPrev < this.props.min) {
      console.log('below the minimum')
      return false
    }
    // if there's a prev change the currentYear in the state
    this.setState({currentYear: potentialPrev})
  }

  nextClick(){
    let potentialNext = parseInt(this.state.currentYear) + 1
    // check if there's no next
    if (potentialNext > this.props.max) {
      console.log('over the maximum')
      return false
    }
    // if there's a next change the currentYear in the state
    this.setState({currentYear: potentialNext})
  }

  render() {
    return (
      <ul className="Pagination">
        {/* em className="pagination-help">You can use the keyboard left / right arrows</em> */}
        <li key="min"      onClick={this.minClick}>{this.props.min}</li>
        <li key="prev"     onClick={this.prevClick}>{`\u25C0`}</li>
        <li key="current"  onClick={() => this.props.query(this.state.currentYear) } className="active">
          <span className="currentYear">
            {this.state.currentYear}
          </span>
          <span className="retrieve">
            <Loupe />
          </span>
        </li>
        <li key="next"     onClick={this.nextClick}>{`\u25BA`}</li>
        <li key="max"      onClick={this.maxClick}>{this.props.max}</li>
      </ul>
    )
  }
}

export default Pagination