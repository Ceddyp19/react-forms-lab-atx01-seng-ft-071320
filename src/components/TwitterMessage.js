import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: ''};
  }

  onChange = event => {
    let input = event.target.value
    this.setState({message: input})
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.onChange} value={this.state.message} type="text" name="message" id="message" /><br/>
        <span>Remaining Characters: {charNumber}</span>
      </div>
    );
  }
}

export default TwitterMessage;
