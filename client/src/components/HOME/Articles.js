import React, { Component } from 'react';
import axios from 'axios';

export default class Articles extends Component {
  state = {
    listOfArticles: null
  }
  componentDidMount = () => {
    axios.get('/articles').then(response => {
      console.log(response.data)
      this.setState({
        listOfArticles : response.data
      })
    })
  }


  render() {

    const articles = this.state.listOfArticles && this.state.listOfArticles.map(x => {
      return (
        <div key={x._id}>
          <h3>{x.title}</h3>
          <p>{x.content}</p>
        </div>
      )
    })

    return (
      <div>
        <p>Explore</p>
        <div>
          {articles}
          </div>
      </div>
    )
  }
}
