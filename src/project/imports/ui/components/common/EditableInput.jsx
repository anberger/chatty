import React from 'react';
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

class EditableInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      error: this.props.value ? null : "warning",
      errorMessage: null
    };
  }

  handleInputChange(e) {
    const value = e.target.value;
    const data = {
      id: this.props.collectionId,
      key: this.props.collectionKey,
      value: value
    };

    this.props.updateFunction.call(data, (err) => {
      if (err) {
        this.setState({
          error: 'error',
          errorMessage: err
        });
      }
      else {
        this.setState({
          value: value,
          error: value ? null : 'warning',
          errorMessage: null
        });
      }
    });
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      value: value,
      error: value ? null : 'warning'
    });
  }

  renderErrorMessage() {
    if (this.state.errorMessage) {
      return <HelpBlock>{ this.state.errorMessage.reason }</HelpBlock>;
    }
  }

  render() {
    return (
      <div>
        <FormGroup
          validationState={ this.state.error }>
          <FormControl type={ this.props.type }
                       ref="editable"
                       placeholder={ this.props.placeholder }
                       defaultValue={ this.state.value }
                       onChange={ this.handleChange.bind(this) }
                       onBlur={ this.handleInputChange.bind(this) }/>
          { this.renderErrorMessage() }

        </FormGroup>

      </div>
    );
  }
}

EditableInput.propTypes = {
  collectionId: React.PropTypes.string,
  collectionKey: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  type: React.PropTypes.string,
  updateFunction: React.PropTypes.object
};

EditableInput.defaultProps = {};

export default EditableInput;
