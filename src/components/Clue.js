import React, { Component } from 'react';

class Clue extends Component {
  constructor(){
    super();

    this.state = {
      showAnswer: false
    }
  }

  render(){
    const { value, question, answer } = this.props.clue;

    return(
      <div className="row clue" onClick={() => this.handleClickClue()}>
        <div className="col-12">
          <h4 className="clue-value">{value || 'unknown' }</h4>
        </div>
        <hr/>
        <div className="col-12">
          <h5 className="clue-question">{question}</h5>
        </div>
        <hr/>
        <div className={`col-12 ${this.state.showAnswer ? 'text-revealed' : 'text-hidden'}`}>
          <h5 className="clue-answer">{answer}</h5>
        </div>
      </div>
    )
  }

  handleClickClue(){
    this.setState({ showAnswer: !this.state.showAnswer });
  }
}

export default Clue;