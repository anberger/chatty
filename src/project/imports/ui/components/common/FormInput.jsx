import React from 'react';
import { FormGroup, InputGroup, FormControl, HelpBlock } from 'react-bootstrap';

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      validationState: null,
      message: null,
      value: null
    };
  }

  handleChange() {
    // Handle in children class
    console.error("Seems that this method is not implemented in child class");
  }

  handleBlur() {
    // Handle in children class
    console.error("Seems that this method is not implemented in child class");
  }

  renderMessage() {
    if (this.state.validationState) {
      return <HelpBlock>{ this.state.message }</HelpBlock>;
    }
  }

  render() {
    return (
      <FormGroup
        validationState={ this.state.validationState }>
        { this.renderMessage() }
        <InputGroup>
          <InputGroup.Addon><i className={ this.props.icon + " small-icon" }> </i></InputGroup.Addon>
          <FormControl type={this.props.type}
                       ref="inputField"
                       placeholder={this.props.placeholder}
                       onChange={ this.handleChange }
                       onBlur={ this.handleBlur }/>
        </InputGroup>
      </FormGroup>
    );
  }
}

FormInput.propTypes = {
  icon: React.PropTypes.string,
  type: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  callback: React.PropTypes.func
};

FormInput.defaultProps = {};

export default FormInput;
