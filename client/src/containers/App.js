import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

import List from '../components/List';
import TaskForm from './TaskForm';


class App extends Component {
  handleShowTaskForm() {
    this.props.actions.showTaskForm();
  }

  handleSubmitTask() {
    this.props.actions.submitTask();
  }

  handleDestroyTask(task) {
    this.props.actions.destroyTask(task);
  }

  render() {
    const showTaskForm = this.props.showTaskForm;

    return (
      <div>
        <br/>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <List tasks={this.props.tasks} handleDestroyTask={this.props.actions.destroyTask}/>
              <button type="button"
                className="btn btn-default btn-block"
                onClick={() => this.handleShowTaskForm()}>
                  New Task
              </button>
            </div>
            <div className="col-sm-6">
              {showTaskForm ? <TaskForm
                handleSubmitTask={this.props.actions.submitTask}
              /> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showTaskForm: state.tasks.showTaskForm,
    tasks: state.tasks.collection
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
