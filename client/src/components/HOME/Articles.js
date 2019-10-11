import React, { Component } from "react";
import axios from "axios";

export default class Articles extends Component {
  state = {
    listOfArticles: null
  };
  componentDidMount = () => {
    axios.get("/articles").then(response => {
      console.log(response.data);
      this.setState({
        listOfArticles: response.data
      });
    });
  };

  render() {
    const articles =
      this.state.listOfArticles &&
      this.state.listOfArticles.map(x => {
        return (
          <div className='homeSection-btn-row'>
          <div className="homeArticle" key={x._id}>
              <h3>{x.title}</h3>
              <img src={x.imageUrl}/>
            {x.content.length > 200 ? (
              <p>
                {[...x.content].splice(0, 200).join("")}
                <span style={{ marginLeft: "5px", color: "blue" }}>
                  more...
                </span>
              </p>
            ) : (
              <p>{x.content}</p>
            )}
            </div>
            </div>
        );
      });

    return (
      <div>
        <p>Explore</p>
        <div>{articles}</div>
      </div>
    );
  }
}
