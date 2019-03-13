import React, { Component } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Loading from './components/Loading'
import TableHead from './components/TableHead'
import Content from './components/Content'
import Pagination from 'react-js-pagination'
import './App.css'
import './Animations.css'

const API = 'https://ssd-api.jpl.nasa.gov/cad.api'
const DEFAULT_QUERY = '?body=Earth&date-min=2019-01-01&date-max=2019-12-31'

class App extends Component {
  constructor() {
    super()

    this.state = {
      fields:     null,
      data:       null,
      count:      null,
      isLoading:  true,
      error:      'null',
      activePage: 5
    }

    this.handlePageChange = this.handlePageChange.bind(this)
  }
  componentDidMount() {
    this.setState({ isLoading: true })

    axios.get(API + DEFAULT_QUERY)
      // .then(result => console.log(result))
      .then(result => {
        // console.log('result', result)
        this.setState({
          fields:    result.data.fields,
          data:      result.data.data,
          count:     result.data.count,
          isLoading: false
        })
        // console.log('data',this.state.data)
      })
      .catch(error => this.setState({
        error,
        isLoading: false
      }))
  }


  handlePageChange(pageNumber) {
    this.setState({ isLoading: true })

    let query = '?body=Earth&date-min='+ (2015 + pageNumber) + '-01-01&date-max='+ (2016 + pageNumber) + '-12-31'

    axios.get(API + query)
      // .then(result => console.log(result))
      .then(result => {
        // console.log('result', result)
        this.setState({
          fields:    result.data.fields,
          data:      result.data.data,
          count:     result.data.count,
          isLoading: false
        })
        // console.log('data',this.state.data)
      })
      .catch(error => this.setState({
        error,
        isLoading: false
      }))

    this.setState({activePage: pageNumber});
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
      console.log(this.state.data)
      return (
        <div className="App">
          <Header />
          <Pagination />
          <TableHead />
          <Content data={this.state.data} />
        </div>
      )
    }
    
  }
}

export default App;
