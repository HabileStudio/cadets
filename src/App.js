import React, { Component } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Loading from './components/Loading'
import TableHead from './components/TableHead'
import Content from './components/Content'
import Pagination from './components/Pagination'
import './App.css'
import './Animations.css'

const API = 'https://ssd-api.jpl.nasa.gov/cad.api'
const DEFAULT_QUERY = '?body=Earth&date-min=2019-01-01&date-max=2019-12-31'
// const yearsRange = [
//   2015,2016,2017,2018,2019,2020,2021,2022,2023,2024
// ]

class App extends Component {
  constructor() {
    super()

    this.state = {
      fields:      null,
      data:        null,
      count:       null,
      isLoading:   true,
      error:       'null',
      currentYear: 2019
    }

    this.query      = this.query.bind(this)
  }
  componentDidMount() {
    this.query(this.state.currentYear)
  }

  query(year) {
    this.setState({ isLoading: true })

    let query = '?body=Earth&date-min='+ year + '-01-01&date-max='+ year + '-12-31'

    axios.get(API + query)
      .then(result => {
        this.setState({
          data:        result.data.data,
          count:       result.data.count,
          currentYear: year,
          isLoading:   false
        })
        return this.state.data
      })
      .catch(error => this.setState({
        error,
        isLoading: false
      }))
  }

  render() {

    // LOADING...
    if(this.state.isLoading){
      return (
        <div className="App">
          <Header />
          <Loading />
        </div>
      )
    }

    // DATA IS FETCHED
    else {
      return (
        <div className="App">
          <Header />
          <Pagination currentYear={this.state.currentYear}
                      min="1900"
                      max="2100"
                      query={this.query} />
          <TableHead />
          <Content data={this.state.data} />
        </div>
      )
    }
    
  }
}

export default App;
