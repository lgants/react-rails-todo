import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import { Button } from 'react-bootstrap';

import List from '../components/List';
import ListForm from '../components/ListForm';


class App extends Component {
  render() {
    return (
      <div>
        <ListForm />
        <div className="container">
          <Button>Create a List!</Button>
          <List />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
