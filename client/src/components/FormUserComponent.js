import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'




const questions = [
    {
        name: 'thoughAboutFunerals',
        q: "Did you ever thought about your funerals ?",
        a: ['yes', 'no']
    },
    {
        name: 'howToBeBuried',
        q: "Do you know how you want to be buried ?",
        a: ['Classical funeral', 'Cremation', 'Green', 'Donation', 'I don\'t know']
    },
    {
        name: 'kindOfVibe',
        q: "What kind of vibe ?",
        a: ['sad', 'happy']
    },
    {
        name: 'documents',
        q: "Submit documents ?",
        a: ['yes', 'no']
    }
]



export default class StepForm extends Component {
    state = {
        step: 1,
        thoughAboutFunerals: false,
        howToBeBuried: false,
        kindOfVibe: false,
        documents: false,
        showPopUp: false,
        popUpContent: ''
    }
    popUp = q => {
        let content = ''
        if (q === 'thoughAboutFunerals') {
            content = "blabla funerals"
        } else if (q === 'howToBeBuried') {
            content = "bliblo burried"
        }
        this.setState({
            showPopUp: true,
            popUpContent: content
        });
    }
    handleChange = e => {
        console.log(e.target)
        const { name, value } = e.target
        this.setState({
            [name]: value
        }, () => console.log(this.state));
    }
    answerQuestion = (q, a) => {
        if (a === 'no' || a === 'I don\'t know') {
            this.popUp(q)
        }
        this.setState({
            [q]: a,
            step: this.state.step + 1
        }, () => console.log(this.state))
    }

    // 
    handleSubmit = e => {
      e.preventDefault()
      const {howToBeBuried, kindOfVibe, documents} = this.state
      console.log(howToBeBuried, kindOfVibe, documents)
      // Do axios post request here 
      axios.post('/funeral', {howToBeBuried, kindOfVibe, documents}).then(response => {
        console.log(response.data)
        this.props.history.push("/");
      }).catch(err => console.log(err))
    }


    render() {
        const questionsMap = questions.map((x, i) => {
            return (<div>
                <label>{x.q}</label>
                {x.a.map(a => {
                    return (
                        <>
                            <button onClick={e => {
                                e.preventDefault()
                                this.answerQuestion(x.name, a)
                            }}>{a}</button>
                        </>
                    )
                })}
            </div >)
        });
        const renderedForm = (
            <form>
                {questionsMap[this.state.step - 1]}
                {this.state.step < 5 ?
                    <button onClick={e => {
                        e.preventDefault()
                        this.answerQuestion(null, '')
                    }}>Skip</button>
                    :
                    <button onClick={
                        this.handleSubmit
                    }>Done</button>
                }
            </form>
        )
        return (
            <>
                {renderedForm}
                {this.state.showPopUp && <div>{this.state.popUpContent}</div>
                }
            </>
        )
    }
}




