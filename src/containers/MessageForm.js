import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createMessage } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch
  )
}

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.newMessage.focus();
  // }

  componentDidUpdate() {
    this.newMessage.focus();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, "Vladi", this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input ref={(input) => this.newMessage = input} type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
