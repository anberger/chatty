import React from 'react';
import { Row, Grid } from 'react-bootstrap';
class Default extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const url = require('./../assets/background.jpg');
    
    const style = {
      height: '100%',
      backgroundImage: 'url(' + url + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    };

    return (
      <div style={style} className="outer-margin">
        <Grid className="default-content">
          <Row>
            {this.props.children}
          </Row>
        </Grid>
      </div>
    );
  }
}

Default.propTypes = {
  children: React.PropTypes.element
};

Default.defaultProps = {};

export default Default;