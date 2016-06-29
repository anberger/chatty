import React from 'react';
import Spinner from 'react-spinkit';

class Waiting extends React.Component {

  renderChildrenComponent(children) {
    return children ? children : null;
  }

  renderDefaultSpinner() {
    return (
      <div className="text-center">
        <Spinner spinnerName='wave'/>
      </div>
    );
  }

  render() {
    const {
      isLoading,
      children
    } = this.props;

    return isLoading ? this.renderDefaultSpinner() : this.renderChildrenComponent(children);
  }
}

Waiting.propTypes = {
  children: React.PropTypes.element,
  isLoading: React.PropTypes.bool
};

export default Waiting;
