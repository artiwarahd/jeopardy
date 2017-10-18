import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Clue from './Clue';

export class Category extends Component {
  componentDidMount(){
    fetch(`http://jservice.io/api/category?id=${this.props.category.id}`)
        .then(response => response.json())
        .then(json => this.setState({clue: json.clues}));
  }

  render(){
    return(
      <div>
        <Link to='/' className='link-home'><h4>Home</h4></Link>
        <h2>{this.props.category.title}</h2>

        <div className="clues">
          {
            this.props.clues.map(clue => {
              return(
                <Clue clue={clue} key={clue.id} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    category: state.category,
    clues: state.clues
  }
}

export default connect(mapStateToProps, {})(Category);