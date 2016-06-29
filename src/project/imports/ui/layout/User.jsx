import React from 'react';
import Navigation from './../components/common/Navigation';
import { Row, Grid } from 'react-bootstrap';

class Default extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <Navigation />
        <Grid>
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