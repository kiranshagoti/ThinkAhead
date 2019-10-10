import React, { Component } from "react";
import axios from "axios";
const questions = [
  {
    name: "thoughtAboutFuneral",
    q: "Have you ever thought about your funeral ?",
    a: ["yes", "no"]
  },
  {
    name: "howToBeBuried",
    q: "Do you know how you want to be buried ?",
    a: ["Classic funeral", "Cremation", "Tree", "Science", "I don't know"]
  },
  {
    name: "kindOfVibe",
    q: "What kind of vibe ?",
    a: ["sad", "happy"]
  } 
];
class FormUserComponent extends Component {
  state = {
    step: 0,
    thoughtAboutFuneral: false,
    howToBeBuried: false,
    kindOfVibe: false,
    showPopUp: false,
    popUpContent: ""
  };
  popUp = q => {
    let content = "";
    if (q === "thoughtAboutFuneral") {
      content = (
        <div className='Q-popup'>
          <p>Well, there are a lot of possibilities. You can even be a diamond. Checkout our articles for some ideas!</p>
          <button onClick={this.setState({showPopUp: false})}>ok</button>
        </div>
      );
    } else if (q === "howToBeBuried") {
      content = (
        <div className='Q-popup'>
          <p>Well, there are a lot of possibilities. You can even be a diamond. Checkout our articles for some ideas!</p>
          <button onClick={this.setState({showPopUp: false})}>ok</button>
        </div>
      );
    }
    this.setState({
      showPopUp: true,
      popUpContent: content
    });
  };
  
  handleChange = e => {
    console.log(e.target);
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value
      },
      () => console.log(this.state)
    );
  };
  answerQuestion = (q, a) => {
    // if (a === "no" || a === "I don't know") {
    //   this.popUp(q);
    // }
    this.setState(
      {
        [q]: a,
        step: this.state.step + 1
      },
      () => console.log(this.state)
    );
  };
  //
  handleSubmit = e => {
    e.preventDefault();
    const { howToBeBuried, kindOfVibe } = this.state;
    console.log(howToBeBuried, kindOfVibe);
    // Do axios post request here
    axios
      .post("/funeral/new", { howToBeBuried, kindOfVibe })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err));
    this.props.history.push("/");
  };
  render() {
    const questionsMap = questions.map((x, i) => {
      return (
        
        <div>
          <label>{x.q}</label><br/>
        
          {x.a.map(a => {
        
            return (
              <>
                <button className="Q-btn"onClick={e => {
                  e.preventDefault();
                    this.answerQuestion(x.name, a);
                  }}>{a}</button>
              </>
            );
          })}
        </div>
      );
    });
    //########
    const renderedForm = (
      <form>
        {questionsMap[this.state.step]}
        {this.state.step < questions.length ? (
          <button className='Q-skip'
            onClick={e => {
              e.preventDefault();
              this.answerQuestion(null, "");
            }}
          >
            Skip
          </button>
        ) : (
          <button className='Q-skip' onClick={this.handleSubmit}>Done</button>
        )}
      </form>
    );
    return (
      <>
      <div className='welcome'>
        <div className='rectangle'>
        {renderedForm}
        </div>
        {this.state.showPopUp && <div>{this.state.popUpContent}</div>}
        </div>
      </>
    );
  }
}
export default FormUserComponent;