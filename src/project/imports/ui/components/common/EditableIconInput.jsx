import React from 'react';
import EditableInput from './EditableInput.jsx';
import { InputGroup, FormGroup, FormControl } from 'react-bootstrap';

class EditableIconInput extends EditableInput {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FormGroup
          validationState={ this.state.error }>
          <InputGroup>
            <InputGroup.Addon><i className={ 'ion-' + this.props.icon + ' small-icon' }> </i></InputGroup.Addon>
            <FormControl type={ this.props.type }
                         placeholder={ this.props.placeholder }
                         defaultValue={ this.state.value }
                         onChange={ this.handleChange.bind(this) }
                         onBlur={ this.handleInputChange.bind(this)}/>
          </InputGroup>
          { this.renderErrorMessage() }
        </FormGroup>
      </div>
    );
  }
}

EditableIconInput.propTypes = {
  ...EditableInput.propTypes,
  icon: React.PropTypes.string
};

EditableIconInput.defaultProps = {};

export default EditableIconInput;
