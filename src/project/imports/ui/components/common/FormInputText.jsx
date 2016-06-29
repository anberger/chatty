import React from 'react';
import { FormGroup, InputGroup, FormControl, HelpBlock } from 'react-bootstrap';

class FormInputText extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMessage() {
    if (this.props.validationState) {
      return <HelpBlock>{ this.props.message }</HelpBlock>;
    }
  }

  render() {
    return (
      <FormGroup
        validationState={ this.props.validationState }>
        { this.renderMessage() }
        <InputGroup>
          <InputGroup.Addon><i className={ this.props.icon + " small-icon" }> </i></InputGroup.Addon>
          <FormControl type={this.props.type}
                       autoComplete="new-password"
                       value={this.props.value || ''}
                       defaultValue={this.props.defaultValue}
                       placeholder={this.props.placeholder}
                       onChange={ this.props.handleChange }
                       onBlur={ this.props.handleBlur }/>
        </InputGroup>
      </FormGroup>
    );
  }
}

FormInputText.propTypes = {
  icon: React.PropTypes.string,
  type: React.PropTypes.string,
  value: React.PropTypes.string,
  validationState: React.PropTypes.string,
  message: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  handleChange: React.PropTypes.func,
  handleBlur: React.PropTypes.func
};

FormInputText.defaultProps = {
  handleChange: null,
  handleBlur: null
};

export default FormInputText;
