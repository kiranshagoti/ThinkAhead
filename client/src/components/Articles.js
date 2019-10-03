import React, { Component } from 'react'

export default class Articles extends Component {
  state = {
    listOfArticles: null
  }
  componentDidMount = () => {
    // axios.get(...)
    //    this.setState({listOfArticles : response.data})
  }


  render() {

    // const articles = this.state.listOfArticles.map(x => .....)

    return (
      <div>
        <p>list of articles comes here...</p>
        {/* {articles} */}
      </div>
    )
  }
}
