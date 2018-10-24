import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Switch} from 'react-router-dom'

import { updateInput } from '../../ducks/reducer';

class page2 extends component {
  constructor() {
    super();
    this.state = {
      names: []
    };
  }

submitName = () => { 
    this.setState({names: [...this.state.names, props.name]})}
}

  render() {
      const nameMap = this.state.names.map((e,i)=> {
          return <div key={i}>
              <p>{e}</p>
          </div>
      })
    return (
      <div>
        <h1>Page 2</h1>
        <h3>Tell us you're favorite superhero!</h3>
        <input
          type="text"
          name="name"
          onChange={e => this.props.updateInput(e)}
        />
        <button onClick={() => this.submitName()}>Submit</button>
        {nameMap}
        <div className={bottom_links}>
            <Link to="/">
            <p>Home</p>
            </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { updateInput }
)(page2);
