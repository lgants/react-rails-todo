import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import { Field, reduxForm } from 'redux-form'
import DatePicker from "react-bootstrap-date-picker";

const generateDatePickerField = ({input}) => (
  <div>
    <DatePicker placeholder=" " showClearButton={false}
    {...input} />
  </div>
);

class TaskForm extends Component {
  handleFormSubmit(formProps) {
    this.props.actions.submitTask({...formProps});
  }

  handleShowTaskForm() {
    this.props.actions.showTaskForm();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            New Task
          </div>
          <div className="panel-body">
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <Field
                  className="form-control"
                  name="title"
                  component="input"
                  type="text" />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <Field
                  className="form-control"
                  name="description"
                  component="textarea"
                  rows="5" />
              </div>

              <div className="form-group">
                <label htmlFor="deadline">Deadline</label>
                <Field
                  value={new Date().toISOString()}
                  name="deadline"
                  component={generateDatePickerField}
                  type="text" />
              </div>


              <div className="row">
                <div className="col-xs-6">
                  <button type="submit" className="btn btn-success btn-block">
                    Submit
                  </button>
                </div>
                <div className="col-xs-6">
                  <button type="button" className="btn btn-danger btn-block" onClick={() => this.handleShowTaskForm()}>
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showTaskForm: state.tasks.showTaskForm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'TaskForm'
  })(TaskForm)
);
