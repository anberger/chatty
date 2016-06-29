import React from 'react';

class test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "some value"
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Input value={this.state.value} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

test.propTypes = {
  rooms: React.PropTypes.array,
  clicked: React.PropTypes.func
};

test.defaultProps = {};

export default test;